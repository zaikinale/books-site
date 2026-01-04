import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Login from './pages/Login.jsx';
import Admin from './pages/Admin.jsx';
import Catalog from './pages/Catalog.jsx';
import Denied from './pages/Denied.jsx';
import Notfound from './pages/Not-found.jsx';
import Profile from './pages/Profile.jsx';
import Read from './pages/Read.jsx';
import Registration from './pages/Registration.jsx';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/index.html' element={<Login />} />
        <Route path='/admin' element={<Admin />} />
        <Route path='/catalog' element={<Catalog />} />
        <Route path='/denied' element={<Denied />} />
        <Route path='/not-found' element={<Notfound />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/read' element={<Read />} />
        <Route path='/registration' element={<Registration />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
// Наведение базовой строктуры 20 минут
// Добавление зпросов всех 50 минут
// Добавлена валидация данных из форм 15 минут 
// Разобрал формы и карточки  по компонентам 25 минут
