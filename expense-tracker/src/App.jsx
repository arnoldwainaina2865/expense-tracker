// src/App.jsx
import { useState } from 'react';
import ExpenseForm from './components/ExpenseForm';
import ExpenseTable from './components/ExpenseTable';

function App() {
  const [expenses, setExpenses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  function handleAddExpense(newExpense) {
    setExpenses([...expenses, newExpense]);
  }

  function handleDeleteExpense(id) {
    setExpenses(expenses.filter((e) => e.id !== id));
  }

  const filteredExpenses = expenses.filter((expense) =>
    expense.expense.toLowerCase().includes(searchTerm.toLowerCase()) ||
    expense.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="app" style={{ display: 'flex', gap: '2rem', padding: '2rem' }}>
      {/* Left: Expense Form */}
      <div className="expense-form-section" style={{ flex: 1 }}>
        <h2 style={{ marginBottom: "0.3rem" }}>Add Expense</h2>
        <p style={{ color: "#555", marginBottom: "1rem" }}>
          Enter your expense details below
        </p>
        <ExpenseForm onAddExpense={handleAddExpense} />
      </div>

      {/* Right: Tracker Header + Table */}
      <div style={{ flex: 2 }}>
        <div style={{ marginBottom: '1rem' }}>
          <h1 style={{ margin: 0 }}>Expense Tracker</h1>
          <p style={{ margin: 0, color: '#666' }}>
            Start tracking your expenses below.
          </p>
        </div>

        <input
          type="text"
          placeholder="Search expenses"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          style={{
            marginBottom: "1rem",
            padding: "0.5rem",
            width: "100%",
            borderRadius: "5px",
            border: "1px solid #ccc"
          }}
        />
        <ExpenseTable
          expenses={filteredExpenses}
          onDelete={handleDeleteExpense}
        />
      </div>
    </div>
  );
}

export default App;
