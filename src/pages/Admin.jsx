import { useState, useEffect } from "react";
import BookCardAdmin from "../components/BookCardAdmin";
import { useUserStore } from '../store/ProfileStore';
import { BooksApi } from "../services/useBooksApi";
import { useNavigate } from "react-router-dom";

export default function Admin () {
  const navigate = useNavigate();
  const { role } = useUserStore();
  const [adminBooks, setAdminBooks] = useState([]);

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
              const resp = await BooksApi.getBooksAdmin();
              if (resp.data?.code >= 200 && resp.data?.code < 300) {
                setAdminBooks(resp.data.books || []);
              } else {
                  console.error('Ошибка загрузки книг администратора:', resp.message);
                  setAdminBooks([]);
              }
          } catch (error) {
              console.error('Сетевая ошибка:', error);
              setAdminBooks([]);
          }
      };

      fetchUserBooks();
  }, [role]);

  async function deleteBook(bookId) {
      try {
          await BooksApi.deleteBookUser(bookId);
          setAdminBooks(prev => prev.filter(book => book.id !== bookId));
      } catch (error) {
          console.error('Ошибка при удалении книги:', error);
      }
  }
  
  async function handleBookUpdated(bookId, updatedBook) {
    setAdminBooks(prev =>
      prev.map(book => (book.id === bookId ? updatedBook : book))
    );
  }

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

              {adminBooks.length > 0 ? (
                adminBooks.map((book) => (
                  <BookCardAdmin
                    key={book.id}
                    id={book.id}
                    title={book.title}
                    author={book.author}
                    description={book.description}
                    isPublic={book.is_public}
                    deleteBook={deleteBook}
                    onBookUpdated={handleBookUpdated}

                  />
                ))
                ) : (
                  <p>У вас пока нет книг.</p>
              )}
            </div>
          </div>
        </div>

      </div>
  )
}