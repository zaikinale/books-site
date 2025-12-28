import { useState, useRef, useEffect } from "react";
import BookCardUser from "../components/BookCardUser";
import { useUserStore } from '../store/ProfileStore';
import { BooksApi } from "../services/useBooksApi"; 

export default function Profile() {
  const { name, email } = useUserStore();
  const [bookForms, setBookForms] = useState([]);
  const [userBooks, setUserBooks] = useState([]);

  const nextIdRef = useRef(1);

  useEffect(() => {
    const fetchUserBooks = async () => {
      try {
        const resp = await BooksApi.getBookUser();
        if (resp.data?.code >= 200 && resp.data?.code < 300) {
          setUserBooks(resp.data.books || []);
        } else {
          console.error('Ошибка загрузки книг:', resp.message);
          setUserBooks([]);
        }
      } catch (error) {
        console.error('Сетевая ошибка:', error);
        setUserBooks([]);
      } 
    };

    fetchUserBooks();
  }, []);

  async function deleteBook (bookId) {
    try {
      await BooksApi.deleteBookUser(bookId);
      setUserBooks(prev => prev.filter(book => book.id !== bookId));
      console.log('Книга удалена');
    } catch (error) {
      console.error('Ошибка при удалении книги:', error);
    }
  }

  function addBookForm () {
    const newId = nextIdRef.current;
    nextIdRef.current += 1; 
    const newBook = {
      id: newId,
      title: '',
      author: '',
      description: '',
      file: null
    };
    setBookForms(prev => [...prev, newBook]);
  };

  const removeBookForm = (idToRemove) => {
    setBookForms(prev => 
      prev.filter(book => book.id !== idToRemove)
    );
  };

  const handleInputChange = (id, field, value) => {
    setBookForms(prev =>
      prev.map(book =>
        book.id === id ? { ...book, [field]: value } : book
      )
    );
  };

  const handleFileChange = (id, file) => {
    setBookForms(prev =>
      prev.map(book =>
        book.id === id ? { ...book, file } : book
      )
    );
  };

  const uploadBooks = async () => {
    try {
      const uploadPromises = bookForms.map(async (book) => {
        const { title, author, description, file } = book;
  
        const formData = new FormData();
        formData.append('title', title);
        formData.append('author', author);
        formData.append('description', description);
        
        // if (file) {
          formData.append('file', file);
        // }
  
        const resp = await BooksApi.uploadBook(formData);
        console.log('Запрос на сервер:', resp.data)
  
        if (resp.data?.code >= 200 && resp.data?.code < 300) {
          return resp.data.book;
        } else {
          console.log('Файл:', file);
          throw new Error(resp.message || 'Upload failed');
        }
      });
  
      const newBooks = await Promise.all(uploadPromises);
      setUserBooks(prev => [...prev, ...newBooks]);
      setBookForms([]);
      console.log('Все книги успешно загружены');
    } catch (error) {
      console.error('Ошибка при загрузке книг:', error);
    }
  };


  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Профиль пользователя</h1>
        </div>
      </div>

      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">Информация о пользователе</h5>
              <p className="card-text"><strong>Имя:</strong> {name}</p>
              <p className="card-text"><strong>Email:</strong> {email}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Мои книги</h3>
          <div id="user-books">
            {userBooks.map((book) => (
              <BookCardUser
                key={book.id}
                id={book.id}
                title={book.title}
                author={book.author}
                description={book.description}
                deleteBook={deleteBook}
              />
            ))}
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Добавить книги</h3>
          <div id="add-books-form">
            {bookForms.map((book) => (
              <div key={book.id} className="add-book-form mb-4 p-3 border rounded">
                <div className="mb-3">
                  <label htmlFor={`title-${book.id}`} className="form-label">Название книги</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`title-${book.id}`}
                    value={book.title}
                    onChange={(e) => handleInputChange(book.id, 'title', e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`author-${book.id}`} className="form-label">Автор</label>
                  <input
                    type="text"
                    className="form-control"
                    id={`author-${book.id}`}
                    value={book.author}
                    onChange={(e) => handleInputChange(book.id, 'author', e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor={`description-${book.id}`} className="form-label">Описание</label>
                  <textarea
                    className="form-control"
                    id={`description-${book.id}`}
                    value={book.description}
                    onChange={(e) => handleInputChange(book.id, 'description', e.target.value)}
                  ></textarea>
                </div>
                <div className="mb-3">
                  <label htmlFor={`file-${book.id}`} className="form-label">Загрузить файл</label>
                  <input
                    type="file"
                    className="form-control"
                    id={`file-${book.id}`}
                    onChange={(e) => handleFileChange(book.id, e.target.files[0])}
                  />
                </div>
                <button
                  type="button"
                  className="btn btn-danger btn-sm"
                  onClick={() => removeBookForm(book.id)}
                >
                  Удалить эту книгу
                </button>
              </div>
            ))}
          </div>

          <button
            type="button"
            className="btn btn-secondary mt-2"
            onClick={addBookForm}
          >
            Добавить ещё одну книгу
          </button>

          <button
            type="button"
            className="btn btn-primary mt-2 ms-2"
            onClick={uploadBooks}
          >
            Загрузить все книги
          </button>
        
          <div id="error-messages" className="text-danger mt-2"></div>
        </div>
      </div>
    </div>
  );
}