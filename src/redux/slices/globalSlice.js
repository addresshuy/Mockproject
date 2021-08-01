import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  isLoading: false,
  totalData: {},
  countries: [],
  detailCountry: {},
  historyData: {},
  
  
};

const globalSlice = createSlice({
  name: "globalSlice",
  initialState: initialState,
  reducers: {
    toggleLoading(state, action) {
      state.isLoading = !state.isLoading;
    },
    setTotalData(state, action) {
      state.totalData = action.payload;
    },
    setCountries(state, action) {
      state.countries = action.payload;
    },
    setDetailCountry(state, action) {
      state.detailCountry = action.payload;
    },
    setHistoryData(state, action) {
      state.historyData = action.payload;
    },
   
    
  },
});

const { actions, reducer } = globalSlice;
export { actions as GlobalActions, reducer as GlobalReducer };
