// Метод createExtraActions отвечает за создание действий, оторые будут происходить с товарами и возвращать их
import goodsJSON from '../../../stub/goods.json'

export function createExtraActions() {

    return {
        addToBasket,
        getAllGoods,
    };    

    //Метод для добавления товаров в корзину
    function addToBasket(good: any) {
      return {
        type: 'ADD_TO_BASKET',
        payload: {...good},
      };
    }

    //Метод для ПЕРВОНАЧАЛЬНОЙ загрузки товаров с сервера
    function getAllGoods(){
      //Запрос к серверу
      

      return {
          type: 'GET_ALL_GOOD',
          payload: [...goodsJSON]
      }
    }
}