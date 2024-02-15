import { createContext, useReducer } from "react";
// import { DUMMY_EXPENSES } from "../constants/dummyExpenses";
import { ExpenseActionType } from "../constants/expenseActionsType";

export const ExpensesContext = createContext({
  expenses: [],
  setExpenses: (expenses) => {},
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case ExpenseActionType.ADD:
      return [action.payload, ...state];
    case ExpenseActionType.UPDATE:
      const updatedExpenseIndex = state.findIndex(
        (expense) => expense.id === action.payload.id
      );
      const updatedExpense = state[updatedExpenseIndex];
      const updatedItem = { ...updatedExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updatedExpenseIndex] = updatedItem;
      return updatedExpenses;
    case ExpenseActionType.DELETE:
      return state.filter((expense) => expense.id !== action.payload);
    case ExpenseActionType.SET:
      const expenses = action.payload.reverse();
      return expenses;
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, []);

  function addExpense(expenseData) {
    dispatch({ type: ExpenseActionType.ADD, payload: expenseData });
  }
  function deleteExpense(id) {
    dispatch({ type: ExpenseActionType.DELETE, payload: id });
  }
  function updateExpense(id, expenseData) {
    dispatch({
      type: ExpenseActionType.UPDATE,
      payload: { id, data: expenseData },
    });
  }
  function setExpenses(expenses) {
    dispatch({
      type: ExpenseActionType.SET,
      payload: expenses,
    });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
    setExpenses: setExpenses,
  };

  return (
    <ExpensesContext.Provider value={value}>
      {children}
    </ExpensesContext.Provider>
  );
}

export default ExpensesContextProvider;
