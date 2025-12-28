import { useState } from "react";
import BookCardUser from "../components/BookCardUser";
import { useUserStore } from '../store/ProfileStore'
export default function Profile() {
  const { name, email } = useUserStore();
  const [isBookFormAct, setBookFromAct] = useState(false);

  function formId() {
    let id = 0;
    return function() {
      id += 1;
      return id;
    };
  }
  
  function addBookForm() {
    setBookFromAct(!isBookFormAct)
    // console.log('Click ', isBookFormAct)
  }

  function uploadBooks() {
    console.log('Click ', name, email)
  }

  function removeBookForm() {
    return 
  }


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
            <BookCardUser/>
            <BookCardUser/>
          </div>
        </div>
      </div>

      <div className="row mt-4">
        <div className="col-md-12">
          <h3>Добавить книги</h3>
          <div id="add-books-form">
            {isBookFormAct !== false && (
              <div className="add-book-form" id={`form-${formId}`}>
                <div className="mb-3">
                  <label for={`title-${formId}`} className="form-label">Название книги</label>
                  <input type="text" className="form-control" id={`title-${formId}`} />
                </div>
                <div className="mb-3">
                  <label for={`author-${formId}`} className="form-label">Автор</label>
                  <input type="text" className="form-control" id={`author-${formId}`} />
                </div><div className="mb-3">
                  <label for={`description-${formId}`} className="form-label">Описание</label>
                  <textarea className="form-control" id={`description-${formId}`}></textarea>
                </div><div className="mb-3">
                  <label for={`file-${formId}`} className="form-label">Загрузить файл</label>
                  <input type="file" className="form-control" id={`file-${formId}`} />
                </div>
                <button className="btn btn-danger btn-sm" onClick={removeBookForm(`${formId}`)}>Удалить эту книгу</button>
              </div>
            )
          }
          </div>
          <button className="btn btn-secondary mt-2" onClick={addBookForm}>Добавить еще одну книгу</button>
          <button className="btn btn-primary mt-2" onClick={uploadBooks}>Загрузить все книги</button>
          <div id="error-messages" className="text-danger mt-2"></div>
        </div>
      </div>

      {/* <div>
        <div className="add-book-form" id="form-${formId}">
          <div className="mb-3">
            <label for="title-${formId}" className="form-label">Название книги</label>
            <input type="text" className="form-control" id="title-${formId}" />
          </div>
          <div className="mb-3">
            <label for="author-${formId}" className="form-label">Автор</label>
            <input type="text" className="form-control" id="author-${formId}" />
          </div>
          <div className="mb-3">
            <label for="description-${formId}" className="form-label">Описание</label>
            <textarea className="form-control" id="description-${formId}"></textarea>
          </div>
          <div className="mb-3">
            <label for="file-${formId}" className="form-label">Загрузить файл</label>
            <input type="file" className="form-control" id="file-${formId}" />
          </div>
          <button className="btn btn-danger btn-sm" onclick="removeBookForm('${formId}')">Удалить эту книгу</button>
        </div>
      </div> */}
    </div>
  )
}