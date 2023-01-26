import { Routes as Switch, Route, BrowserRouter } from "react-router-dom";

import { DefaultLayout } from "./layouts/DefaultLayout";

import { Home } from "./pages/Home";
import { Post } from "./pages/Post";

const USERNAME = "odenirdev";

export const Routes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route element={<DefaultLayout />}>
          <Route path="/" element={<Home {...{ username: USERNAME }} />} />

          <Route
            path="/post/:postId"
            element={<Post {...{ username: USERNAME }} />}
          />
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
