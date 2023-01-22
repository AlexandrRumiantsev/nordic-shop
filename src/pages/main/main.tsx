import {Outlet} from 'react-router-dom'
import {HelloBlock, SearchInput} from './components'

export function Main() : JSX.Element {
    return (
        <>
            <HelloBlock />
            <SearchInput />
            <Outlet />
        </>
    )
}