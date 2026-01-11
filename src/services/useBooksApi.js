const BASE_URL = '/api'

const getAuthHead = () => {
  const token = localStorage.getItem('token');
  return {
    'Authorization': `Bearer ${token}`
  }
}

const getBaseHead = () => {
  return {
    'Content-Type': 'application/json'
  }
}

// const getAuthHeadFile = () => {
//   const token = localStorage.getItem('token');
//   return {
//     'Content-Type': 'multipart/form-data',
//     'Authorization': `Bearer ${token}`
//   }
// }

export const BooksApi = {

  // Получить книги/группу книг

  getBooksAll: async () => {
    const res = await fetch(`${BASE_URL}/books`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Get book all failed: ", error);
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
      throw new Error("Get books all user failed: ", error);
    }

    return res.json();
  },

  getBooksById: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Get book by id failed: ", error);
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
      throw new Error("Get book search failed: ", error);
    }

    return res.json();
  },

  getBooksAuthor: async (value) => {
    const res = await fetch(`${BASE_URL}/books?author=${value}`, {
      headers: getBaseHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Get books author failed: ", error);
    }

    return res.json();
  },

  // Получить/добавить книгу авторизованного пользователя

  // uploadBook: async (formData) => {
  //   const res = await fetch(`${BASE_URL}/books/upload`, {
  //     method: "POST",
  //     headers: getAuthHeadFile(),
  //     body: JSON.stringify(formData)
  //   })

  //   if (!res.ok) {
  //     const error = await res.json();
  //     throw new Error("Upload books failed: ", error);
  //   }

  //   return res.json();
  // },
  uploadBook: async (formData) => {
    const token = localStorage.getItem('token');
    const res = await fetch('/api/books/upload', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`
      },
      body: formData
    });
  
    const text = await res.text();
    try {
      const json = JSON.parse(text);
      if (!res.ok) {
        throw new Error(json.message || 'Upload failed');
      }
      return json;
    } catch {
      console.error('Server error (raw):', text);
      throw new Error('Invalid server response');
    }
  },

  getBookUser: async () => {
    const res = await fetch(`${BASE_URL}/books`, {
      headers: getAuthHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Book user failed: ", error);
    }

    return res.json();
  },

  getInfoBookUser: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      headers: getAuthHead(),

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Get info book user failed: ", error);
    }

    return res.json();
  },

  deleteBookUser: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      method: "DELETE",
      headers: getAuthHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Delete book user failed: ", error);
    }

    return res.json();
  },

  ChangeBookUser: async (id, title, description, author) => {
    const res = await fetch(`${BASE_URL}/books/${id}`, {
      method: "PATCH",
      headers: getAuthHead(),
      body: JSON.stringify({ title, description, author })
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Change book user failed: ", error);
    }

    return res.json();
  },

  getProgressBookUser: async (id) => {
    const res = await fetch(`${BASE_URL}/books/${id}/progress`, {
      headers: getAuthHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Get progress book user failed: ", error);
    }

    return res.json();
  },

  getProgressUser: async () => {
    const res = await fetch(`${BASE_URL}/books/progress`, {
      headers: getAuthHead(),
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Get progress user failed: ", error);
    }

    return res.json();
  },

  // Настройки пользователя

  saveSettingsBookUser: async (formData) => {
    const res = await fetch(`${BASE_URL}/user/settings`, {
      method: "POST",
      headers: getAuthHead(),
      body: JSON.stringify({ formData })
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Save settings book user failed: ", error);
    }

    return res.json();
  },

  getSettingsBookUser: async () => {
    const res = await fetch(`${BASE_URL}/user/settings`, {
      headers: getAuthHead()
    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Get settings book user failed: ", error);
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
      throw new Error("Get books admin failed: ", error);
    }

    return res.json();
  },


  changeBookAdmin: async (id, isPublic) => {
    const res = await fetch(`${BASE_URL}/books/${id}/change-visibility`, {
      method: "PUT",
      headers: getAuthHead(),
      body: JSON.stringify({ isPublic })

    })

    if (!res.ok) {
      const error = await res.json();
      throw new Error("Change book admin failed: ", error);
    }

    return res.json();
  },
}






