import { Vuepress } from '@vuepress/client/lib/components/Vuepress'

const routeItems = [
  ["v-8daa1a0e","/","树熊ui",["/index.html","/README.md"]],
  ["v-147825fb","/docs/","docs",["/docs/index.html","/docs/README.md"]],
  ["v-1020f180","/components/","components",["/components/index.html","/components/README.md"]],
  ["v-3bb939a7","/components/button.html","按钮 Button",["/components/button","/components/button.md"]],
  ["v-3706649a","/404.html","",["/404"]],
]

export const pagesRoutes = routeItems.reduce(
  (result, [name, path, title, redirects]) => {
    result.push(
      {
        name,
        path,
        component: Vuepress,
        meta: { title },
      },
      ...redirects.map((item) => ({
        path: item,
        redirect: path,
      }))
    )
    return result
  },
  [
    {
      name: "404",
      path: "/:catchAll(.*)",
      component: Vuepress,
    }
  ]
)
