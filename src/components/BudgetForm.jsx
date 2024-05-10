import { useState } from "react";
const BudgetForm = ({ setBudget }) => {
    const [budgetAmount, setBudgetAmount] = useState('');

    const handleBudgetSubmit = (e) => {
        e.preventDefault();
        if (budgetAmount > 0) {
            setBudget(parseInt(budgetAmount));
        }
    };
    return (
        <div className="card mb-3">
          <div className="card-body">
            <h5 className="card-title">Ingrese su presupuesto inicial</h5>
            <form onSubmit={handleBudgetSubmit}>
              <div className="mb-3">
                <input
                  type="number"
                  className="form-control"
                  placeholder="Monto del presupuesto"
                  value={budgetAmount}
                  onChange={(e) => setBudgetAmount(e.target.value)}
                />
              </div>
              <button type="submit" className="btn btn-primary">Establecer presupuesto</button>
            </form>
          </div>
        </div>
      );
    };
    
    export default BudgetForm;