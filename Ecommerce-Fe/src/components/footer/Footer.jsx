import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-black bg-white mt-5 ">
      <div className="container xl:w-[95%] max-w-[1280px]">
        <div className="flex items-start justify-between pt-8">
          <div className="flex flex-col">
          <span className="text-lg font-semibold">Hỗ trợ</span>
            <div className="mt-5 flex-col flex">
              <Link to={"/"} className="pb-3 text-base hover:text-primary ">
                <span>Trung tâm hỗ trợ </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Theo dõi đơn hàng của bạn </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Tài khoản của bạn </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Liên hệ chúng tôi </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Hỗ trợ</span>
            <div className="mt-5 flex-col flex">
              <Link to={"/"} className="pb-3 text-base hover:text-primary ">
                <span>Trung tâm hỗ trợ </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Theo dõi đơn hàng của bạn </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Tài khoản của bạn </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Liên hệ chúng tôi </span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Thông tin</span>
            <div className="mt-5 flex-col flex">
              <Link to={"/"} className="pb-3 text-base hover:text-primary ">
                <span>Công ty </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Về chúng tôi </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Tin tức & Bài báo</span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Thông báo pháp lý</span>
              </Link>
            </div>
          </div>
          <div className="flex flex-col">
            <span className="text-lg font-semibold">Quan hệ đối tác</span>
            <div className="mt-5 flex-col flex">
              <Link to={"/"} className="pb-3 text-base hover:text-primary ">
                <span>Trung tâm trợ giúp </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Theo dõi đơn hàng của bạn </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Tài khoản của bạn </span>
              </Link>
              <Link to={"/"} className="pb-3 text-base  hover:text-primary">
                <span>Liên hệ chúng tôi </span>
              </Link>
            </div>
          </div>
        </div>

       
      </div>
      <div className="mt-4 flex items-center justify-center py-1 bg-primary text-white">
        <span>&copy; Bản quyền thuộc về PINE perfume</span>
        </div>
    </footer>
  );
};

export default Footer;
