// src/functions/destructuring.js

export function getUserIpDetails(userResponse = {}) {
    const { userName, userIp = '0.0.0.0' } = userResponse;
    return [userName, userIp];
  }
  
  export function getTopThree(studentMarks) {
    const [first = null, second = null, third = null] = studentMarks;
    const topThree = [ first , second , third ];
    return topThree;
  }