class Storage {
  setCredentials({ access, refresh, role }) {
    if (access) {
      localStorage.setItem('ACCESS_TOKEN', `Bearer ${access}`)
      localStorage.setItem('REFRESH_TOKEN', `Bearer ${refresh}`)
      localStorage.setItem('ROLE', role)
    }
  }

  removeCredentials() {
    localStorage.removeItem('ACCESS_TOKEN')
    localStorage.removeItem('REFRESH_TOKEN')
    localStorage.removeItem('ROLE')
  }

  getTokens() {
    return {
      access: localStorage.getItem('ACCESS_TOKEN'),
      refresh: localStorage.getItem('REFRESH_TOKEN'),
    }
  }

  getRole() {
    return localStorage.getItem('ROLE')
  }
}

export const useStorage = new Storage()
