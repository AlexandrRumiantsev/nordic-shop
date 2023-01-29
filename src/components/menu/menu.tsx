import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { StyledMenu, StyledList } from './style'
import { iMenu, buttonsAndLinks } from './types'
import { iGoods } from '../good-list/types';

export interface IReduxGoodsState {
    goods: {
        basket: iGoods
    };
 }
 
export function Menu( { menu: { buttons, links } } : iMenu ) : JSX.Element {

    //ДЗ Типизировать basket
    const basket: any = useSelector<IReduxGoodsState>(state => state.goods.basket) 

    return (
        <StyledMenu>
            <StyledList type='links'>
                {
                    links.map((link: buttonsAndLinks, index: number) => 
                        <li key={link.text+index}>
                            <Link to={link.link}>
                                {link.text}
                            </Link>
                        </li>
                    )
                }
            </StyledList>
            <StyledList type='buttons'>
                {
                    buttons.map((button: buttonsAndLinks, index: number) => 
                        <li key={button.text+index}>
                            <Link to={button.link}>
                                {button.text}
                                {button.text === 'Корзина' && ` (${basket.length})`}
                            </Link>
                        </li>
                    )
                }
            </StyledList>
        </StyledMenu>
    )
}