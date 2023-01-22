import React from 'react'

/**
 * ДЗ Создать интерфейс для GoodItem (убрать any)
 */
export function GoodItem({data}: any){
    return (
        <>
            <img src={data.IMG} />
            {data.TITLE}
            {data.DISCR}
            
        </>
    )
}