import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface Rocket {
    id: string;
    name: string;
    description: string;
    flickr_images: string[];
    wikipedia: string;
  }

export interface RocketState {
  rockets: Rocket[]; 
}

const initialState: RocketState = {
  rockets: [], 
}

export const rocketsSlice = createSlice({
  name: 'rocket',
  initialState,
  reducers: {
    addRockets: (state, action: PayloadAction<Rocket[]>) => {
      state.rockets = action.payload
    },
  },
})


export const { addRockets } = rocketsSlice.actions

export default rocketsSlice.reducer
