import { useState } from "react";
import { BooksApi } from '../services/useBooksApi';

export default function BookCardAdmin ({ id, title, author, description, deleteBook, onBookUpdated }) {
    const formId = id;
    const [isEdit, setEdit] = useState(false);
    const [isAvailable, setIsAvailable] = useState(false);

    const [formData, setFormData] = useState({
        title,
        author,
        description
    });

    const toggleStatus = () => {
        setIsAvailable(prev => !prev)
    };

    const handleInputChange = (field, value) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const saveChanges = async () => {
        try {
            await BooksApi.ChangeBookUser(id, formData.title, formData.description, formData.author);
        
            onBookUpdated(id, {
                id,
                title: formData.title,
                author: formData.author,
                description: formData.description,
            });
        
            setEdit(false);
        } catch (error) {
            console.error('Ошибка сохранения:', error);
        }
    };

    const cancelEdit = () => {
        setFormData({ title, author, description });
        setEdit(false);
    };

    return (
        <div className="card book-card">
            <div className="card-body">
                {isEdit ? (
                    <>
                        <input 
                            className="form-control" 
                            type="text" 
                            id={`book-title-${formId}`}
                            value={formData.title}
                            onChange={(e) => handleInputChange('title', e.target.value)} 
                        />
                        <input 
                            className="form-control" 
                            type="text" 
                            id={`book-author-${formId}`}
                            value={formData.author}
                            onChange={(e) => handleInputChange('author', e.target.value)} 
                        />
                        <input 
                            className="form-control" 
                            type="text" 
                            id={`book-description-${formId}`}
                            value={formData.description}
                            onChange={(e) => handleInputChange('description', e.target.value)}  
                        />
                    </>
                ) : (
                    <>
                        <h5 className="card-title">{title}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{author}</h5>
                        <h5 className="card-subtitle mb-2 text-muted">{description}</h5>
                    </>
                )}
                <h5 className="card-subtitle mb-2 text-muted">Статус</h5>
                <p className="form-control" id={`book-status-${formId}`}>{isAvailable ? "Доступно" : "Закрыто"}</p>

                {isEdit ? (
                    <>
                        <button className="btn btn-warning btn-sm" onclick={saveChanges}>Сохранить</button>
                        <button className="btn btn-danger btn-sm" onclick={cancelEdit}>Отменить</button>
                    </>
                ) : (
                    <>
                        <button className="btn btn-warning btn-sm" onclick={() => setEdit(true)}>Редактировать</button>
                        <button className="btn btn-danger btn-sm" onclick={deleteBook}>Удалить</button>
                    </>
                )}
                <button className="btn btn-secondary btn-sm" onclick={toggleStatus}>Изменить статус</button>
                {/* <h5 className="card-title">Название книги</h5>
                <input className="form-control" type="text" id={`book-title-${formId}`} />
                <h5 className="card-subtitle mb-2 text-muted">Автор</h5>
                <input className="form-control" type="text" id={`book-author-${formId}`} />
                <h5 className="card-subtitle mb-2 text-muted">Описание</h5>
                <input className="form-control" type="text" id={`book-description-${formId}`} />
                <h5 className="card-subtitle mb-2 text-muted">Статус</h5>
                <p className="form-control" id={`book-status-${formId}`}>Доступно</p>
                <button className="btn btn-warning btn-sm" onclick={editBook}>Редактировать</button>
                <button className="btn btn-danger btn-sm" onclick={deleteBook}>Удалить</button>
                <button className="btn btn-secondary btn-sm" onclick={toggleStatus}>Изменить статус</button> */}
            </div>
        </div>
    )
}