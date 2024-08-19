import { EndpointResort } from '../../../constants/endpoints'
import { RTKTagNames } from '../../../constants/rtk-tag-names'
import { baseApi } from '../api'

const ResortExtendedEndoints = baseApi.injectEndpoints({
  endpoints: build => ({

    getResorts: build.query({
      query: params => ({
        url: EndpointResort.RESORT,
        method: 'GET',
        params,
      }),
      providesTags: [RTKTagNames.RESORT],
    }),

    getResortByID: build.query({
      query: id => ({
        url: `${EndpointResort.RESORT}${id}/`,
        method: 'GET',
      }),
      providesTags: [RTKTagNames.RESORT],
    }),


    // addClient: build.mutation({
    //   query: body => ({
    //     url: EndpointNameUsers.CLIENTS,
    //     method: 'POST',
    //     body,
    //     prepareHeaders: headers => {
    //       headers.set('Content-Type', 'multipart/form-data')
    //       return headers
    //     },
    //   }),
    //   invalidatesTags: [RTKTagNames.CLIENTS],
    // }),
    // updateClient: build.mutation({
    //   query: ({ id, body }) => ({
    //     url: `${EndpointNameUsers.CLIENTS}${id}/`,
    //     method: 'PATCH',
    //     body,
    //   }),
    //   invalidatesTags: [RTKTagNames.CLIENT],
    // }),
    // deleteClient: build.mutation({
    //   query: id => ({
    //     url: `${EndpointNameUsers.CLIENTS}${id}/`,
    //     method: 'DELETE',
    //   }),

    //   invalidatesTags: [RTKTagNames.CLIENTS],
    // }),
    // paymentClient: build.mutation({
    //   query: ({ body, id }) => ({
    //     url: `${EndpointNameUsers.CLIENTS}${id}/payments/`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: [RTKTagNames.PAYMENTS, RTKTagNames.CLIENT],
    // }),
    // getPaymentClient: build.query({
    //   query: id => ({
    //     url: `${EndpointNameUsers.CLIENTS}${id}/payments/`,
    //     method: 'GET',
    //   }),
    //   providesTags: [RTKTagNames.PAYMENTS],
    // }),
    // updatePaymentStatus: build.mutation({
    //   query: ({ client_id, payment_id }) => ({
    //     url: `${EndpointNameUsers.CLIENTS}${client_id}/update-status/`,
    //     method: 'PATCH',
    //     params: { payment_id },
    //   }),
    //   invalidatesTags: [RTKTagNames.PAYMENTS],
    // }),
    // getClientComments: build.query({
    //   query: (id, params) => ({
    //     url: `${EndpointNameUsers.CLIENTS}${id}/comments/`,
    //     method: 'GET',
    //     params,
    //   }),
    //   providesTags: [RTKTagNames.CLIENT_COMMENTS],
    // }),
    // addCommentToClient: build.mutation({
    //   query: ({ id, body }) => ({
    //     url: `${EndpointNameUsers.CLIENTS}${id}/comments/`,
    //     method: 'POST',
    //     body,
    //   }),
    //   invalidatesTags: [RTKTagNames.CLIENT],
    // }),
  }),
})

export const {
  // useGetClientsQuery,
  // useLazyGetClientsQuery,
  // useAddClientMutation,
  // useDeleteClientMutation,
  // useGetClientByIDQuery,
  // usePaymentClientMutation,
  // useGetPaymentClientQuery,
  // useLazyGetPaymentClientQuery,
  // useUpdatePaymentStatusMutation,
  // useAddCommentToClientMutation,
  // useLazyGetClientCommentsQuery,
  // useUpdateClientMutation,
  useLazyGetResortsQuery,
  useGetResortByIDQuery
} = ResortExtendedEndoints
