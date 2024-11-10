let user = null;

export function login(email, password) {
  const storedUsers = localStorage.getItem('users');
//   const storedId = localStorage.getItem('id');
//   const _id = storedId ? JSON.parse(storedId): [];
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  const matchedUser = users.find(
    user => user.email === email && user.password === password
  );

  if (matchedUser) {
    user = matchedUser;
    localStorage.setItem('user', JSON.stringify(matchedUser));
    return { message: 'Login successfully', user: user};  
  } else {
    return { message: 'Invalid email or password' };
  }
}
function getNextId() {
    const storedUsers = localStorage.getItem('users');
    const users = storedUsers ? JSON.parse(storedUsers) : [];
    return users.length ? Math.max(...users.map(u => u._id)) + 1 : 1;  
}

export function register(firstName, lastName, email, password) {
  const storedUsers = localStorage.getItem('users');
  const users = storedUsers ? JSON.parse(storedUsers) : [];

  const userExists = users.find(user => user.email === email);

  if (userExists) {
    return { message: 'User already registered' };
  }

  
  const newUser = { firstName, lastName, email, password, _id:getNextId()};
  //console.log("newUser %s", JSON.stringify(newUser));
  users.push(newUser);
  //console.log("users %s", JSON.stringify(users));
  localStorage.setItem('users', JSON.stringify(users));

  user = newUser; 
  localStorage.setItem('user', JSON.stringify(newUser));

  return { message: 'Account created' }; 
}

export function logout() {
  user = null;
  localStorage.removeItem('user');
}

export function getUser() {
  return user;  
}