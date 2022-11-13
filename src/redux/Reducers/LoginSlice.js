import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    userObj: {}
};


export const LoginSlice = createSlice({
    name: 'loginUser',
    initialState,
    reducers: {
        loginData: (state, action) => {
            console.log('action.payload ',action.payload )
            return {
                ...state,
                userObj: { ...action.payload },
            };
        },

    },

});

export const { loginData } = LoginSlice.actions
export default LoginSlice.reducer;
