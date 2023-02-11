import { createSlice } from '@reduxjs/toolkit';
import { createExtraReducers } from '../../reducers/goods/goods'
import { createInitialState } from '../../state/goods'
import { createExtraActions } from '../../actions/goods'

const name = 'goods';

const extraActions: {getAllGoods: any, addToBasket: any} = createExtraActions()

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
          .addCase(extraActions.getAllGoods.pending, (state, action) => {
            console.log('getAllGoods pending', action)
            //state.goods.list === requestId
          })
          .addCase(extraActions.getAllGoods.fulfilled, (state, action) => {
            console.log('getAllGoods fulfilled', action)
            state.list = action.payload
          })
          .addCase(extraActions.getAllGoods.rejected, (state, action) => {
            console.log('getAllGoods rejected', action)
          })
      },
});

export const goodsActions = { ...slice.actions, ...extraActions };

export const { addToBasketReducer } = slice.reducer as any;

//редьюсеры по умолчанию
export default slice.reducer;