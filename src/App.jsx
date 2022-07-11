import {Suspense} from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'

import Spinner from "./Components/Spinner";
import {useRoutes} from "./Routes";

import './App.css'

function Router() {

  return (
    <Suspense fallback={<Spinner />} className="app" >
      <Routes >
        {
          useRoutes.map(route => {
            const { path, Component, children = [] } = route;
            return (
              <Route key={path} path={path} element={<Component />}>
                {children.map(route => {
                  const { path, Component } = route;
                  return (
                    <Route
                      key={path}
                      path={path}
                      element={<Component />}
                    />
                  );
                })}
              </Route>
            );
          })
        }
      </Routes>
    </Suspense>
  );
};

const queryClient = new QueryClient()

function App() {
  console.log("VITE_APP_BASEURL IS", import.meta.env.VITE_BASEURL);
  return (
    <QueryClientProvider client={queryClient}>
      <BrowserRouter basename="/exela">
        <Router />
      </BrowserRouter>
    </QueryClientProvider>
  )
};

export default App;
