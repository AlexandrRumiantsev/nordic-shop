import { 
    createBrowserRouter,
} from 'react-router-dom'

import {MainLayout} from '../../components/main-layout'
import {GoodList} from '../../components/good-list'
import {GoodItem} from '../../components/good-item'

import {Main} from '../../pages/main'
import {Basket} from '../../pages/basket'

/**
 * Router - утилс который опредяет маршруты приложения
 * Маршруты:
 */
 export const Router = createBrowserRouter(
    [
        {
            element: <MainLayout />,
            children: [
                {
                    path: '/',
                    element: <Main />,
                    children: [
                        {
                            index: true,
                            element: <GoodList />
                        },
                        {
                            path: '/goods/:id',
                            //Почему этот компонент не подходит?
                            element: <GoodItem />
                        },
                    ]
                },
                {
                    path: '/basket',
                    element: <Basket />
                }
            ]
        }
    ]
)