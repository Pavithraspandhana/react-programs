const redux = require('redux');
const createStore = redux.createStore;


 
// 1. Defining the String constraint
const BUY_CAKE = 'BUY_CAKE';


 
// 1. Action creator is a function
function buyCake() {
    return {
        type: BUY_CAKE,
        info: 'First redux action'
    }
}

 
// 2.reducers (prevState,action) => newState =
const initialState = {
    numOfCakes: 10
}

 
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_CAKE: return {

 
            //copy of state objects
            ...state,
            numOfCakes: state.numOfCakes - 1
        }

 
        // not mutating the state object we are creating new
        default: return state
    }
}

 
// 3.creating the store & holds the application state
const store = createStore(reducer);

 
// 4.getState() gives the initial value of the application
console.log('initial state', store.getState())

 
// 5
const unsubscribe = store.subscribe(() => {
    console.log("updated state", store.getState())
})

 
// 6 accepts action as parameter
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())

 
unsubscribe()