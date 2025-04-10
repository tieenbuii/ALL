import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Profile from "../profile/Profile";
import Swal from "sweetalert2";
import userApi from "../../api/userApi";
import { logout } from "../../redux/auth/userSlice";
import Cart from "../cart/Cart";
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock";
import { getCart } from "../../redux/cart/cartSlice";
import CartHollow from "../cart/CartHollow";
import Search from "../search/Search";
import useClickOutSide from "../../hooks/useClickOutSide";
import useDebounce from "../../hooks/useDebounce";

const Navbar = () => {
  const loggedInUser = useSelector((state) => state.user.current);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  let { cart } = useSelector((state) => state.cart);

  const isLoggedIn = loggedInUser === null ? null : loggedInUser.active === "active";

  // Logout handler
  const handleLogout = () => {
    Swal.fire({
      title: "Đăng xuất",
      text: "Bạn có chắc chắn muốn đăng xuất không?",
      showCancelButton: true,
      icon: "question",
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Có",
      cancelButtonText: "Không",
    }).then(async (result) => {
      if (result.isConfirmed) {
        dispatch(logout());
        await userApi.logout();
        navigate("/");
        Swal.fire("Tạm biệt! Hẹn gặp lại quý khách");
      }
    });
  };

  // Đóng sidebar khi chuyển trang
  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  // Cart effect
  useEffect(() => {
    if (!cart) {
      dispatch(getCart());
    }
  }, [cart, dispatch]);

  // Search functionality
  const [keyword, setKeyword] = useState("");
  const search = useDebounce(keyword, 500);

  const handleClickSearch = () => {
    if (keyword === "") return;
    localStorage.setItem("keyword", keyword);
    navigate(`/product/?keyword=${keyword}`);
    setShow(false);
  };

  const handleChange = (e) => setKeyword(e.target.value);

  useEffect(() => {
    setKeyword("");
    localStorage.setItem("keyword", keyword);
  }, [location.search]);

  const { show, setShow, nodeRef } = useClickOutSide();

  // Hàm xử lý nhấp vào mục trong dropdown của Profile
  const handleProfileItemClick = (path) => {
    navigate(path);
    setIsMenuOpen(false); // Đóng sidebar nếu đang mở
  };

  return (
    <nav className="bg-white h-[80px] sticky top-0 z-50 shadow-md">
      <div className="container mx-auto px-4 flex items-center h-full justify-between">
        {/* Logo - Hidden on mobile */}
        <Link to="/" className="hidden md:flex items-center gap-2">
          <img
            src="/images/logo.png"
            alt="logo"
            className="h-[60px] object-cover"
            title="Trang chủ"
          />
        </Link>

        {/* Search Bar */}
        <div className="flex-grow max-w-[650px] mx-4" ref={nodeRef}>
          <div className="flex items-center border rounded-lg">
            <input
              type="text"
              className="py-3 px-4 rounded-l-lg text-base flex-grow text-black outline-none"
              placeholder="Bạn cần tìm gì?"
              onClick={() => setShow(true)}
              onChange={handleChange}
              value={keyword}
            />
            <button
              className="w-[50px] bg-gradient-to-r from-blue-500 to-purple-500 h-[48px] rounded-r-lg flex items-center justify-center"
              onClick={handleClickSearch}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-7 h-7 text-white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
                />
              </svg>
            </button>
          </div>
          {keyword && show && <Search onClickItem={() => setShow(false)} keyword={search} />}
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center gap-4">
          {!isLoggedIn ? (
            <Link to="/sign-in" className="flex items-center text-black hover:text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-8 h-8"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
              <span className="px-2 font-medium">Đăng nhập</span>
            </Link>
          ) : (
            <Profile data={loggedInUser} onItemClick={handleProfileItemClick} />
          )}
          <div className="relative flex items-center gap-2">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
              />
            </svg>
            <div className="text-black">
              <span className="block text-sm font-medium">Giỏ hàng</span>
              <span className="block text-sm">({cart?.length || 0})</span>
            </div>
            {cart?.length > 0 ? <Cart /> : <CartHollow />}
          </div>
        </div>

        {/* Hamburger Menu for Tablet/Mobile */}
        <button
          className="lg:hidden text-black"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
            />
          </svg>
        </button>
      </div>

      {/* Bottom Navigation - Hidden on Tablet and Below */}
      <div className="bg-gradient-to-r from-blue-500 to-purple-500 text-white hidden lg:flex justify-center">
        <Link to="/" className="py-2 px-4 hover:text-yellow-300">Trang chủ</Link>
        <Link to="/about" className="py-2 px-4 hover:text-yellow-300">Giới thiệu</Link>
        <Link to="/product" className="py-2 px-4 hover:text-yellow-300">Sản phẩm</Link>
        <Link to="/contact" className="py-2 px-4 hover:text-yellow-300">Liên hệ</Link>
        <Link to="/faq" className="py-2 px-4 hover:text-yellow-300">Hỏi đáp</Link>
      </div>

      {/* Mobile/Tablet Menu */}
      {isMenuOpen && (
        <div className="lg:hidden fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
          <div className="absolute right-0 top-0 w-64 bg-white h-full p-4">
            <div className="flex justify-between items-center mb-4">
              {/* Logo trong Sidebar */}
              <Link to="/" onClick={() => setIsMenuOpen(false)}>
                <img
                  src="/images/logo.png"
                  alt="logo"
                  className="h-[40px] object-cover"
                  title="Trang chủ"
                />
              </Link>
              <button
                className="text-black"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col gap-4 text-black">
              <Link to="/" onClick={() => setIsMenuOpen(false)}>Trang chủ</Link>
              <Link to="/about" onClick={() => setIsMenuOpen(false)}>Giới thiệu</Link>
              <Link to="/product" onClick={() => setIsMenuOpen(false)}>Sản phẩm</Link>
              <Link to="/contact" onClick={() => setIsMenuOpen(false)}>Liên hệ</Link>
              <Link to="/faq" onClick={() => setIsMenuOpen(false)}>Hỏi đáp</Link>
              {/* Phần xử lý đăng nhập/đăng xuất */}
              {!isLoggedIn ? (
                <Link
                  to="/sign-in"
                  className="flex items-center gap-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                  <span>Đăng nhập</span>
                </Link>
              ) : (
                <div className="flex items-center gap-4">
                  <Profile data={loggedInUser} noDropdown={true} />
                  <button
                    onClick={() => {
                      handleLogout();
                      setIsMenuOpen(false);
                    }}
                    className="text-red-600 hover:text-red-800"
                  >
                    Đăng xuất
                  </button>
                </div>
              )}
              {/* Giỏ hàng dạng Link */}
              <Link
                to="/cart"
                className="flex items-center gap-2"
                onClick={() => setIsMenuOpen(false)}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                  />
                </svg>
                <span>Giỏ hàng ({cart?.length || 0})</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;