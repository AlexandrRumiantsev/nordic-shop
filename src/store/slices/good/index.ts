import { createSlice } from '@reduxjs/toolkit';
import {createExtraReducers} from '../../reducers/goods'
import {createInitialState} from '../../state/goods'
import {createExtraActions} from '../../actions/goods'

const name = 'goods';

const extraActions: {getAll: any, addToBasket: any} = createExtraActions()

export type iPayload = {
  payload?: any,
  type: string
}

export const slice = createSlice({ 
    name, 
    initialState: createInitialState(),
    reducers: createExtraReducers(),
    extraReducers: (builder) => {
        builder
        .addCase('ADD_TO_BASKET', (state, action: iPayload) => {
          state.basket.push(action.payload) 
        })
          .addCase(extraActions.getAll.pending, (state, action) => {
            console.log('fulfilled',action)
            //state.goods.list === requestId
          })
          .addCase(extraActions.getAll.fulfilled, (state, action) => {
            console.log('fulfilled',action.payload)
            state.list = action.payload
          })
          .addCase(extraActions.getAll.rejected, (state, action) => {
            console.log('rejected', action)
          })
      },
});

export const goodsActions = { ...slice.actions, ...extraActions };

console.log('slice.actions', slice.actions)
export const { addToBasketReducer } = slice.reducer as any;

//редьюсеры по умолчанию
export default slice.reducer;

