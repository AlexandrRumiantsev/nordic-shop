import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react'

import { iGood } from '../../components/good-list/types'

 
import goodsJSON from '../../stub/goods.json'


export function Detail(){

    const { id } = useParams()
    const [ good, setGood ] = useState({
        TITLE: '',
        DISCR: '',
        PRICE: '', 
        IMG: '',
        COUNT: '', 
    })

    useEffect(()=>{
        const good = goodsJSON.find((good: iGood) => 
            good.ID === id
        ) as iGood

        setGood(good)
    }, [])

    return <>
        <p>{id}</p>
        <img src={good.IMG}/>
        <p>{good.TITLE}</p>
        <p>{good.DISCR}</p>
        <p>{good.COUNT}</p>
        <p>{good.PRICE}</p>
        <button>Добавить в корзину</button>
    </>
}