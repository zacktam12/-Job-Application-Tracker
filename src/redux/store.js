import { configureStore } from "@reduxjs/toolkit";
import jobReducer from "./jobs/jobSlice";
import authReducer from "./auth/authSlice";

const store = configureStore({
  reducer: {
    jobs: jobReducer,
    auth: authReducer,
  },
});

export default store;
