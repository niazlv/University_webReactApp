let user = null;

export async function login(email, password) {
  return fetch('http://localhost:8080/login.php', {
    method: 'POST',
    credentials: 'include', // Включаем куки для поддержания сессии
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        user = data.user;
        return { message: data.message, user: user };
      } else {
        return { message: data.message };
      }
    })
    .catch((error) => {
      console.error('Ошибка при входе:', error);
      return { message: 'Ошибка при входе' };
    });
}

export async function register(firstName, lastName, email, password) {
  return fetch('http://localhost:8080/register.php', {
    method: 'POST',
    credentials: 'include', // Включаем куки для поддержания сессии
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    body: `firstName=${encodeURIComponent(firstName)}&lastName=${encodeURIComponent(lastName)}&email=${encodeURIComponent(email)}&password=${encodeURIComponent(password)}`,
  })
    .then((response) => response.json())
    .then((data) => {
      if (data.user) {
        user = data.user;
        return { message: data.message };
      } else {
        return { message: data.message };
      }
    })
    .catch((error) => {
      console.error('Ошибка при регистрации:', error);
      return { message: 'Ошибка при регистрации' };
    });
}

export async function logout() {
  return fetch('http://localhost:8080/logout.php', {
    method: 'POST',
    credentials: 'include',
  })
    .then((response) => response.json())
    .then((data) => {
      user = null;
      return { message: data.message };
    })
    .catch((error) => {
      console.error('Ошибка при выходе:', error);
      return { message: 'Ошибка при выходе' };
    });
}

export async function getUser() {
  if (user) {
    return Promise.resolve(user);
  } else {
    return fetch('http://localhost:8080/get_user.php', {
      method: 'GET',
      credentials: 'include',
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.user) {
          user = data.user;
          return user;
        } else {
          return null;
        }
      })
      .catch((error) => {
        console.error('Ошибка при получении пользователя:', error);
        return null;
      });
  }
}
