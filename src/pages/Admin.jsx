import { useState, useEffect } from "react";
import BookCardAdmin from "../components/BookCardAdmin";
import { useUserStore } from '../store/ProfileStore';
import { BooksApi } from "../services/useBooksApi";
import { useNavigate } from "react-router-dom";

export default function Admin () {
  const navigate = useNavigate();
  const { role } = useUserStore();
  const [isPublic, setIsPublic] = useState(true)
  const [userBooks, setUserBooks] = useState([]);

  useEffect(() => {
      if (role !== 'admin') {
          navigate('/denied');
      }
  }, [role, navigate]);

  useEffect(() => {
      if (role !== 'admin') {
        return;
      }

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
  }, [role]);

  async function deleteBook(bookId) {
      try {
          await BooksApi.deleteBookUser(bookId);
          setUserBooks(prev => prev.filter(book => book.id !== bookId));
      } catch (error) {
          console.error('Ошибка при удалении книги:', error);
      }
  }
  
  async function handleBookUpdated(bookId, updatedBook) {
    setUserBooks(prev =>
      prev.map(book => (book.id === bookId ? updatedBook : book))
    );
  }

  async function toggleChangeStatus() {
    setIsPublic(!isPublic);
  }

  // function addBookForm() {
  //     const newId = nextIdRef.current++;
  //     const newBook = { id: newId, title: '', author: '', description: '', file: null };
  //     setBookForms(prev => [...prev, newBook]);
  // }

  // const removeBookForm = (idToRemove) => {
  //     setBookForms(prev => prev.filter(book => book.id !== idToRemove));
  // };

  // const handleInputChange = (id, field, value) => {
  //     setBookForms(prev =>
  //         prev.map(book => (book.id === id ? { ...book, [field]: value } : book))
  //     );
  // };

  // const handleFileChange = (id, file) => {
  //     setBookForms(prev =>
  //         prev.map(book => (book.id === id ? { ...book, file } : book))
  //     );
  // };

  // const uploadBooks = async () => {
  //     try {
  //         const uploadPromises = bookForms.map(async (book) => {
  //             const { title, author, description, file } = book;
  //             const formData = new FormData();
  //             formData.append('title', title);
  //             formData.append('author', author);
  //             formData.append('description', description);
  //             if (file instanceof File) {
  //                 formData.append('file', file);
  //             }

  //             const resp = await BooksApi.uploadBook(formData);
  //             if (resp.data?.code >= 200 && resp.data?.code < 300) {
  //                 return resp.data.book;
  //             } else {
  //                 throw new Error(resp.message || 'Upload failed');
  //             }
  //         });

  //         const newBooks = await Promise.all(uploadPromises);
  //         setUserBooks(prev => [...prev, ...newBooks]);
  //         setBookForms([]);
  //     } catch (error) {
  //         console.error('Ошибка при загрузке книг:', error);
  //     }
  // };

  if (role !== 'admin') {
      return null;
  }


  return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-md-12">
            <h1 className="text-center">Кабинет администратора</h1>
          </div>
        </div>

        <div className="row mt-4">
          <div className="col-md-12">
            <h3>Мои книги</h3>
            <div id="user-books">

              {userBooks.length > 0 ? (
                userBooks.map((book) => (
                  <BookCardAdmin
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    deleteBook={deleteBook}
                    onBookUpdated={handleBookUpdated}
                    toggleChangeStatus={toggleChangeStatus}
                  />
                ))
                ) : (
                  <p>У вас пока нет книг.</p>
              )}

{/* 
              <div className="card book-card">
                <div className="card-body">
                  <h5 className="card-title">Название книги</h5>
                  <input className="form-control" type="text" id="book-title-${formId}" />
                  <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                  <input className="form-control" type="text" id="book-author-${formId}" />
                  <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                  <input className="form-control" type="text" id="book-description-${formId}" />
                  <h5 className="card-subtitle mb-2 text-muted">Статус</h5>
                  <p className="form-control" id="book-status-${formId}">Доступно</p>
                  <button className="btn btn-warning btn-sm" onclick="editBook()">Редактировать</button>
                  <button className="btn btn-danger btn-sm" onclick="deleteBook()">Удалить</button>
                  <button className="btn btn-secondary btn-sm" onclick="toggleStatus()">Изменить статус</button>
                </div>
              </div> */}
              {/* <BookCardAdmin/>
              <BookCardAdmin/> */}

              {/* <div className="card book-card">
                      <div className="card-body">
                        <h5 className="card-title">Название книги</h5>
                        <input className="form-control" type="text" id="book-title-${formId}" />
                          <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                          <input className="form-control" type="text" id="book-author-${formId}" />
                            <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                            <input className="form-control" type="text" id="book-description-${formId}" />
                              <h5 className="card-subtitle mb-2 text-muted">Статус</h5>
                              <p className="form-control" id="book-status-${formId}">Доступно</p>
                              <button className="btn btn-warning btn-sm" onclick="editBook()">Редактировать</button>
                              <button className="btn btn-danger btn-sm" onclick="deleteBook()">Удалить</button>
                              <button className="btn btn-secondary btn-sm" onclick="toggleStatus()">Изменить статус</button>
                            </div>
              </div> */}
            </div>
          </div>
        </div>

      </div>
  )
}