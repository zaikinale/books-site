import { useEffect } from "react"

export default function Notfound() {
  useEffect(() => {
    document.body.classList.add('error');

    return () => {
      document.body.classList.remove('error');
    };
  }, []);

  return (
    <div class="not-found-container">
      <h1>404</h1>
      <p>Запрашиваемый контент не найден.</p>
      <a href="index.html" class="btn btn-primary">Вернуться на главную</a>
    </div>
  )
}