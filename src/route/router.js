import { Router } from 'express';
import appRoute from './app.route.js';

const router = Router();

const defaultRoute = [
    {
        path:'/app',
        route: appRoute
    }
]

defaultRoute.forEach((route) => {
    router.use(route.path, route.route)
})

export default router;