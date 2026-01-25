export default function BookCard ({ id, title, author, description, link}) {
    return (
        <div className="card book-card">
            <div className="card-body">
                <h5 className="card-title">{title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{author}</h6>
                <p className="card-text">{description}</p>
                <a className="btn btn-primary" onClick={() => link(id)}>Читать</a>
            </div>
        </div>
    )
}