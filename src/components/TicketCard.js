import React from 'react';

function TicketCard({ ticket }) {
  const { title, priority, user, status } = ticket;
  return (
    <div className="ticket-card">
      <h3>{title}</h3>
      <p>Priority: {priority}</p>
      <p>User: {user}</p>
      <p>Status: {status}</p>
    </div>
  );
}

export default TicketCard;
