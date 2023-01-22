export type iGood = {
    ID?: string,
    TITLE?: any,
    DISCR?: string,
    PRICE?: string,
    IMG?: string,
    COUNT?: string,
  }

export function createInitialState() {
    return {
        list: [] as iGood[],
        basket: [] as iGood[]
    }
  }
