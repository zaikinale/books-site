import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Denied() {
  const navigate = useNavigate();
  // Изменение стилей 
  useEffect(() => {
    document.body.classList.add('error');
    return () => {
      document.body.classList.remove('error');
    };
  }, []);

  // Навигация на Login page
  const onMain = () => {
    navigate('/')
  }

  return (
    <div className="denied-container">
      <h1>403</h1>
      <p>Доступ запрещен.</p>
      <a className="btn btn-primary" onClick={onMain}>Вернуться на главную</a>
    </div>
  )
}