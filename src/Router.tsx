import { PropsWithChildren } from "react";
import { BrowserRouter as BRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/HomePage";

interface RouterProps {}

export default function Router({ children }: PropsWithChildren<RouterProps>) {
  return (
    <BRouter>
      {children}

      <Layout>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/test" exact component={() => <div>Test</div>} />
        </Switch>
      </Layout>
    </BRouter>
  );
}
