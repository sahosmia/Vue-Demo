import AdminHome from "../pages/Home.vue";
import Admin from "../layout/Admin.vue";

export default [
  {
    path: "/admin",
    component: Admin,
    children: [
      {
        path: "home",
        name: "admin-home",
        component: AdminHome,
      },
    ],
  },
];
