import { useNavigate, Link,useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const page = location.pathname === '/dashboard' ? true:false;
  const clickHandler = (e) => {
    e.preventDefault() ;
    navigate('/login');
  }
  const WeatherclickHandler = (e) => {
    e.preventDefault() ;
    navigate('/weather');
  }
  const getlang = (e) => {
    e.preventDefault() ;
    alert('language not available');
  }
  return(
    <header className="topNav">
      <nav className="navbar navbar-expand-md navbar-dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img className="nav__logo" src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" />
          </Link>
          
          <div className="navbar-nav">
          <Link className="nav-item nav-link active" to="/movies">
            <p>Movies</p>
          </Link>
            <form className="d-flex " role="search">
              <select onChange={getlang}>
                <option>English</option>
                <option>Hindi</option>
              </select>
            </form>
            <button className="btn btn-danger mx-4" onClick={clickHandler}>{ page ? 'Logout' : 'Sign In'}</button>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header;
