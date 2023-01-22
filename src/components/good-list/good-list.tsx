import { useSelector } from 'react-redux'
import React, {useEffect, useState, ReactNode} from 'react'

import { StyledListLi, StyledListUl } from './style'
import { iGood, iGoods } from './types'
import { GoodItem } from '../good-item'

import goodJSON from '../../stub/goods.json'
import { goodsActions } from '../../store/slices/good';
import {useAppDispatch } from '../../store'
/**
 * ДЗ
 * Применить тип для as, заменить any
 */

   
  
  export interface IRootState {
    //state: {
        goods: {
            list: iGood
         };
   // }
    
  } 

export function GoodList() : JSX.Element{

    //Запрос к редаксу
    //const goods: iGoods = goodJSON
    const dispatch = useAppDispatch()
    const goods = useSelector<IRootState, iGood>(state => state.goods.list) as iGoods
    
    useEffect( ()  => {
        dispatch(goodsActions.getAll())
    }, [])

    return (
        <StyledListUl>
            {
                goods.map((good: iGood, index: number) => 
                    (
                        <StyledListLi key={good.TITLE + index}>
                            
                                <GoodItem data={good}/>
   
                        </StyledListLi>
                    )
                ) as ReactNode
            }
        </StyledListUl>
    )
}