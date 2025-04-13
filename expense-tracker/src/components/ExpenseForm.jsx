import { useState } from 'react';

function ExpenseForm({ onAddExpense }) {
  const [expense, setExpense] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  const [date, setDate] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const newExpense = {
      id: Date.now(),
      expense,
      description,
      category,
      amount: parseFloat(amount),
      date
    };

    onAddExpense(newExpense);

    // Reset form
    setExpense('');
    setDescription('');
    setCategory('');
    setAmount('');
    setDate('');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Expense Name"
        value={expense}
        onChange={(e) => setExpense(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        required
      />
      <input
        type="text"
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        required
      />
      <input
        type="number"
        placeholder="Amount (KES)"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        required
      />
      <input
        type="date"
        value={date}
        onChange={(e) => setDate(e.target.value)}
        required
      />
      <button type="submit">Add Expense</button>
    </form>
  );
}

export default ExpenseForm;
