import { useAppDispatch } from '../../store'
import React, {useEffect, useState, ReactNode} from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from '../menu/menu'
import { iGood } from '../good-list/types/i-good'
import { goodsActions } from '../../store/slices/good';
import { Link } from 'react-router-dom'



/**
 * ДЗ Создать интерфейс для GoodItem (убрать any)
 */
export function GoodItem({data}: any){

    const {addToBasket} = goodsActions
    const dispatch = useAppDispatch()
    console.log('addToBasketReducer', addToBasket)
    //const basket = useSelector<IRootState, iGood>(state => state.goods.basket) as iGoods
    


    return (
        <>
            <img src={data.IMG} />
            {data.TITLE}
            {data.DISCR}
            <button onClick={()=> {dispatch(addToBasket(data))} } >
                Добавить в корзину
            </button>
            <Link to={`/goods/${data.ID}`}>Перейти к товару</Link>
        </>
    )
}