import { StyledDiscription, StyledImg, StyledTitle } from './style'

/**
 * ДЗ Создать интерфейс для GoodItem (убрать any)
 */
export function GoodItem({data}: any){
    return (
        <> 
            <StyledImg src={data.IMG} />
            <StyledTitle>
                {data.TITLE}
            </StyledTitle>
            <StyledDiscription>
                {data.DISCR}
            </StyledDiscription>
        </>
    )
}