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
import { Toaster } from 'sonner'

const router = createBrowserRouter([
  {
    path: "/",
    element: <InitialPage />,
    errorElement: <div>Not Found</div>,
  },
  {
    path: "/:profileId",
    element: (
      <ProtectedComponent>
        <ContainerCentral>
          <Profile />
        </ContainerCentral>
      </ProtectedComponent>
    ),
  },
  {
    path: "/home",
    element: (
      <ProtectedComponent>
        <ContainerCentral>
          <Feed />
        </ContainerCentral>
      </ProtectedComponent>
    ),
  },
  {
    path: "/foruns",
    element: (
      <ProtectedComponent>
        <ContainerCentral>
          <div>foruns</div>
        </ContainerCentral>
      </ProtectedComponent>
    ),
  },
  {
    path: "/search",
    element: (
      <ProtectedComponent>
        <ContainerCentral>
          <div>search</div>
        </ContainerCentral>
      </ProtectedComponent>
    ),
  },
  {
    path: "/more",
    element: (
      <ProtectedComponent>
        <ContainerCentral>
          <div>more</div>
        </ContainerCentral>
      </ProtectedComponent>
    ),
  },
  {
    path: "/config",
    element: (
      <ProtectedComponent>
        <ContainerCentral>
          <div>config</div>
        </ContainerCentral>
      </ProtectedComponent>
    ),
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GoogleOAuthProvider clientId="261384658112-lkecapjtglp4l818sppi3d3695jaml9k.apps.googleusercontent.com">
      <AuthProvider isSignedIn={false}>

        <Toaster richColors />
        <RouterProvider router={router} />
      </AuthProvider>
    </GoogleOAuthProvider>
  </React.StrictMode>
);
