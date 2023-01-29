import { useSelector } from 'react-redux'

import { Item } from './components/item'
import { iGoods, iGood } from '../../components/good-list/types';

export interface IReduxGoodsState {
    goods: {
        basket: iGoods
    };
 }
 

export function Basket(){

    //ДЗ Типизировать basket
    const basket: any = useSelector<IReduxGoodsState>(state => state.goods.basket) 

    return (
        <>
            <h1>Корзина</h1>
            {
                basket.map((item: iGood) => 
                    <Item key={`id_${item.ID}`} data={item}/>
                )
            }
        </>
    )
}