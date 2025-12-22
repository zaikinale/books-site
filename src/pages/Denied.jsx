
{/*
body {
  display: flex;
  justify - content: center;
  align - items: center;
  height: 100vh;
  background - color: #f8f9fa;
}
        .denied - container {
  text - align: center;
}
        .denied - container h1 {
  font - size: 4rem;
  color: #dc3545;
}
        .denied - container p {
  font - size: 1.5rem;
  color: #6c757d;
}
        .denied - container a {
  font - size: 1.2rem;
}
*/}

export default function Denied() {
  return (
    <div class="denied-container">
      <h1>403</h1>
      <p>Доступ запрещен.</p>
      <a href="index.html" class="btn btn-primary">Вернуться на главную</a>
    </div>
  )
}