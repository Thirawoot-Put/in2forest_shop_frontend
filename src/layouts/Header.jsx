import { Link } from "react-router-dom";
import useAuth from "../hooks/use-auth";
import { useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const { logout, authUser } = useAuth();

  return (
    <header className="flex justify-between items-center h-20 px-16 bg-[#f0f0f0] fixed top-0 right-0 w-full">
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
      {authUser ? (
        <div className="flex items-center gap-6">
          <div className="dropdown dropdown-end bg-[#f0f0f0]">
            <div tabIndex={0} role="button" className=" m-1">
              <img
                className="w-8"
                src="/src/assets/pic/header-footer/profile-header.png"
                alt="profile"
              />
            </div>
            <ul
              tabIndex={0}
              className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a onClick={() => navigate("/profile")}>Profile information</a>
              </li>
              <li>
                <a onClick={() => navigate("/orders")}>Orders</a>
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
            </ul>
          </div>

          {authUser.role === "CUSTOMER" && (
            <Link to="/cart">
              <img
                className="w-8"
                src="/src/assets/pic/header-footer/cart-header.png"
                alt="cart"
              />
            </Link>
          )}

          {authUser.role === "ADMIN" && (
            <div className="dropdown dropdown-end bg-[#f0f0f0]">
              <div tabIndex={0} role="button" className=" m-1">
                <img
                  className="w-8"
                  src="/src/assets/pic/header-footer/admin-img.png"
                  alt="profile"
                />
              </div>
              <ul
                tabIndex={0}
                className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <a onClick={() => navigate("/admin/product")}>Add product</a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/admin");
                    }}
                  >
                    Edit & Delete product
                  </a>
                </li>
                <li>
                  <a
                    onClick={() => {
                      navigate("/admin/orders");
                    }}
                  >
                    View all orders
                  </a>
                </li>
              </ul>
            </div>
          )}
        </div>
      ) : (
        <button>Login</button>
      )}
    </header>
  );
}

export default Header;
