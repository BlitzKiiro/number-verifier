import { Outlet } from "react-router-dom";
import PageNavbar from "../components/Layout/Navigation";
import PageFooter from "../components/Layout/Footer";
import cn from "classnames";

const Root = () => {
  return (
    <div className={cn("w-11/12 lg:w-[1036px] m-auto")}>
      <PageNavbar />
      <main>
        <Outlet />
      </main>
      <PageFooter />
    </div>
  );
};

export default Root;
