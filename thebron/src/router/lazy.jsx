import Loader from "@/components/shared/loader";
import { lazy } from "react";

const handleCatchChunkError = () => {
  window.location.reload();
  return { default: Loader };
};

const Home = lazy(() =>
  import("@/pages")
    .then(({ Home }) => ({ default: Home }))
    .catch(handleCatchChunkError),
);

const Bron = lazy(() =>
  import("@/pages")
    .then(({ Bron }) => ({ default: Bron }))
    .catch(handleCatchChunkError),
);

const Cinema = lazy(() =>
  import("@/pages")
    .then(({ Cinema }) => ({ default: Cinema }))
    .catch(handleCatchChunkError),
);

const Places = lazy(() =>
  import("@/pages")
    .then(({ Places }) => ({ default: Places }))
    .catch(handleCatchChunkError),
);

const News = lazy(() =>
  import("@/pages")
    .then(({ News }) => ({ default: News }))
    .catch(handleCatchChunkError),
);

const Account = lazy(() =>
  import("@/pages")
    .then(({ Account }) => ({ default: Account }))
    .catch(handleCatchChunkError),
);

const Restaurant = lazy(() =>
  import("@/pages")
    .then(({ Restaurant }) => ({ default: Restaurant }))
    .catch(handleCatchChunkError),
);

const RestaurantSlug = lazy(() =>
  import("@/pages")
    .then(({ RestaurantSlug }) => ({ default: RestaurantSlug }))
    .catch(handleCatchChunkError),
);

const Login = lazy(() =>
  import("@/pages")
    .then(({ Login }) => ({ default: Login }))
    .catch(handleCatchChunkError),
);

export {
  Home,
  News,
  Bron,
  Login,
  Cinema,
  Places,
  Account,
  Restaurant,
  RestaurantSlug,
};
