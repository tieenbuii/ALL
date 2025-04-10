import React from "react";
import { formatPrice } from "../../utils/formatPrice";
const ProductItem = ({
  product,
  onClickItem,
  className = "",
  addToCompare,
  removeFromCompare,
  selected,
}) => {
  const handleRemove = (e, product) => {
    e.stopPropagation();
    removeFromCompare(product);
  };

  const handleAdd = (e, product) => {
    e.stopPropagation();
    addToCompare(product);
  };

  return (
    <div
      className={`flex flex-col rounded-lg p-3 bg-white h-full mx-2 cursor-pointer  ${className}`}
      onClick={onClickItem}
    >
      <img
        src={
          product?.images[0] ||
          "https://lh3.googleusercontent.com/ZQFbZeosDa1ODQnaaunB72fejXPcl_hg7rfEcgVlZSkgtOTAHQH1M4RxVrH2cLN6gjqJvOAq1b8CeE92gjqDN2W3b2HsMkxb=rw"
        }
        alt=""
        className="w-full h-[180px] object-cover rounded-lg mb-2 transition-transform hover:scale-105"
      />
      {/* <div className="flex flex-col flex-1">
        <h3 className="mb-2 font-medium text-center line-clamp-1">
          {product?.title}
        </h3>
        {product?.inventory < 5 && product?.inventory > 0 && (
          <span className="text-tertiary font-medium mb-2 text-sm text-center">
            Chỉ còn {product?.inventory} sản phẩm
          </span>
        )}
        {product?.inventory === 0 && (
          <span className="text-tertiary font-medium mb-2 text-sm text-center">
            Sản phẩm hiện tại hết hàng
          </span>
        )}
        {product?.inventory > 4 && <span className="mb-2"></span>}
        <div className="flex items-center justify-center text-sm mb-2">
          <span className="text-lg text-primary font-bold">
            {formatPrice(product?.promotion)}
          </span>
        </div>
        <div className="flex items-center justify-center">
          <span
            className={`line-through text-gray-600 mr-4 ${
              product?.promotion === product?.price ? "invisible" : ""
            }`}
          >
            {formatPrice(product?.price)}
          </span>
          <span
            className={`text-blue bg-primary text-white px-1 rounded-lg ${
              product?.promotion === product?.price ? "invisible" : ""
            }`}
          >
            - {product?.percent}%
          </span>
        </div>
      </div> */}
      <div className="flex flex-col flex-1">
  <h3 className="mb-2 font-medium text-center line-clamp-1">
    {product?.title}
  </h3>
  


  <div className="flex items-center justify-center text-sm mb-2">
    <span className="text-lg text-primary font-bold">
      {formatPrice(product?.promotion)}
    </span>
  </div>

  <div className="flex items-center justify-center">
    <span
      className={`line-through text-gray-600 mr-4 ${
        product?.promotion === product?.price ? "invisible" : ""
      }`}
    >
      {formatPrice(product?.price)}
    </span>
    <span
      className={`text-blue bg-hero-gradient text-white px-1 rounded-lg ${
        product?.promotion === product?.price ? "invisible" : ""
      }`}
    >
      - {product?.percent}%
    </span>
  </div>
  <div className="text-sm text-center font-medium text-tertiary min-h-[20px]">
    {product?.inventory < 5 && product?.inventory > 0 && (
      <span>Chỉ còn {product?.inventory} sản phẩm</span>
    )}
    {product?.inventory === 0 && <span>Sản phẩm hiện tại hết hàng</span>}
  </div>
</div>

    </div>
  );
};

export default ProductItem;
