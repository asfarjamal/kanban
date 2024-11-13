import React from 'react';
import KanbanColumn from './KanbanColumn';

function KanbanBoard({ tickets, groupBy, sortBy }) {
  
  const groupedTickets = tickets.reduce((acc, ticket) => {
    const groupKey = ticket[groupBy];  
    if (!acc[groupKey]) {
      acc[groupKey] = [];
    }
    acc[groupKey].push(ticket);
    return acc;
  }, {});

  console.log("Grouped Tickets:", groupedTickets);

  
  const sortedGroupedTickets = Object.keys(groupedTickets).map(group => {
    const sortedTickets = groupedTickets[group].sort((a, b) => {
      if (sortBy === 'priority') {
        return a.priority - b.priority;
      } else if (sortBy === 'title') {
        return a.title.localeCompare(b.title);
      }
      return 0;
    });
    return { group, tickets: sortedTickets };
  });

  console.log("Sorted Grouped Tickets:", sortedGroupedTickets);

  return (
    <div className="kanban-board">
      {sortedGroupedTickets.map(({ group, tickets }) => (
        <KanbanColumn key={group} title={group} tickets={tickets} />
      ))}
    </div>
  );
}

export default KanbanBoard;
