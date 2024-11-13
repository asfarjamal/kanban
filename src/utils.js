export function groupTickets(tickets, groupBy) {
    return tickets.reduce((acc, ticket) => {
      const key = ticket[groupBy];
      acc[key] = acc[key] || [];
      acc[key].push(ticket);
      return acc;
    }, {});
  }
  
  export function sortTickets(tickets, sortBy) {
    return tickets.slice().sort((a, b) => {
      if (sortBy === 'priority') return b.priority - a.priority;
      if (sortBy === 'title') return a.title.localeCompare(b.title);
      return 0;
    });
  }
  