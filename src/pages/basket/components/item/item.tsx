import { iGood } from '../../../../components/good-list/types';
import { StyledItem, StyledCount, StyledButton } from './style'

export function Item(data: iGood): JSX.Element{

    return <StyledItem>
        <img src={data.IMG} />
        <h2>{data.TITLE}</h2>
        <StyledCount>
        <StyledButton>
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Feather-core-plus-circle.svg/1200px-Feather-core-plus-circle.svg.png" alt="" />
        </StyledButton>  
        <span>0</span>
        <StyledButton>    
            <img src="https://www.svgrepo.com/show/155829/minus.svg" alt="" />
        </StyledButton>
        </StyledCount>
        <StyledButton action='del'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0f/Icons8_flat_delete_generic.svg" alt="удалить" />
        </StyledButton>
        {data.DISCR}
    </StyledItem>
}
