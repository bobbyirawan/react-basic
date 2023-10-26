import toolkit from "@reduxjs/toolkit";

const { configureStore, createAction, createReducer } = toolkit;

const addToCart = createAction("ADD_TO_CART");

const cartReducer = createReducer([], (builder) => {
  builder.addCase(addToCart, (state, action) => {
    state.push(action.payload);
  });
});

const loginAct = createAction("CREATE_SESSION");

const loginReducer = createReducer({status: false}, (builder) => {
  builder.addCase(loginAct, (state, action) => {
    state.status = true;
  });
});

const store = configureStore({
  reducer: {
    login: loginReducer,
    cart: cartReducer,
  },
});

store.subscribe(() => {
  console.log("STORE CHANGE: ", store.getState());
});

store.dispatch(addToCart({ id: 10,qty: 10}));
store.dispatch(loginAct());
