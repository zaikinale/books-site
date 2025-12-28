import { useState } from "react"

export default function BookCardUser ({ id, title, author, description }) {
    const [isEdit, setEdit] = useState(false);
    function editBook() {
        setEdit(!isEdit) 
    }
    function deleteBook() {
        return 
    }

    return (
        <div className="card book-card">
            <div className="card-body">

                {
                    isEdit ? (
                        <>
                        <input className="form-control" type="text" id={`book-title-${id}`} placeholder={title} />
                        <input className="form-control" type="text" id={`book-author-${id}`} placeholder={author}  />
                        <input className="form-control" type="text" id={`book-description-${id}`} placeholder={description} />
                    </>
                ) : (
                    <>
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{author}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{description}</h5>
                    </>
                )
            }
{/* 
                <h5 className="card-title">Название книги</h5>
                <input className="form-control" type="text" id="book-title-${formId}" />
                <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                <input className="form-control" type="text" id="book-author-${formId}" />
                <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                <input className="form-control" type="text" id="book-description-${formId}" /> */}
                <button className="btn btn-warning btn-sm" onClick={editBook}>Редактировать</button>
                <button className="btn btn-danger btn-sm" onClick={deleteBook}>Удалить</button>
            </div>
        </div>
    )
}