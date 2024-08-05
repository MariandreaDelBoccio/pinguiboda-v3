const routes = [
  {
    path: "/:invites",
    name: "pinguiboda",
    component: () => import("src/views/SinglePage.vue"),
    children: [
      {
        path: "/:invites",
        name: "welcome",
        component: () => import("src/modules/Welcome/WelcomePage.vue"),
      },
      {
        path: "home",
        name: "home",
        component: () => import("src/modules/Home/HomePage.vue"),
      },
      {
        path: "event",
        name: "event",
        component: () => import("src/modules/Event/EventPage.vue"),
      },
      {
        path: "dressup",
        name: "dress-up",
        component: () => import("src/modules/DressUp/DressupPage.vue"),
      },
      {
        path: "form",
        name: "form",
        component: () => import("src/modules/Form/FormPage.vue"),
      },
      {
        path: "gift",
        name: "gift",
        component: () => import("src/modules/Gift/GiftPage.vue"),
      },
    ],
  },
  {
    path: "/thanks",
    name: "thankyou",
    component: () => import("src/modules/ThankyouPage/ThankyouPage.vue"),
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("src/modules/Error/ErrorNotFound.vue"),
  },
];

export default routes;
