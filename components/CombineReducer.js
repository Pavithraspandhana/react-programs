// Combine Reducers: split state & reducers

const redux = require("redux");
const createStore = redux.createStore;
const combineReducer = redux.combineReducers;

// 1. Defining the String constraint
const BUY_SWEETS = "BUY_SWEETS";
const BUY_ICECREAM = "BUY_ICECREAM";

//1. Action creator is a function for buySweets
function buySweets() {
  return {
    type: BUY_SWEETS,
  };
}

// Action creator is a function for buyicecream
function buyIceCream() {
  return {
    type: BUY_ICECREAM,
  };
}

// initialize the state
const initialSweetState = {
  numOfSweets: 200,
};

const initialIcecreamState = {
  numOfIceCreams: 50,
};

// 2.reducers (prevState,action) => returns newState
const sweetReducer = (state = initialSweetState, action) => {
  switch (action.type) {
    case BUY_SWEETS:
      return {
        ...state,
        numOfSweets: state.numOfSweets - 1,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = initialIcecreamState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numOfIceCreams: state.numOfIceCreams - 1,
      };

    default:
      return state;
  }
};

// combine reducers
const rootReducer = combineReducer({
  mySweet: sweetReducer,
  myIcecream: iceCreamReducer,
});

//creating stores
const store = createStore(rootReducer);

//initial the state
console.log("Initial State", store.getState());

//make a subcribe connection
const unsubscribe = store.subscribe(() => {
  console.log("Updated State Value", store.getState());
});

//accepts actions as a parameter
store.dispatch(buySweets());
store.dispatch(buySweets());
store.dispatch(buySweets());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());
store.dispatch(buyIceCream());

unsubscribe();
