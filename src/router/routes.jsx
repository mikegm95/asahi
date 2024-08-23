export const routes = [
  {
    path: "*",
    element: "./components/pages/NotFound",
  },
  {
    path: "/",
    element: "./components/pages/Landing",
  },
  {
    path: "/game/details/:dealId",
    element: "./components/pages/GameDetails",
  },
];
