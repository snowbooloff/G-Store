import { VueElement } from 'vue'

declare module 'vue-router' {
  interface RouteMeta {
    layoutName: string
    layoutComponent?: VueElement
    access?: string
  }
}
