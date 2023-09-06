import './App.css';
import React from 'react';

import { getUserIpDetails, getTopThree } from './functions/destructuring';

function App() {
  const userDetails = getUserIpDetails({
    userName: 'test',
    userIp: '127.0.0.1',
  });
  console.log(userDetails);

  const studentMarks = [90, 85];
  const topThree = getTopThree(studentMarks);
  console.log(topThree);

  return (
    <div>
      <p>Username: {userDetails[0]}</p>
      <p>User IP: {userDetails[1]}</p>
      <ul>
        {topThree.map((mark, index) => (
          <li key={index}>{mark}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;