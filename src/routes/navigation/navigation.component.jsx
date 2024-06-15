import { Outlet, Link } from "react-router-dom";
import { ReactComponent as PixelLogo } from "../../assets/logo.svg";
import "./navigation.styles.scss";
import { useUserContext } from "../../providers/user.context";

const Navigation = () => {
  const { user } = useUserContext();
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <PixelLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/catalog">
            CATALOG
          </Link>
          {user ? (
            <Link className="nav-link" to="/">
              SIGN OUT
            </Link>
          ) : (
            <Link className="nav-link" to="/sign-in">
              SIGN IN
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default Navigation;
