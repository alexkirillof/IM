import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { BASE_URL } from '../../utils/constants.js'
import axios from 'axios'

export const getCategories = createAsyncThunk(
  'categories/getCategories',
  async (_, thunkAPI) => {
    try {
      const res = await axios(`${BASE_URL}/categories`)
      return res.data
    } catch (err) {
      console.log(err)
      return thunkAPI.rejectWithValue(err)
    }
  }
)

const initialState = {
  list: [],
  loading: true
}

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getCategories.pending, (state) => {
      state.loading = true
    })
    builder.addCase(getCategories.fulfilled, (state, action) => {
      state.list = action.payload
      state.loading = false
    })
    builder.addCase(getCategories.rejected, (state) => {
      state.loading = false
    })
  }
})

export default categoriesSlice.reducer
