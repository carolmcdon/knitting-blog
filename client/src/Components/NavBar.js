import { NavLink } from "react-router-dom";

export default function NavBar({currentUser}) {
  
  const linkStyles = {
    width: "100px",
    margin: "0 35px 20px",
    textDecoration: "none",
    color: "white",
  };
    
  return (
    <>
      <div id="navBarContainer">
      <h1 id="Logo">Knitting Neighbors</h1>
        <div className="navBar">
          <NavLink
            to="/home"
            exact
            style={linkStyles}
          >
            Home
          </NavLink>
          <NavLink
            to="/myPosts"
            exact
            style={linkStyles}
          >
            My Patterns
          </NavLink>
          <NavLink
            to="/login"
            exact
            style={linkStyles}
          >
            {currentUser ?
            "Logout"
            :
            "Log In"
            }
          </NavLink>
        </div>
      </div>
    </>
  )
}
