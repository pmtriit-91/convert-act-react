import routesConfig from '~/config/routes'

import Home from "~/pages/Home"

//Public routes
const publicRoutes = [
    { path: routesConfig.home, component: Home },
]

//Private routes
const privateRoutes = [
]

export { publicRoutes, privateRoutes }