const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "me", component: () => import("pages/Me.vue") },
      { path: "index", component: () => import("pages/IndexPage.vue") },
    ],
  },
  {
    path: "/",
    component: () => import("layouts/LoginLayout.vue"),
    children: [
      { path: "", component: () => import("pages/Login.vue") },
      { path: "login", component: () => import("pages/Login.vue") },
      { path: "register", component: () => import("pages/Register.vue") },
      {
        path: "email-confirmation",
        component: () => import("pages/EmailConfirmation.vue"),
      },
    ],
  },
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
