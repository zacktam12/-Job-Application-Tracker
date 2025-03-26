import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import authReducer from "./auth/authSlice";

// this is store for redux
const store = configureStore({
  reducer: {
    jobs: jobReducer,
    auth: authReducer,
  },
});

export default store;
