import React from "react";
const ExpenseList = ({ expenses }) => {
    return (
      <div className="card mb-3">
        <div className="card-body">
          <h5 className="card-title">Lista de Compras</h5>
          <ul className="list-group">
            {expenses.map((expense, index) => (
              <li key={index} className="list-group-item">
                <span>{expense.name}</span>
                <span className="badge bg-secondary ms-2">${expense.amount}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    );
  };
  
  export default ExpenseList;