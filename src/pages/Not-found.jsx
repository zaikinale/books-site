import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Notfound() {
  const navigate = useNavigate()
  useEffect(() => {
    document.body.classList.add('error');

    return () => {
      document.body.classList.remove('error');
    };
  }, []);


  const onMain = () => {
    navigate('/')
  }


  return (
    <div class="not-found-container">
      <h1>404</h1>
      <p>Запрашиваемый контент не найден.</p>
      <a class="btn btn-primary" onClick={onMain}>Вернуться на главную</a>
    </div>
  )
}