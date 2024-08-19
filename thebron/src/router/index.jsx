import { AuthLayout, HomeLayout } from "@/layouts";
import {
  Home,
  Bron,
  News,
  Login,
  Cinema,
  Account,
  Restaurant,
  RestaurantSlug,
  Places,
} from "./lazy";
import { Routes, Route } from "react-router-dom";
import { Suspense } from "react";
import DetailsPage from "@/pages/home/details";
import Loader from "@/components/shared/loader";
import PersonalInformation from "@/pages/account/personal-information";
import LoginAndSecurity from "@/pages/account/login-and-security";

const Router = () => {
  return (
    <>
      <Routes>
        <Route element={<HomeLayout />}>
          <Route
            index
            path="/"
            element={
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            }
          />

          {/* Resorts */}
          <Route path="/resorts/:id" element={<DetailsPage />} />

          <Route
            path="resorts/:id/bron"
            element={
              <Suspense fallback={<Loader />}>
                <Bron />
              </Suspense>
            }
          />

          {/* News */}
          <Route
            path="/news"
            element={
              <Suspense fallback={<Loader />}>
                <News />
              </Suspense>
            }
          />

          {/* Restaurant */}
          <Route
            path="/restaurant"
            element={
              <Suspense fallback={<Loader />}>
                <Restaurant />
              </Suspense>
            }
          />

          <Route
            path="/restaurants/:id"
            element={
              <Suspense fallback={<Loader />}>
                <Restaurant />
              </Suspense>
            }
          />

          <Route
            path="/restaurants/:id/bron"
            element={
              <Suspense fallback={<Loader />}>
                <Bron />
              </Suspense>
            }
          />

          {/* Account */}
          <Route
            path="/account"
            element={
              <Suspense fallback={<Loader />}>
                <Account />
              </Suspense>
            }
          />

          <Route
            path="/account/personal-information"
            element={
              <Suspense fallback={<Loader />}>
                <PersonalInformation />
              </Suspense>
            }
          />

          <Route
            path="/account/login-and-security"
            element={
              <Suspense fallback={<Loader />}>
                <LoginAndSecurity />
              </Suspense>
            }
          />

          <Route
            path="/account/personal-information/:id"
            element={
              <Suspense fallback={<Loader />}>
                <PersonalInformation />
              </Suspense>
            }
          />

          <Route
            path="/cinema/:id"
            element={
              <Suspense fallback={<Loader />}>
                <Cinema />
              </Suspense>
            }
          />

          <Route
            path="/cinema/:id/places"
            element={
              <Suspense fallback={<Loader />}>
                <Places />
              </Suspense>
            }
          />
        </Route>
      </Routes>
      <Routes>
        <Route element={<AuthLayout />}>
          <Route
            path="/login"
            element={
              <Suspense fallback={<Loader />}>
                <Login />
              </Suspense>
            }
          />
        </Route>
      </Routes>
    </>
  );
};

export default Router;
