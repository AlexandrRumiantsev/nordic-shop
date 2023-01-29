
import { useEffect } from 'react'
import { StyledListLi, StyledListUl } from './style'

import { useSelector } from 'react-redux'

import { iGood, iGoods } from './types'
import { GoodItem } from '../good-item'
import { createExtraActions } from '../../store/actions/goods'
import { useAppDispatch } from '../../store'


export interface IReduxGoodsState {
    goods: {
        basket: iGoods,
        list: iGoods
    };
 }
 
/**
 * ДЗ
 * Применить тип для as, заменить any
 */

export function GoodList() : JSX.Element{

    const dispatch = useAppDispatch()
    // Декомпозировать из функции экшн для получения товаров
    const { getAllGoods } = createExtraActions()

    // Вызвать getAllGoods один раз при загрузке компонента
    useEffect(()=> {
        dispatch(
            getAllGoods()
        )
    }, [])

    // Заставить редакс получить данные
    //`Запрос к данным из редакса
    const goods: any = useSelector<IReduxGoodsState>(state => state.goods.list) 
    return (
        <StyledListUl>
            {
                goods.map((good: iGood, index: number) => 
                    (
                        <StyledListLi key={good.TITLE + index}>
                            <GoodItem {...good}/>
                        </StyledListLi>
                    )
                ) as any
            }
        </StyledListUl>
    )
}