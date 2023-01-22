import {createExtraActions} from '../../actions/goods'

export function createExtraReducers() {

    return {
        ...getAll,
    };

    

    function getAll() {
        const extraActions = createExtraActions()
        const { pending, fulfilled, rejected } : any = extraActions.getAll;
        //Этапы записи в стор
        return {
            [pending]: (state: any) => {
              //загрузка
                state.list = { loading: true };
            },
            [fulfilled]: (state: any, action: any) => {
                //записал
                console.log("REC")
                state.list = action.payload;
            },
            [rejected]: (state: any, action: any) => {
                 //ошибка
                state.list = { error: action.error };
            }
        };
    }
  }
