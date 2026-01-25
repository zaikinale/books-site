const BASE_URL = '/api'

const getBaseHead = () => {
  return {
    'Content-Type': 'application/json'
  }
}

export const AuthApi = {
  // Функция входа в профиль
  login: async (email, password) => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: getBaseHead(),
      body: JSON.stringify({ email, password })
    }) 
      
    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }
    
    return res.json();
  },

  // Функция регистрации
  registration: async (name, email, age, password) => {
    const res = await fetch(`${BASE_URL}/registration`, {
      method: "POST",
      headers: getBaseHead(),
      body: JSON.stringify({ name, email, age, password })
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Registration failed: ", error);
    }

    return res.json();
  },

  // Функция выхода из профиля
  logout: async () => {

    const res = await fetch(`${BASE_URL}/logout`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Logout failed: ", error);
    }
    localStorage.clear()

    return res.json();
  },
}






