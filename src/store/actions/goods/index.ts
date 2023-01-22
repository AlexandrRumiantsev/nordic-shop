import { createAsyncThunk } from '@reduxjs/toolkit';
import goodsJson from '../../../stub/goods.json'
export function createExtraActions() {
    const baseUrl = `http://jsonplaceholder.typicode.com`;
  
    return {
        getAll: getAll(),
        addToBasket: addToBasket,
    };    

    function addToBasket(good: any) {
      return {
        type: 'ADD_TO_BASKET',
        payload: { good },
      };
    }
  
    function getAll() {
        return createAsyncThunk<any>(
          baseUrl,
            async (data) => {
            console.log('createAsyncThunk')
              const response = await fetch(`${baseUrl}/posts`)
              const movies = await response.json();
              console.log('movies', movies)
              return goodsJson
            }
        );
    }
  }