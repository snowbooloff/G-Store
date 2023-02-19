import type { RouteLocationNormalized } from 'vue-router'
export default async function loadingLayout(route: RouteLocationNormalized): Promise<void> {
  const { layoutName } = route.meta

  const component = await import(`@/layouts/${layoutName}.vue`)

  route.meta.layoutComponent = component.default
}
