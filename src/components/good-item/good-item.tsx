import { Link } from 'react-router-dom'

import { StyledDiscription } from './style'

/**
 * ДЗ Создать интерфейс для GoodItem (убрать any)
 */
export function GoodItem({data}: any){
    return (
        <>
            <img src={data.IMG} />
            <Link to={`/goods/${data.ID}`}>
                {data.TITLE}
            </Link>
            <StyledDiscription>
                {data.DISCR}
            </StyledDiscription>
            <button>
                Добавить в корзину
            </button>
        </>
    )
}