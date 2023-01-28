import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'

import { slice } from './state/goods'
//export * from './slices/goods'

import { iGoods } from '../components/good-list/types'
//Объект глобавльного стора, который содержит данные приложения
export const store = configureStore({
    reducer: {
        goods: slice.goods as any 
    }
})

//типизируем метод редакса useDispatch
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch