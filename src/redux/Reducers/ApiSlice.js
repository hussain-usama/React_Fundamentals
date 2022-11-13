import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  postsArray: [],
  status: 'loading',
  error: null,
};

const BASE_URL = 'https://reqres.in/api/users';

export const fetchUsers = createAsyncThunk('renderdata/fetchUsers', async () => {
  try {
    const response = await axios.get(BASE_URL);
    console.log(response);
    return response.data;
  } catch (error) {
    console.log(error);
  }
});

export const ApiSlice = createSlice({
  name: 'renderdata',
  initialState,
//   reducers: {
//     postsData: (state, action) => {
//       return {
//         ...state,
//         allPosts: action.payload,
//       };
//     },

//   },
  extraReducers : {
      
    [fetchUsers.pending] :(state, action) => {
      state.status = 'loading';
    } ,
    [fetchUsers.fulfilled]: (state, action) => {
      state.status = 'succeeded';
      state.postsArray = action.payload
    },
    [fetchUsers.rejected]: (state, action) => {
      state.status = 'failed';
      state.error = action.error.message;
    }
},
});


export default ApiSlice.reducer;
