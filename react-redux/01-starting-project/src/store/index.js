import { createStore } from "redux";

const reducer = (state = { counter: 0, counterShow: true }, action) => {
  if (action.type === "increament") {
    return { counter: state.counter + 1, counterShow: state.counterShow };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      counterShow: state.counterShow,
    };
  }
  if (action.type === "decreament") {
    return { counter: state.counter - 1, counterShow: state.counterShow };
  }
  if (action.type === "toggle") {
    return { counter: state.counter, counterShow: !state.counterShow };
  } else return state;
};
const store = createStore(reducer);

export default store;
// const subscribeFun = () => {
//   const latestStore = store.getState();
// };
// store.subScribe(subscribeFun);

// store.dispatch({ type: "increament" });
