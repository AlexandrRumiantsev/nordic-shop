import { StyledHelloBlock } from './style'

export function HelloBlock() : JSX.Element {
    return (
        <StyledHelloBlock>
            <h1>
                Добро пожаловать в iNordicShop
            </h1>
            <h2>
                Магазин одежды и суениров из Норвегии, Эстонии и Швеции
            </h2>
        </StyledHelloBlock>
    )
}