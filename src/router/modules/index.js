import { teachingRouter } from './teaching.js';
import { schoolworkRouter } from './schoolwork';

export const asyncRoutes = {
  ...teachingRouter,
  ...schoolworkRouter
}

export { teachingRouter, schoolworkRouter };