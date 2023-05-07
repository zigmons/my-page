import React from 'react';
import Download from './Download';

function ParentComponent() {
  const user = {
    id: "",
    email: '',
    name: '',
  };

  return (
    <div>
      <h1>Parent Component</h1>
      {/* Pass the user's email and name as props to the Download component */}
      <Download userEmail={user.email} userName={user.name} userId={user.id} />
    </div>
  );
}

export default ParentComponent;
