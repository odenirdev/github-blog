import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home />} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
