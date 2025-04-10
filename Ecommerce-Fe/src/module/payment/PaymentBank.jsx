// import React, { useEffect } from "react";
// import { formatPrice } from "../../utils/formatPrice";
// import { PayPalButtons } from "@paypal/react-paypal-js";
// import Swal from "sweetalert2";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import { useDispatch } from "react-redux";
// import { resetCart } from "../../redux/cart/cartSlice";
// import orderApi from "../../api/orderApi";

// const PaymentBank = () => {
//   const dataOrder = JSON.parse(localStorage.getItem("order"));
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   useEffect(() => {
//     window.scrollTo({
//       top: 0,
//       behavior: "smooth",
//     });
//     if (
//       localStorage.getItem("jwt") &&
//       JSON.parse(localStorage.getItem("user")).active === "verify"
//     ) {
//       return navigate("/verify");
//     }
//     if (
//       localStorage.getItem("jwt") === null &&
//       JSON.parse(localStorage.getItem("user")) === null
//     ) {
//       return navigate("/sign-in");
//     }
//   }, []);
//   return (
//     <div className="mt-10">
//       <div className="container mx-auto  bg-white rounded-lg flex flex-col p-12 justify-between">
//         <span className="text-2xl font-semibold mx-auto">
//           Thông tin đơn hàng
//         </span>
//         <div className="flex flex-col w-[1000px] mx-auto mt-16 gap-y-3">
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-medium">Nguời nhận:</span>
//             <span className="text-xl font-medium">{dataOrder?.receiver}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-medium">Số điện thoại:</span>
//             <span className="text-xl font-medium">{dataOrder?.phone}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-medium">Địa chỉ nhận hàng:</span>
//             <span className="text-xl font-medium">{dataOrder?.address}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-medium">Phương thức thanh toán:</span>
//             <span className="text-xl font-medium">{dataOrder?.payments}</span>
//           </div>
//           <div className="flex items-center justify-between">
//             <span className="text-xl font-medium">
//               Tổng số tiền cần thanh toán
//             </span>
//             <span className="text-2xl font-medium text-[#009245]">
//               {formatPrice(dataOrder?.totalPrice)}
//             </span>
//           </div>
//         </div>
//       </div>
//       <div className="mx-auto w-[800px] mt-10">
//         <PayPalButtons
//           style={{ shape: "pill" }}
//           createOrder={(data, actions) => {
//             return actions.order.create({
//               purchase_units: [
//                 {
//                   amount: {
//                     value: Number((dataOrder?.totalPrice / 24000).toFixed(2)),
//                   },
//                 },
//               ],
//             });
//           }}
//           onApprove={async (data, actions) => {
//             const order = await actions.order.capture();
//             console.log("order:", order);
//             Swal.fire(
//               "Thanh toán thành công!",
//               "Cảm ơn bạn đã ủng hộ cửa hàng !!!",
//               "success"
//             );
//             console.log(dataOrder);
//             const data1 = {
//               address: dataOrder?.address,
//               phone: dataOrder?.phone,
//               receiver: dataOrder?.receiver,
//               cart: dataOrder?.cart,
//               totalPrice: dataOrder?.totalPrice,
//               payments: dataOrder?.payments,
//               invoicePayment: order,
//             };
//             console.log(data1);

//             try {
//               const response = await orderApi.createOrder(data1);
//             } catch (error) {
//               console.log(error.message);
//             }
//             dispatch(resetCart());
//             localStorage.removeItem("order");
//             navigate("/");
//           }}
//           onError={(err) => {
//             toast.dismiss();
//             toast.error("Lỗi hệ thống thanh toán Paypal", {
//               pauseOnHover: false,
//             });
//             console.log("Paypal checkout onError", err);
//           }}
//           onCancel={() => {
//             navigate(-1);
//           }}
//         />
//       </div>
//     </div>
//   );
// };

// export default PaymentBank;
import React, { useEffect } from "react";
import { formatPrice } from "../../utils/formatPrice";
import Swal from "sweetalert2";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { resetCart } from "../../redux/cart/cartSlice";
import orderApi from "../../api/orderApi";

const PaymentBank = () => {
  const dataOrder = JSON.parse(localStorage.getItem("order"));
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    if (
      localStorage.getItem("jwt") &&
      JSON.parse(localStorage.getItem("user")).active === "verify"
    ) {
      return navigate("/verify");
    }
    if (
      localStorage.getItem("jwt") === null &&
      JSON.parse(localStorage.getItem("user")) === null
    ) {
      return navigate("/sign-in");
    }
  }, []);

  const handleVNPayPayment = async () => {
    try {
      // Prepare data for VNPay
      const paymentData = {
        amount: dataOrder?.totalPrice,
        orderInfo: `Thanh toán đơn hàng cho ${dataOrder?.receiver}`,
        returnUrl: "http://localhost:3000/payment-return", // Adjust this URL
        orderId: Date.now().toString(), // Generate unique order ID
      };

      // Call API to get VNPay payment URL
      const response = await orderApi.createVNPayPayment(paymentData);
      if (response.data && response.data.paymentUrl) {
        // Redirect to VNPay payment page
        window.location.href = response.data.paymentUrl;
      }
    } catch (error) {
      toast.error("Lỗi khi tạo thanh toán VNPay", {
        pauseOnHover: false,
      });
      console.log("VNPay payment error:", error);
    }
  };

  // You'll need a separate function/route to handle VNPay return
  const handleVNPayReturn = async (paymentResult) => {
    try {
      if (paymentResult.vnp_TransactionStatus === "00") { // Success status
        const data1 = {
          address: dataOrder?.address,
          phone: dataOrder?.phone,
          receiver: dataOrder?.receiver,
          cart: dataOrder?.cart,
          totalPrice: dataOrder?.totalPrice,
          payments: "VNPay",
          invoicePayment: paymentResult,
        };

        await orderApi.createOrder(data1);
        
        Swal.fire(
          "Thanh toán thành công!",
          "Cảm ơn bạn đã ủng hộ cửa hàng !!!",
          "success"
        );
        
        dispatch(resetCart());
        localStorage.removeItem("order");
        navigate("/");
      } else {
        toast.error("Thanh toán không thành công");
        navigate(-1);
      }
    } catch (error) {
      console.log("VNPay return error:", error);
      toast.error("Lỗi xử lý kết quả thanh toán");
    }
  };

  return (
    <div className="mt-10">
      <div className="container mx-auto bg-white rounded-lg flex flex-col p-12 justify-between">
        <span className="text-2xl font-semibold mx-auto">
          Thông tin đơn hàng
        </span>
        <div className="flex flex-col w-[1000px] mx-auto mt-16 gap-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">Nguời nhận:</span>
            <span className="text-xl font-medium">{dataOrder?.receiver}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">Số điện thoại:</span>
            <span className="text-xl font-medium">{dataOrder?.phone}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">Địa chỉ nhận hàng:</span>
            <span className="text-xl font-medium">{dataOrder?.address}</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">Phương thức thanh toán:</span>
            <span className="text-xl font-medium">VNPay</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-xl font-medium">
              Tổng số tiền cần thanh toán
            </span>
            <span className="text-2xl font-medium text-[#009245]">
              {formatPrice(dataOrder?.totalPrice)}
            </span>
          </div>
        </div>
      </div>
      <div className="mx-auto w-[800px] mt-10">
        <button
          onClick={handleVNPayPayment}
          className="w-full bg-[#009245] text-white py-3 rounded-full hover:bg-[#007a3d] transition duration-300"
        >
          Thanh toán qua VNPay
        </button>
      </div>
    </div>
  );
};

export default PaymentBank;