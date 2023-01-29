import { createSlice } from '@reduxjs/toolkit'

import { iPayload } from '../types' 
import { createInitialState } from '../../state/goods'
import { createExtraReducers } from '../../reducers/goods/goods'

const name = 'goods';

export const slice = createSlice({ 
    name, 
    initialState: createInitialState(),
    reducers: createExtraReducers(),
    extraReducers: (builder) => {
        builder
        .addCase('ADD_TO_BASKET', (state, action: iPayload) => {
           console.log('Сработал addCase ADD_TO_BASKET extraReducers')
           state.basket.push(action.payload) 
        })
        .addCase('GET_ALL_GOOD', (state, action: iPayload) => {
          console.log('Сработал addCase GET_ALL_GOOD extraReducers')
          state.list = action.payload
        })
      },
});