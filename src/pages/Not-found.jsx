
{/*
body {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            background-color: #f8f9fa;
        }
        .not-found-container {
            text-align: center;
        }
        .not-found-container h1 {
            font-size: 4rem;
            color: #dc3545;
        }
        .not-found-container p {
            font-size: 1.5rem;
            color: #6c757d;
        }
        .not-found-container a {
            font-size: 1.2rem;
        }
*/}

export default function Notfound() {
  return (
    <div class="not-found-container">
      <h1>404</h1>
      <p>Запрашиваемый контент не найден.</p>
      <a href="index.html" class="btn btn-primary">Вернуться на главную</a>
    </div>
  )
}