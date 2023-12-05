var collection = db.users;

function generateLogin() {
  return (Math.random() + 1).toString(36).substring(7);
}

collection.insertMany([
  { login: generateLogin(), id: '1', roles: ['user'] },
  { login: generateLogin(), id: '2', roles: ['user'] },
  { login: generateLogin(), id: '3', roles: ['user'] },
]);
