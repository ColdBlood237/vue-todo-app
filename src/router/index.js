import { createRouter, createWebHistory } from "vue-router";
import TasksView from "../views/TasksView.vue";
import LoginView from "../views/LoginView.vue";
import CompletedView from "../views/CompletedView.vue";
import NotFoundView from "../views/NotFoundView.vue";

const routes = [
  {
    path: "/",
    redirect: "/tasks",
  },
  {
    path: "/tasks",
    name: "tasks",
    component: TasksView,
  },
  {
    path: "/completed",
    name: "completed",
    component: CompletedView,
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/:catchAll(.*)",
    name: "notFound",
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
