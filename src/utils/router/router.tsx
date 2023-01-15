import { 
    createBrowserRouter,
} from 'react-router-dom'

import {MainLayout} from '../../components/main-layout'
import {GoodList} from '../../components/good-list'
import {Main} from '../../pages/main'

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
                    ]
                }
            ]
        }
    ]
)