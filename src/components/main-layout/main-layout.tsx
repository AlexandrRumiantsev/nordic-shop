import React, {useState} from 'react'
//Импортируем в основной шабоон приложения меню
import {Menu} from '../menu/'
//Импортируем механизмы роутер дома
//Outlet - 
import {Outlet} from 'react-router-dom'

export function MainLayout(){

    const [menu, setMenu] = useState([
        {
            text: 'Главная',
            link: '/'
          }, 
        {
            text: 'Корзина',
            link: '/basket'
        }
    ])

    return(
        <div>
            <header>
                <Menu />
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}