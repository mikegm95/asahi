import React, { Suspense } from "react";
import { routes } from "../src/router/routes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/pages/Landing";

function App() {
  return (
    <Router>
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            {routes.map((route, index) => {
              const Component = React.lazy(() => import(`${route.element}`));

              return (
                <Route key={index} path={route.path} element={<Component />} />
              );
            })}
          </Route>
        </Routes>
      </Suspense>
    </Router>
  );
}

export default App;
