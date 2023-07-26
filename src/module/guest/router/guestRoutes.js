// import Home from "@/module/guest/pages/Home.vue";
import Home from "../pages/Home.vue";
import About from "../pages/About.vue";
import Service from "../pages/Service.vue";
import Header from "../pages/Header.vue";
import Hero from "../pages/Hero.vue";
import Protfolio from "../pages/Protfolio.vue";
import Blog from "../pages/Blog.vue";
import Contact from "../pages/Contact.vue";
import Footer from "../pages/Footer.vue";
import Team from "../pages/Team.vue";
import Testimonial from "../pages/Testimonial.vue";
import NewsLetter from "../pages/NewsLetter.vue";


import NotFound from "../../../pages/core/NotFound.vue";

const routes = [
  {
    path: "/",
    component: import("../layout/Guest.vue"),
    children: [
      // Not Found
      {
        path: "/:pathMatch(.*)*",
        name: "notfound",
        component: NotFound,
        meta: {
          title: "Not Found",
        },
      },
      {
        path: "/",
        name: "home",
        component: Home,
        meta: {
          title: "Home",
        },
      },
      {
        path: "/header",
        name: "header",
        component: Header,
        meta: {
          title: "Header",
        },
      },
      {
        path: "/hero",
        name: "hero",
        component: Hero,
        meta: {
          title: "Hero",
        },
      },
      {
        path: "about",
        name: "about",
        component: About,
        meta: {
          title: "About",
        },
      },
      {
        path: "service",
        name: "service",
        component: Service,
        meta: {
          title: "Service",
        },
      },
      {
        path: "protfolio",
        name: "protfolio",
        component: Protfolio,
        meta: {
          title: "Protfolio",
        },
      },
      {
        path: "blog",
        name: "blog",
        component: Blog,
        meta: {
          title: "Blog",
        },
      },
      {
        path: "contact",
        name: "contact",
        component: Contact,
        meta: {
          title: "Contact",
        },
      },
      {
        path: "footer",
        name: "footer",
        component: Footer,
        meta: {
          title: "Footer",
        },
      },
      {
        path: "team",
        name: "team",
        component: Team,
        meta: {
          title: "Team",
        },
      },
      {
        path: "testimonial",
        name: "testimonial",
        component: Testimonial,
        meta: {
          title: "Testimonial",
        },
      },
      {
        path: "news-letter",
        name: "news-letter",
        component: NewsLetter,
        meta: {
          title: "News Letter",
        },
      },
    ],
  },
];

export default routes;
