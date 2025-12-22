
export default function Admin () {

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
                    </div>

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
                          </div>
                      </div>
                    </div>
                </div>

      </div>
  )
}