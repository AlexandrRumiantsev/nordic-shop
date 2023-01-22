import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { StyledMenu, StyledList } from './style'
import { iMenu, buttonsAndLinks } from './types'

export type iGood = {
    ID?: string,
    TITLE?: any,
    DISCR?: string,
    PRICE?: string,
    IMG?: string,
    COUNT?: string,
}

export type iGoods = iGood[]

export interface IRootState {
    //state: {
        goods: {
            basket: iGoods
         };
   // }
    
  }

export function Menu( { menu: { buttons, links } } : iMenu ) : JSX.Element {

    const basket: any = useSelector<IRootState>(state => state.goods.basket) 

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