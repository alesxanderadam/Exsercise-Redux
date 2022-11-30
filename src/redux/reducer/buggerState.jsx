const burgerState = {
    burger: {
        salad: 1,
        cheese: 1,
        beef: 1
    },
    menu: {
        salad: 10,
        cheese: 20,
        beef: 55
    }
}

export const arrBurger = (state = burgerState, action) => {
    switch (action.type) {
        default: return state;
    }
}