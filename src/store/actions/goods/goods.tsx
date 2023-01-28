// Метод createExtraActions отвечает за создание действий, оторые будут происходить с товарами и возвращать их
export function createExtraActions() {

    return {
        'addToBasket': addToBasket,
    };    

    //Метод для добавления товаров в корзину
    function addToBasket(good: any) {
      return {
        type: 'ADD_TO_BASKET',
        payload: { good },
      };
    }

}