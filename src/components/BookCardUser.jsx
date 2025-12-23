export default function BookCardUser () {
    return (
        <div className="card book-card">
            <div className="card-body">
                <h5 className="card-title">Название книги</h5>
                <input className="form-control" type="text" id="book-title-${formId}" />
                <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                <input className="form-control" type="text" id="book-author-${formId}" />
                <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                <input className="form-control" type="text" id="book-description-${formId}" />
                <button className="btn btn-warning btn-sm" onclick="editBook()">Редактировать</button>
                <button className="btn btn-danger btn-sm" onclick="deleteBook()">Удалить</button>
            </div>
        </div>
    )
}