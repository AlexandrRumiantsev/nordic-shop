import { Link } from 'react-router-dom'

import { StyledListLi, StyledListUl } from './style'
import { iGood, iGoods } from './types'
import { GoodItem } from '../good-item'

import goodJSON from '../../stub/goods.json'

/**
 * ДЗ
 * Применить тип для as, заменить any
 */

export function GoodList() : JSX.Element{

    //Запрос к редаксу
    
    return (
        <StyledListUl>
            {
                goodJSON.map((good: iGood, index: number) => 
                    (
                        <StyledListLi key={good.TITLE + index}>
                            <Link to={`/goods/${good.ID}`}>
                                <GoodItem data={good}/>
                            </Link>
                        </StyledListLi>
                    )
                ) as any
            }
        </StyledListUl>
    )
}