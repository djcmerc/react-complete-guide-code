import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = (props) => {
  const [addExpensePromptOpen, setAddExpensePromptOpen] = React.useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString()
    };
    props.onAddExpense(expenseData);
  };

  const addExpenseWindowHandler = (openState) => {
    setAddExpensePromptOpen(openState);
  }

  return (
    <div className='new-expense'>
      {addExpensePromptOpen && <ExpenseForm expenseAddWindowStateHandler={addExpenseWindowHandler} onSaveExpenseData={saveExpenseDataHandler} />}
      {!addExpensePromptOpen && <div>
        <button onClick={() => addExpenseWindowHandler(true)}>Add Expense</button>
      </div>}
    </div>
  );
};

export default NewExpense;
