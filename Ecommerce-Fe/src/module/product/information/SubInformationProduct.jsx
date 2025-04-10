import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../../../redux/cart/cartSlice";
import { formatPrice } from "../../../utils/formatPrice";
const SubInformationProduct = ({ data }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const handleAddCart = () => {
    const action = addToCart({
      id: data._id,
      product: data,
      quantity: 1,
    });
    dispatch(action);
  };
  const handleBuy = () => {
    const action = addToCart({
      id: data._id,
      product: data,
      quantity: 1,
    });
    dispatch(action);
    navigate("/cart");
  };
  return (
    <div className="product-info flex flex-col flex-grow">
      <span
        className="text-xl font-semibold mb-2 line-clamp-2 cursor-pointer"
        title={data?.title}
      >
        {data?.title}
      </span>
      <div className="flex flex-col gap-y-1 mb-4">
        {/* <span className="text-base">
          Mã sản phẩm: <span className="font-semibold">{data?._id}</span>
        </span> */}
        <span className="text-base">
          Thương hiệu:{" "}
          <span className="font-semibold">{data?.brand?.name}</span>
        </span>
        <span className="text-base">
          Xuất xứ: <span className="font-semibold">{data?.origin}</span>
        </span>
        <span className="text-base">
          Năm phát hành:{" "}
          <span className="font-semibold">{data?.yearOfLaunch}</span>
        </span>
        <span className="text-base">
          Nhóm hương:{" "}
          <span className="font-semibold">{data?.perfumeGroup}</span>
        </span>
        <span className="text-base">
          Theo mùa: <span className="font-semibold">Mùa thu</span>
        </span>
      </div>
      <span className="text-2xl font-semibold text-red-600 mb-2">
        {formatPrice(data?.promotion)}
      </span>
      {/* {data?.promotion !== data?.price && (
        <div className="flex items-center mb-2">
          <span className="text-lg line-through text-tertiary mr-2">
            {formatPrice(data?.price)}
          </span>
          <span className="text-white bg-primary px-1 rounded-md text-lg">
            - {data?.percent}%
          </span>
        </div>
      )}
       {data?.inventory > 0 && data?.inventory < 5 && (
        <span className="text-orange-500 font-medium mb-3 text-lg">
          Chỉ còn {data?.inventory} sản phẩm
        </span>
      )}
      {data?.inventory === 0 && (
        <span className="text-orange-500 font-medium mb-4 text-xl">
          Sản phẩm hiện tại hết hàng
        </span>
      )} */}
      {/* Khối 1: Giá khuyến mãi */}
      <div
        className={`flex items-center mb-2 transition-opacity duration-300 ${
          data?.promotion !== data?.price ? "opacity-100" : "opacity-0"
        }`}
        style={{ height: "28px" }} // Tuỳ chỉnh theo chiều cao bạn mong muốn
      >
        <span className="text-lg line-through text-gray-600 mr-2">
          {formatPrice(data?.price)}
        </span>
        <span className="text-white bg-hero-gradient px-1 rounded-md text-lg">
          - {data?.percent}%
        </span>
      </div>

      {/* Khối 2: Tình trạng kho */}
      <div
        className={`mb-3 text-lg font-medium transition-opacity duration-300 h-[28px] ${
          data?.inventory === 0 || (data?.inventory > 0 && data?.inventory < 5)
            ? "opacity-100 text-orange-500"
            : "opacity-0"
        }`}
      >
        {data?.inventory === 0 ? (
          <span className="text-xl">Sản phẩm hiện tại hết hàng</span>
        ) : data?.inventory < 5 ? (
          <>Chỉ còn {data?.inventory} sản phẩm</>
        ) : null}
      </div>

      <span className="w-full border border-1 mb-6"></span>
      {data?.inventory > 0 && (
        <>
          <div className="flex items-center justify-between">
            <button
              className="px-8 py-3 text-lg bg-hero-gradient hover:bg-red-700 text-white font-medium rounded-md  border-2 border-primary flex-grow mr-2 flex-grow-1 transition duration-300"
              type="button"
              onClick={handleBuy}
            >
              MUA NGAY
            </button>
            <button
              className="px-16 py-3 text-lg  text-red-600 font-medium rounded-md border-2 border-red-600 flex-grow-2"
              type="button"
              onClick={handleAddCart}
            >
              THÊM VÀO GIỎ HÀNG
            </button>
          </div>
          {/* <span className="w-full border-dotted border-2 my-6"></span> */}
        </>
      )}
    </div>
  );
};

export default SubInformationProduct;
