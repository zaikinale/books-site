import { useEffect } from "react"

export default function Denied() {
  useEffect(() => {
    document.body.classList.add('error');

    return () => {
      document.body.classList.remove('error');
    };
  }, []);

  return (
    <div className="denied-container">
      <h1>403</h1>
      <p>Доступ запрещен.</p>
      <a href="index.html" className="btn btn-primary">Вернуться на главную</a>
    </div>
  )
}