import { Outlet, Link } from 'react-router-dom';
import Logo from '../../assets/logo.svg';
import { useUserContext } from '../../providers/user.context';
import './navigation.styles.scss';

const Navigation = () => {
  const { user } = useUserContext();
  return (
    <>
      <div className="navigation">
        <Link className="logo-container logo" to="/">
          <Logo />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/catalog">
            CATALOG
          </Link>
          <Link className="nav-link" to="/editor">
            EDITOR
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
