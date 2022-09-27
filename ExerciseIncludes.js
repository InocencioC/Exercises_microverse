let users = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let found = 13;

if (users.includes(found) === true) {
  console.log("Found");
} else {
  console.log("Not found");
  users.push(13)
  console.log(users);
}
