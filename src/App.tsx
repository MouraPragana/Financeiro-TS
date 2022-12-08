import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import { LoadingComponent } from "./components/loading";
import Router from "./router";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Suspense fallback={<LoadingComponent />}>
        <Router />
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
