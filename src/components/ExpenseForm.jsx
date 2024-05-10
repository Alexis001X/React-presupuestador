import React, { useState } from 'react';
import { FaShoppingCart } from "react-icons/fa";

const ExpenseForm = ({ addExpense, budget }) => {
  const [expenseName, setExpenseName] = useState('');
  const [expenseAmount, setExpenseAmount] = useState('');

  const handleExpenseSubmit = (e) => {
    e.preventDefault();

    // Convertir el monto de la compra a un número entero
    const amount = parseInt(expenseAmount);

    // Verificar si el monto de la compra es mayor que cero y no excede el presupuesto
    if (expenseName && amount > 0 && amount <= budget) {
      // Agregar la compra solo si el monto es válido
      addExpense({
        name: expenseName,
        amount: amount
      });
      // Limpiar los campos después de agregar la compra
      setExpenseName('');
      setExpenseAmount('');
    } else {
      // Mostrar una alerta si la compra no es válida
      alert('El monto es invalido o excede el presupuesto establecido');
    }
  };

  return (
    <div className="card mb-3">
      <div className="card-body">
        <h5 className="card-title">Agregar compra</h5>
        <form onSubmit={handleExpenseSubmit}>
          <div className="mb-3">
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la compra"
              value={expenseName}
              onChange={(e) => setExpenseName(e.target.value)}
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              className="form-control"
              placeholder="Monto de la compra"
              value={expenseAmount}
              onChange={(e) => setExpenseAmount(e.target.value)}
            />
          </div>
          <button type="submit" className="btn btn-primary"><FaShoppingCart /> Agregar compra</button>
        </form>
      </div>
    </div>
  );
};

export default ExpenseForm;
