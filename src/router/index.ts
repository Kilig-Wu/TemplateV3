import { createRouter, Router, createWebHistory } from "vue-router";
import type { App } from "vue";
import constantRoutes from "./constant-routes";

export const router: Router = createRouter({
  history: createWebHistory(),
  routes: [...constantRoutes],
});

export function setupRouter(app: App<Element>) {
  app.use(router);
}
