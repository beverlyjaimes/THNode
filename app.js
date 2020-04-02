console.log("Hello World!");
// for errors
console.error("Something went wrong");
// for objects 
console.dir({name:"Bev", age:26});

// Problem: Need a simple way to look at a user's badge count and JS points

// print msg to console
function printMessage(username, badgeCount, point){
  const message =  `${username} has ${badgeCount} total badge(s) and $(points) points in javaScript `;
  console.log(message);
}

printMessage("bev", 200, 23342);

// Solution: Use Node.js to connect to TH API to get profile information to pring out

// Connect to API URL (https://teamtreehouse.com/beverlyjaimespuente.json)
// Read data
// Parse data
// Print data