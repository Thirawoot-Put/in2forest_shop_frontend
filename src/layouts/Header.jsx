import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const { logout, authUser } = useAuth();

  return (
    <header className="flex justify-between items-center h-20 px-16 bg-[#f0f0f0]">
      <Link to="/" className="flex justify-center items-center gap-1">
        <img
          className="w-14"
          src="/src/assets/pic/circle-logo.png"
          alt="logo"
          role="button"
        />
        <h1 className="font-semibold text-lg" role="button">
          In2Forrest Shop
        </h1>
      </Link>
      <div className="flex items-center gap-6">
        <div className="dropdown dropdown-end bg-[#f0f0f0]">
          <div tabIndex={0} role="button" className=" m-1">
            <img
              className="w-8"
              src="/src/assets//pic/header-footer/profile-header.png"
              alt="profile"
            />
          </div>
          <ul
            tabIndex={0}
            className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
          >
            {authUser ? (
              <>
                <li>
                  <a onClick={() => navigate("/profile")}>
                    Profile information
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      logout();
                      navigate("/login");
                    }}
                  >
                    Log out
                  </a>
                </li>
              </>
            ) : (
              <li>
                <a
                  onClick={() => {
                    navigate("/login");
                  }}
                >
                  Login
                </a>
              </li>
            )}
          </ul>
        </div>

        <Link to="/cart">
          <img
            className="w-8"
            src="/src/assets/pic/header-footer/cart-header.png"
            alt="cart"
          />
        </Link>
      </div>
    </header>
  );
}

export default Header;
