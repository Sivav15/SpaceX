import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { Rocket } from '../types/interface';



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
