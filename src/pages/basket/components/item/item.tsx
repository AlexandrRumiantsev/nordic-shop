import { iGood } from '../../../../components/good-list/types';

export function Item({data}: any): JSX.Element{
    //ДЗ Удалить товар из корзины, через редакс
    return <>
        <img src={data.IMG} />
        {data.TITLE}
        <button>Удалить</button>
    </>
}
