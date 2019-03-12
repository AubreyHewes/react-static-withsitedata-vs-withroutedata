import axios from 'axios'

export default {
  getSiteData: () => ({
    title: 'SITE_DATA'
  }),
  getRoutes: async () => {
    return [
      {
        path: '/',
        component: 'src/components/Home',
        getData: () => ({
          title: 'ROUTE_DATA',
        })
      },
    ]
  },
}
