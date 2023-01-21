import React from 'react'
import { Link } from 'react-router-dom'
import styled, { css } from 'styled-components'

type buttonsAndLinks = {
    text: string
    link: string
    //Необязательное поле, которое может вообще не прийти
    icon?: string
}

interface iMenu {
    menu: {
        buttons: buttonsAndLinks[]
        links: buttonsAndLinks[]
    }
}

interface iStyledList {
    type?: string
}

const StyledMenu = styled.div`
    font-size: 20px;
    background: #2a284f;
    color: #fff;
    display: flex;
    justify-content: space-between;
`

const StyledList = styled.ul<iStyledList>`
    list-style: none;
    display: flex;
    li{
        margin: 0 3px;
        border-bottom: 1px solid white;
        &:hover {
            border-bottom: 1px solid #fdc931;  
        }

        a {
            text-decoration: none;
            ${props => props.type === 'buttons' ? css`
                    color: #2a284f; 
                    background: white;
                    border: 1px solid white;  
                    border-radius: 5px;  
                    padding: 5px; 
                `: css`
                    color: white
                `
            }
        }
        margin-right: ${prop => prop.type === 'buttons' ? "25px" : "5px"};
    }
`
/**
 *  if(type === 'buttons'){
            margin-right: 25px
    }else{
        margin-right: 5px
    }
 */


export function Menu( { menu: { buttons, links } } : iMenu ){


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
                            </Link>
                        </li>
                    )
                }
            </StyledList>
        </StyledMenu>
    )
    
}