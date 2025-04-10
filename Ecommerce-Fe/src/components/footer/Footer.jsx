import React from "react";
import { Link, NavLink } from "react-router-dom";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth", // Cuộn mượt mà
    });
  };

  return (
    <footer className="text-black bg-white mt-5">
      <div className="container xl:w-[95%] max-w-[1280px] mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 pt-8">
          {/* Cột 1 */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold">PINE perfume</span>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <Link
                to="/about"
                className="pb-3 text-base hover:text-blue-600"
              >
                <span>Giới thiệu</span>
              </Link>
              <Link
                to="/contact"
                className="pb-3 text-base hover:text-blue-600"
              >
                <span>Liên hệ</span>
              </Link>
              <Link
                to="/product"
                className="pb-3 text-base hover:text-blue-600"
              >
                <span>Sản phẩm</span>
              </Link>
            </div>
          </div>

          {/* Cột 2 */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold">Hỗ trợ</span>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <NavLink
                to="/account/orders"
                end
                onClick={scrollToTop}
                className="pb-3 text-base hover:text-blue-600"
              >
                <span>Theo dõi đơn hàng của bạn</span>
              </NavLink>
              <NavLink
                to="/account"
                end
                onClick={scrollToTop}
                className="pb-3 text-base hover:text-blue-600"
              >
                <span>Tài khoản của bạn</span>
              </NavLink>
              <Link
                to="/"
                className="pb-3 text-base hover:text-blue-600"
              >
                <span>Liên hệ chúng tôi</span>
              </Link>
            </div>
          </div>

          {/* Cột 3 */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold">Thông tin</span>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Công ty</span>
              </Link>
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Về chúng tôi</span>
              </Link>
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Tin tức & Bài báo</span>
              </Link>
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Thông báo pháp lý</span>
              </Link>
            </div>
          </div>

          {/* Cột 4 */}
          <div className="flex flex-col items-center md:items-start">
            <span className="text-lg font-semibold">Quan hệ đối tác</span>
            <div className="mt-5 flex flex-col items-center md:items-start">
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Trung tâm trợ giúp</span>
              </Link>
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Theo dõi đơn hàng của bạn</span>
              </Link>
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Tài khoản của bạn</span>
              </Link>
              <Link to="/" className="pb-3 text-base hover:text-blue-600">
                <span>Liên hệ chúng tôi</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-4 flex items-center justify-center py-1 bg-gradient-to-r from-blue-500 to-purple-500 text-white">
        <span>© Bản quyền thuộc về PINE perfume</span>
      </div>
    </footer>
  );
};

export default Footer;