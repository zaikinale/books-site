import BookCardUser from "../components/BookCardUser";

export default function Prodile() {
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
              <p className="card-text"><strong>Имя:</strong> Алексей </p>
              <p className="card-text"><strong>Email:</strong> ivan@example.com</p>
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
          </div>
          <button className="btn btn-secondary mt-2" onclick="addBookForm()">Добавить еще одну книгу</button>
          <button className="btn btn-primary mt-2" onclick="uploadBooks()">Загрузить все книги</button>
          <div id="error-messages" className="text-danger mt-2"></div>
        </div>
      </div>

      <div>
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
      </div>
    </div>
  )
}