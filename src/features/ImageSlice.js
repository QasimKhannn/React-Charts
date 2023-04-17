import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const addImage = createAsyncThunk(
  "images/addImage",
  async (formData) => {
    const response = await axios.post("/api/images", formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    return response.data;
  }
);

export const updateImage = createAsyncThunk(
  "images/updateImage",
  async (data) => {
    const { id, title, description } = data;
    const response = await axios.put(`/api/images/${id}`, {
      title,
      description,
    });
    return response.data;
  }
);

export const deleteImage = createAsyncThunk(
  "images/deleteImage",
  async (id) => {
    const response = await axios.delete(`/api/images/${id}`);
    return response.data;
  }
);

const imagesSlice = createSlice({
  name: "images",
  initialState: { images: [], status: "idle", error: null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(addImage.pending, (state) => {
        state.status = "loading";
      })
      .addCase(addImage.fulfilled, (state, action) => {
        state.images.push(action.payload);
        state.status = "succeeded";
      })
      .addCase(add);
  },
});
