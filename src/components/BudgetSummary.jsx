import React from 'react';

const BudgetSummary = ({ budget, totalExpenses }) => {
  // Calcula el sobrante
  const remainingBudget = budget - totalExpenses;
  const displayRemainingBudget = Math.max(0, remainingBudget); // Mostrar como mínimo 0 si es negativo

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">Resumen del Presupuesto</h5>
        <p>Presupuesto Total: ${budget}</p>
        <p>Gastos Totales: ${totalExpenses}</p>
        <p>Sobrante: ${displayRemainingBudget}</p>
        {remainingBudget < 0 && (
          <div className="alert alert-danger" role="alert">
            ¡Sin saldo suficiente!
          </div>
        )}
      </div>
    </div>
  );
};

export default BudgetSummary;
