import { Header, Footer, FloatingMenu } from "../components/index.js";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      {<FloatingMenu />}
      <Footer />
    </>
  );
};

export default AppLayout;
