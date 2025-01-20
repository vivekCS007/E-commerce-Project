import { createSlice } from '@reduxjs/toolkit'
import axios from "axios";
// import { registerUser } from '../store';
import { createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    isAuthenticated: false,
    isLoading: false,
    user: null

}

export const logoutUser = createAsyncThunk("/auth/logout",
    async () => {
        const response = await axios.post(
            "http://localhost:5000/api/auth/logout", {},
            {
                withCredentials: true,
            }
        );
        return response.data;
    }
);
export const checkAuth = createAsyncThunk("/auth/checkauth",
    async () => {
        const response = await axios.get("http://localhost:5000/api/auth/check-auth",
            {
                withCredentials: true,
                headers: {
                    "Cache-Control": "no-store, no-cache, must-revalidate, proxy-revalidate",
                },
            }
        );

        return response.data;
    }
);


export const registerUser = createAsyncThunk(
    'auth/register',
    async (FormData) => {
        const response = await axios.post('http://localhost:5000/api/auth/register', FormData,
            {
                withCredentials: true
            }
        );
        return response.data;
    }
);
export const loginUser = createAsyncThunk("/auth/login",
    async (formData) => {
        const response = await axios.post("http://localhost:5000/api/auth/login", formData,
            {
                withCredentials: true,
            }
        );
        return response.data;
    }
);

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setUser: (state, action) => {

        },
        extrsreducers: (builder) => {
            builder.addCase(registerUser.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticated = false;
                state.user = null;
            });
            builder.addCase(registerUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = action.payload;
            });
            builder.addCase(registerUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            });
            builder.addCase(loginUser.pending, (state) => {
                state.isLoading = true;
                state.isAuthenticated = false;
                state.user = null;
            });
            builder.addCase(loginUser.fulfilled, (state, action) => {
                state.isLoading = false;
                state.isAuthenticated = action.payload.success;
                state.user = action.payload.success ? action.payload.user : null;
            });
            builder.addCase(loginUser.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            });
            builder.addCase(logoutUser.fulfilled, (state) => {
                state.isAuthenticated = false;
                state.isLoading = false;
                state.user = null;
            });
            builder.addCase(checkAuth.pending, (state) => {
                state.isLoading = true;
            });
            builder.addCase(checkAuth.rejected, (state) => {
                state.isLoading = false;
                state.isAuthenticated = false;
                state.user = null;
            });

            builder.addCase(checkAuth.fulfilled, (state, action) => {
                state.isAuthenticated = action.payload.success;
                state.isLoading = false;
                state.user = action.payload.success ? action.payload.user : null;
            });

        }
    }
})


export const { setUser } = authSlice.actions;
export default authSlice.reducer;