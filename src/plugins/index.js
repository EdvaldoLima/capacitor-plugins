import { router } from './vueRouter'

export const usePlugins = (app) => {
  app.use(router)
}
