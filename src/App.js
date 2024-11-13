import React, { useEffect, useState } from 'react';
import KanbanBoard from './components/KanbanBoard';
import useFetch from './hooks/useFetch';
import './styles.css';

function App() {
  const { data: tickets = [], error, loading } = useFetch('https://api.quicksell.co/v1/internal/frontend-assignment');
  const [groupBy, setGroupBy] = useState(localStorage.getItem('groupBy') || 'status');
  const [sortBy, setSortBy] = useState(localStorage.getItem('sortBy') || 'priority');

  useEffect(() => {
    localStorage.setItem('groupBy', groupBy);
    localStorage.setItem('sortBy', sortBy);
  }, [groupBy, sortBy]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error loading tickets.</div>;

  console.log("Tickets:", tickets); // Log to confirm tickets data

  return (
    <div className="App">
      <header>
        <h1>Kanban Board</h1>
        <div>
          <label>Group By:</label>
          <select onChange={(e) => setGroupBy(e.target.value)} value={groupBy}>
            <option value="status">Status</option>
            <option value="user">User</option>
            <option value="priority">Priority</option>
          </select>
          <label>Sort By:</label>
          <select onChange={(e) => setSortBy(e.target.value)} value={sortBy}>
            <option value="priority">Priority</option>
            <option value="title">Title</option>
          </select>
        </div>
      </header>
      {Array.isArray(tickets) && tickets.length > 0 ? (
        <KanbanBoard tickets={tickets} groupBy={groupBy} sortBy={sortBy} />
      ) : (
        <div>No tickets available</div>
      )}
    </div>
  );
}

export default App;
