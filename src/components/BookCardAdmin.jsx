export default function BookCardAdmin () {
    return (
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
    )
}