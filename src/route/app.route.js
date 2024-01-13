import { Router } from 'express';
import App from '../controller/app.controller.js';

const route = Router();
const app = new App();

route.get('/console', app.console);

export default route;