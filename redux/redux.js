const redux = require("redux");

//reducer Function
const counterReducer = (state = { counter: 0 }, action) => {
  return {
    //newState
    counter: state.counter + 1,
  };
};

// create store
const store = redux.createStore(counterReducer);

// subscribe
const counterSubscriber = () => {
  const latestState = store.getState(); // get latest state after change
  console.log(latestState);
};

store.subscribe(counterSubscriber);

// dispatch action

store.dispatch({ type: "increment" });
