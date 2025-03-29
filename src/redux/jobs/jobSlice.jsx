import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  jobs: [],
  loading: false,
  error: null,
};

const jobSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    fetchJobsStart: (state) => {
      state.loading = true;
    },
    fetchJobsSuccess: (state, action) => {
      state.loading = false;
      state.jobs = action.payload;
    },
    fetchJobsFailure: (state, action) => {
      state.loading = false;
      state.error = action.payload;
    },
    addJob: (state, action) => {
      state.jobs.push(action.payload);
    },
    deleteJob: (state, action) => {
      state.jobs = state.jobs.filter((job) => job.id !== action.payload);
    },
    updateJob: (state, action) => {
      const index = state.jobs.findIndex((job) => job.id === action.payload.id);
      if (index !== -1) {
        state.jobs[index] = { ...state.jobs[index], ...action.payload.data };
      }
    },
    clearError: (state) => {
      state.error = null;
    },
  },
});

export const {
  fetchJobsStart,
  fetchJobsSuccess,
  fetchJobsFailure,
  addJob,
  deleteJob,
  updateJob,
  clearError,
} = jobSlice.actions;
export default jobSlice.reducer;
