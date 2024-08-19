import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { Mutex } from 'async-mutex'
import { useStorage } from '../../utils/storage';
import { RTKTagNames } from '../../constants/rtk-tag-names';
const API_URL = import.meta.env.VITE_APP_BACKEND_URL;
export const baseUrl = `${API_URL}/api/v1/router`

const mutex = new Mutex()

const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: headers => {
    const accessToken = useStorage.getTokens().access?.split(' ')[1]
    if (accessToken) {
      headers.set('Authorization', `Bearer ${accessToken}`)
    }
    headers.set('Accept', 'application/json')
    return headers
  },
})

const customFetchBase = async (args, api, extraOptions) => {
  await mutex.waitForUnlock()

  const accessToken = useStorage.getTokens().accessToken?.split(' ')[1]
  let result = await baseQuery(args, api, extraOptions)

  if (result.error?.error && result.error?.status === 401 && accessToken) {
    if (!mutex.isLocked()) {
      const release = await mutex.acquire()

      try {
        const refreshResult = await baseQuery(
          {
            url: EndpointNameAuth.REFRESH_TOKEN,
            body: {
              // accessToken: api.getState()?.auth?.token,
              refresh: api.getState()?.auth?.refreshToken,
            },
            method: 'POST',
          },
          api,
          extraOptions,
        )

        if (refreshResult.data) {
          result = await baseQuery(args, api, extraOptions)
        }
      } finally {
        release()
      }
    } else {
      await mutex.waitForUnlock()
      result = await baseQuery(args, api, extraOptions)
    }
  }

  return result
}

export const baseApi = createApi({
  reducerPath: 'api',
  baseQuery: customFetchBase,
  tagTypes: Object.values(RTKTagNames),
  endpoints: () => ({}),
})
