import { route } from "quasar/wrappers";
import { createRouter, createWebHistory } from "vue-router";
import routes from "./routes";

/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = createWebHistory;

  const Router = createRouter({
    scrollBehavior(to, from) {
      if (to.hash) {
        return {
          el: to.hash,
          behavior: "smooth",
        };
      }
    },
    routes,
    history: createHistory(process.env.VUE_ROUTER_BASE),
  });

  return Router;
});
