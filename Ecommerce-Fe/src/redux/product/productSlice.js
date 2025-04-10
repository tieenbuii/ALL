import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import productApi from "../../api/productApi";
import { action_status } from "../../utils/constants/status";
import queryString from "query-string";

const initialState = {
  status: action_status.IDLE,
  statusId: action_status.IDLE,
  statusFilter: action_status.IDLE,
  statusBrand: action_status.IDLE,
  statusSearch: action_status.IDLE,
  statusProductBrand: action_status.IDLE,
  statusCategory: action_status.IDLE, // Thêm cho category
  statusProductCategory: action_status.IDLE, // Thêm cho products theo category
  totalPage: null,
  totalPageFilter: null,
  product: {},
  productId: {},
  productFilter: {},
  productSearch: {},
  productBrand: {},
  brand: {},
  category: {}, // Thêm cho categories
  productCategory: {}, // Thêm cho products theo category
};

// Các thunk hiện có giữ nguyên
export const getProduct = createAsyncThunk(
  "user/getProduct",
  async (payload) => {
    let query = `page=${payload.page}&limit=${payload.limit}`;
    const response = await productApi.getAllProduct(query);
    return response.data;
  }
);

export const getProductSearch = createAsyncThunk(
  "user/getProduct/Search",
  async (payload) => {
    let query = `limit=5&keyword=${payload}`;
    const response = await productApi.getAllProduct(query);
    return response.data;
  }
);

export const getProductBrand = createAsyncThunk(
  "user/getProductBrand",
  async (payload) => {
    let query = `limit=15&brand=${payload}`;
    const response = await productApi.getAllProduct(query);
    return response.data;
  }
);

export const getBrand = createAsyncThunk("user/getBrand", async (payload) => {
  const response = await productApi.getBrand();
  return response.data;
});

// Thêm thunk cho categories
export const getCategory = createAsyncThunk("user/getCategory", async (payload) => {
  const response = await productApi.getCategory(); // Giả sử bạn sẽ thêm method này trong productApi
  return response.data;
});

export const getProductCategory = createAsyncThunk(
  "user/getProductCategory",
  async (payload) => {
    let query = `limit=15&category=${payload}`;
    const response = await productApi.getAllProduct(query);
    return response.data;
  }
);

export const getProductFilter = createAsyncThunk(
  "user/getProductFilter",
  async (payload) => {
    const query = queryString.stringify(payload);
    const response = await productApi.getAllProduct(query);
    return response.data;
  }
);

export const getProductId = createAsyncThunk(
  "user/getProductId",
  async (payload) => {
    const response = await productApi.getProductId(payload);
    return response.data;
  }
);

const productSlice = createSlice({
  name: "product",
  initialState,
  extraReducers: {
    // Các reducer hiện có
    [getProduct.pending]: (state, action) => {
      state.status = action_status.LOADING;
    },
    [getProduct.fulfilled]: (state, action) => {
      state.status = action_status.SUCCEEDED;
      state.product = action.payload.data;
      state.totalPage = action.payload.totalPage;
    },
    [getProduct.rejected]: (state, action) => {
      state.status = action_status.FAILED;
    },
    [getProductId.pending]: (state, action) => {
      state.statusId = action_status.LOADING;
    },
    [getProductId.fulfilled]: (state, action) => {
      state.statusId = action_status.SUCCEEDED;
      state.productId = action.payload.data;
    },
    [getProductId.rejected]: (state, action) => {
      state.statusId = action_status.FAILED;
    },
    [getProductFilter.pending]: (state, action) => {
      state.statusFilter = action_status.LOADING;
    },
    [getProductFilter.fulfilled]: (state, action) => {
      state.statusFilter = action_status.SUCCEEDED;
      state.productFilter = action.payload.data;
      state.totalPageFilter = action.payload.totalPage;
    },
    [getProductFilter.rejected]: (state, action) => {
      state.statusFilter = action_status.FAILED;
    },
    [getBrand.pending]: (state, action) => {
      state.statusBrand = action_status.LOADING;
    },
    [getBrand.fulfilled]: (state, action) => {
      state.statusBrand = action_status.SUCCEEDED;
      state.brand = action.payload.data;
    },
    [getBrand.rejected]: (state, action) => {
      state.statusBrand = action_status.FAILED;
    },
    [getProductSearch.pending]: (state, action) => {
      state.statusSearch = action_status.LOADING;
    },
    [getProductSearch.fulfilled]: (state, action) => {
      state.statusSearch = action_status.SUCCEEDED;
      state.productSearch = action.payload.data;
    },
    [getProductSearch.rejected]: (state, action) => {
      state.statusSearch = action_status.FAILED;
    },
    [getProductBrand.pending]: (state, action) => {
      state.statusProductBrand = action_status.LOADING;
    },
    [getProductBrand.fulfilled]: (state, action) => {
      state.statusProductBrand = action_status.SUCCEEDED;
      state.productBrand = action.payload.data;
    },
    [getProductBrand.rejected]: (state, action) => {
      state.statusProductBrand = action_status.FAILED;
    },
    
    // Thêm reducers cho categories
    [getCategory.pending]: (state, action) => {
      state.statusCategory = action_status.LOADING;
    },
    [getCategory.fulfilled]: (state, action) => {
      state.statusCategory = action_status.SUCCEEDED;
      state.category = action.payload.data;
    },
    [getCategory.rejected]: (state, action) => {
      state.statusCategory = action_status.FAILED;
    },
    [getProductCategory.pending]: (state, action) => {
      state.statusProductCategory = action_status.LOADING;
    },
    [getProductCategory.fulfilled]: (state, action) => {
      state.statusProductCategory = action_status.SUCCEEDED;
      state.productCategory = action.payload.data;
    },
    [getProductCategory.rejected]: (state, action) => {
      state.statusProductCategory = action_status.FAILED;
    },
  },
});

const { actions, reducer } = productSlice;
export default reducer;