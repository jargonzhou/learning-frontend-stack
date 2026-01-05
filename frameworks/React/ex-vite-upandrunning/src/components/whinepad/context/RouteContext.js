import React from 'react'

export const RouteContext = React.createContext({
  route: {
    add: false,
    edit: null,
    info: null,
    filter: null,
  },
  updateRoute: () => { }
})