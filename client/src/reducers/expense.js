import {
  GET_TRANSACTION,
  ADD_TRANSACTION,
  DELETE_TRANSACTION,
} from "../actions/types";

const initial_state = {
  transactions: null,
  loading: true,
};

const expense = (state = initial_state, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_TRANSACTION:
      return {
        ...state,
        transactions: payload,
        loading: false,
      };
    case DELETE_TRANSACTION:
      return {
        ...state,
        transactions: state.transactions.filter(
          (transaction) => transaction._id !== payload
        ),
        loading: false,
      };

    case ADD_TRANSACTION:
      return {
        ...state,
        transactions: [...state.transactions, payload],
        loading: false,
      };

    default:
      return state;
  }
};

export default expense;
