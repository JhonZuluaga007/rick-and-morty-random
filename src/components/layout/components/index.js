import React from "react";
import { Main } from "./elements";
import Navbar from "./navbar";


const Layout = ({ children }) => (
  <>
    <Navbar />
    <Main>{children}</Main>
  </>
);

export default Layout;
