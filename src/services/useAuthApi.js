const BASE_URL = 'https://reader-api.pasdel.ru/api/'

const getBaseHead = () => {
  return {
    'Content-Type': 'application/json'
  }
}

export const AuthApi = {
  login: async (email, password) => {
    const res = await fetch(`${BASE_URL}/login`, {
      method: "POST",
      headers: getBaseHead,
      body: JSON.stringify({ email, password })
    }) 
      
    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }
    
    return res.json();
  },

  registration: async (name, email, age, password) => {
    const res = await fetch(`${BASE_URL}/registration`, {
      method: "POST",
      headers: getBaseHead,
      body: JSON.stringify({ name, email, age, password })
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Registration failed: ", error);
    }

    return res.json();
  },

  logout: async () => {
    const res = await fetch(`${BASE_URL}/logout`, {
      headers: getBaseHead,
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Logout failed: ", error);
    }

    return res.json();
  },


}






