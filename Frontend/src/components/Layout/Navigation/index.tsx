import { Navbar, Button } from "flowbite-react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logout, reset } from "../../../services/auth/authSlice";

const PageNavbar = () => {
  const { user } = useSelector((state: any) => state.auth);
  const dispatch = useDispatch();

  const logOut = () => {
    dispatch(logout() as any);
    dispatch(reset());
  };
  return (
    <Navbar fluid={true} rounded={true}>
      <Navbar.Brand href='/'>
        <span className='self-center whitespace-nowrap text-xl font-semibold dark:text-white'>
          Number Verfier
        </span>
      </Navbar.Brand>
      <div className='flex md:order-2'>
        {user ? (
          <Button onClick={logOut}>Logout</Button>
        ) : (
          <Link to={"/login"}>
            <Button>Sign in</Button>
          </Link>
        )}
        <Navbar.Toggle />
      </div>
      <Navbar.Collapse>
        <Link to={"/"}>
          <li className='navlink'>Home</li>
        </Link>
        <Link to={"/history"}>
          <li className='navlink'>History</li>
        </Link>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default PageNavbar;
