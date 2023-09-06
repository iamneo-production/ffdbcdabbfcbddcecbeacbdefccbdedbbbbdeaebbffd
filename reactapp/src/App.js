import React from 'react';
import { getUserIpDetails, getTopThree } from '../functions/destructuring';

function App() {
  const studentMarks = [80, 90, 70, 85, 95, 65];

  const topThree = getTopThree(studentMarks);

const userResponse = {
    userName: 'test',
  };

  const [userName, userIp] = getUserIpDetails(userResponse);

  return (
<div>
     <div>
      <p>User Name: {userName}</p>
      <p>User IP: {userIp}</p>
    </div>

    <div>
      <h2>Top Three Students:</h2>
      <ul>
        {topThree.map((student,index) => (
          <li key={index}>Rank {index}: {student}</li>
        ))}
      </ul>
    </div>
</div>
  );
}

export default App;