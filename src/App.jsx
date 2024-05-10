import React, { useState } from 'react';
import "./App.css";
import BudgetForm from './components/BudgetForm';
import ExpenseForm from './components/ExpenseForm';
import ExpenseList from './components/ExpenseList';
import BudgetSummary from './components/BudgetSummary';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  const [budget, setBudget] = useState(0);
  const [expenses, setExpenses] = useState([]);

  const addExpense = (expense) => {
    setExpenses([...expenses, expense]);
  };

  const totalExpenses = expenses.reduce((total, expense) => total + expense.amount, 0);
  
  return (
    <>
    <Navbar/>
    <div className="container display-flex">
      <h1 className="text-center mb-5 mt-5">Gestor de Presupuestos</h1>
      <div className="row">
        <div className="col-md-6">
          <BudgetForm setBudget={setBudget} />
          <ExpenseForm addExpense={addExpense} budget={budget} />
        </div>
        <div className="col-md-6">
          <BudgetSummary budget={budget} totalExpenses={totalExpenses} />
          <ExpenseList expenses={expenses} />
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default App;
