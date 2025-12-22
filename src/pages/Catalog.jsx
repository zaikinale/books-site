export default function Catalog () {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <h1 className="text-center">Каталог книг</h1>
        </div>
      </div>
      <div className="row" id="book-list">

        <div className="col-md-4">
          <div className="card book-card">
            <div className="card-body">
              <h5 className="card-title">Заголовок книги</h5>
              <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
              <p className="card-text">Описание книги</p>
              <a href="book.html" className="btn btn-primary">Читать</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card book-card">
            <div className="card-body">
              <h5 className="card-title">Заголовок книги</h5>
              <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
              <p className="card-text">Описание книги</p>
              <a href="book.html" className="btn btn-primary">Читать</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card book-card">
            <div className="card-body">
              <h5 className="card-title">Заголовок книги</h5>
              <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
              <p className="card-text">Описание книги</p>
              <a href="book.html" className="btn btn-primary">Читать</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card book-card">
            <div className="card-body">
              <h5 className="card-title">Заголовок книги</h5>
              <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
              <p className="card-text">Описание книги</p>
              <a href="book.html" className="btn btn-primary">Читать</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card book-card">
            <div className="card-body">
              <h5 className="card-title">Заголовок книги</h5>
              <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
              <p className="card-text">Описание книги</p>
              <a href="book.html" className="btn btn-primary">Читать</a>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card book-card">
            <div className="card-body">
              <h5 className="card-title">Заголовок книги</h5>
              <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
              <p className="card-text">Описание книги</p>
              <a href="book.html" className="btn btn-primary">Читать</a>
            </div>
          </div>
        </div>

      </div>
      <div className="row">
        <div className="col-md-12 d-flex justify-content-center">
          <nav aria-label="Page navigation">
            <ul className="pagination">
              <li className="page-item" id="prev-page"><a className="page-link" href="#">Предыдущая</a></li>
              <li className="page-item" id="next-page"><a className="page-link" href="#">Следующая</a></li>
            </ul>
          </nav>
        </div>
      </div>
    </div>
  )
}