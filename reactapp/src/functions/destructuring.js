// reactapp/src/functions/destructuring.js
// Function to get user name and IP details
function getUserIpDetails(userResponse = {}) {
  const { userName, userIp = '0.0.0.0' } = userResponse;
  return [userName, userIp];
}

// Function to get top three student details
function getTopThree(marks) {
  if (marks.length >= 3) {
    return [marks[0], marks[1], marks[2]];
  } else {
    let paddedMarks = [...marks];
    while (paddedMarks.length < 3) {
      paddedMarks.push(null);
    }
    return paddedMarks;
  }
}

export { getUserIpDetails, getTopThree };