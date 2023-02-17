const user = {
  id: 1,
  name: "John",
  age: 25,
};

function saveUserToLocalStorage(user) {
  const userString = JSON.stringify(user);
  localStorage.setItem('user', userString);
}
saveUserToLocalStorage(user);

function getUserFromLocaleStorage() {
  const userString = localStorage.getItem('user');
  const user = JSON.parse(userString)
  console.log(user);
  return user
}

getUserFromLocaleStorage()
