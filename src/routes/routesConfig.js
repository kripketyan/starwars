import HomePage from "@containers/HomePage";
import PeoplePage from "@containers/PeoplePage";
import PersonPage from "@containers/PersonPage";
import NotFoundPage from "@containers/NotFoundPage";
import FavoritesPage from "@containers/FavoritesPage";
import SearchPage from "@containers/SearchPage";
import ErrorMessage from "@components/ErrorMessage";

const routesConfig = [
  {
    path: "/",
    Component: HomePage,
  },
  {
    path: "/people",
    Component: PeoplePage,
  },
  {
    path: "/people/:id",
    Component: PersonPage,
  },
  {
    path: "/favorites",
    Component: FavoritesPage,
  },
  {
    path: "/search",
    Component: SearchPage,
  },
  {
    path: "/fail",
    Component: ErrorMessage,
  },
  {
    path: "/not-found",
    Component: NotFoundPage,
  },
  {
    path: "*",
    Component: NotFoundPage,
  },
];

export default routesConfig;
