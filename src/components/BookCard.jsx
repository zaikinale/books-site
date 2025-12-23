export default function BookCard () {
    return (
        <div className="card book-card">
            <div className="card-body">
                <h5 className="card-title">Заголовок книги</h5>
                <h6 className="card-subtitle mb-2 text-muted">Автор книги</h6>
                <p className="card-text">Описание книги</p>
                <a href="book.html" className="btn btn-primary">Читать</a>
            </div>
        </div>
    )
}