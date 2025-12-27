const BASE_URL = 'https://reader-api.pasdel.ru/api'

const getAuthHead = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  }
}

const getBaseHead = () => {
  return {
    'Content-Type': 'application/json'
  }
}

export const BooksApi = {

  // Получить книги/группу книг

  getBooksAll: async () => {
    const res = await fetch(`${BASE_URL}/books`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getBooksAllUser: async (count, page) => {
    const res = await fetch(`${BASE_URL}/books`, {
      headers: getBaseHead(), 
      body: JSON.stringify({count, page})
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getBooksById: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },


  // Поиск книги

  getBooksSearch: async (value) => {
    const res = await fetch(`${BASE_URL}/books?search=${value}`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getBooksAuthor: async (value) => {
    const res = await fetch(`${BASE_URL}/books?author=${value}`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  // Получить/добавить книгу авторизованного пользователя

  uploadBook: async (formData) => {
    const res = await fetch(`${BASE_URL}/books/upload`, {
      method: "POST",
      headers: getAuthHead,
      body: JSON.stringify(formData)

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getBookUser: async () => {
    const res = await fetch(`${BASE_URL}/books`, {
      headers: getAuthHead,

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getInfoBookUser: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      headers: getAuthHead,

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getDeleteBookUser: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      method: "DELETE",
      headers: getAuthHead,

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getChangeBookUser: async (id, title, description, author) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      method: "PATCH",
      headers: getAuthHead,
      body: JSON.stringify({ title, description, author })

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getProgressBookUser: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}/progress`, {
      headers: getAuthHead,
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getProgressUser: async () => {
    const res = await fetch(`${BASE_URL}/books/progress`, {
      headers: getAuthHead,
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  // Настройки пользователя

  saveSettingsBookUser: async (formData) => {
    const res = await fetch(`${BASE_URL}/user/settings`, {
      method: "POST",
      headers: getAuthHead,
      body: JSON.stringify({ formData })
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  getSettingsBookUser: async () => {
    const res = await fetch(`${BASE_URL}/user/settings`, {
      headers: getAuthHead
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },

  // Администратор

  getBooksAdmin: async () => {
    const res = await fetch(`${BASE_URL}/books`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },


  getChangeBookAdmin: async (id, isPublic) => {
    const res = await fetch(`${BASE_URL}/books/${id}/change-visibility`, {
      method: "PUT",
      headers: getAuthHead,
      body: JSON.stringify({ isPublic })

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Login failed: ", error);
    }

    return res.json();
  },
}






