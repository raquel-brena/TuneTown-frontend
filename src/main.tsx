import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import "./index.css";

import { Profile } from './app/pages/Profile.tsx';
import { InitialPage } from './app/pages/InitialPage.tsx';
import { ContainerCentral } from './app/pages/ContainerCentral.tsx';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AuthProvider from "./infra/contexts/auth/AuthProvider.tsx";
import { ProtectedComponent } from './infra/contexts/auth/ProtectedRoute.tsx';
import { Feed } from './app/pages/Feed.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <ProtectedComponent>
        <InitialPage />
      </ProtectedComponent>
    ),
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/:profileId",
    element: (
      <ContainerCentral>
        <Profile />
      </ContainerCentral>
    ),
  },
  {
    path: "/home",
    element: (
      <ContainerCentral>
        <Feed />
      </ContainerCentral>
    ),
  },
  {
    path: "/foruns",
    element: (
      <ContainerCentral>
        <div>foruns</div>
      </ContainerCentral>
    ),
  },
  {
    path: "/search",
    element: (
      <ContainerCentral>
        <div>search</div>
      </ContainerCentral>
    ),
  },
  {
    path: "/more",
    element: (
      <ContainerCentral>
        <div>more</div>
      </ContainerCentral>
    ),
  },
  {
    path: "/config",
    element: (
      <ContainerCentral>
        <div>config</div>
      </ContainerCentral>
    ),
  },

]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
   <GoogleOAuthProvider clientId="261384658112-lkecapjtglp4l818sppi3d3695jaml9k.apps.googleusercontent.com">
    <AuthProvider isSignedIn={false}>
      <RouterProvider router={router} />
    </AuthProvider>
   </GoogleOAuthProvider>
  </React.StrictMode>
);
