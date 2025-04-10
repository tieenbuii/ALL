import axiosClient from "./axiosClient";

const orderApi = {
  createOrder(data) {
    const url = "/api/v1/orders";
    return axiosClient.post(url, data);
  },
  cancelOrder(id, data) {
    const url = `/api/v1/orders/${id}`;
    return axiosClient.patch(url, data);
  },
  getOrder(id, query) {
    const url = `/api/v1/orders?user=${id}&${query}`;
    return axiosClient.get(url);
  },
  getOrderId(id) {
    const url = `/api/v1/orders/${id}`;
    return axiosClient.get(url);
  },
  createVNPayPayment: async (paymentData) => {
    return await axios.post("/api/payment/vnpay/create", paymentData);
  },
  returnPaymentStatus: async (data) => {
    return await axios.post("/api/payment/vnpay/return", data);
  }};

export default orderApi;
