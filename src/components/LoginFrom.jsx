import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Импортируем функции-запросы
import { AuthApi } from '../services/useAuthApi'
// Импортируем функции валидации
import { validateEmail, validatePassword } from "../utils/validate";
import { useUserStore } from '../store/ProfileStore'

export default function LoginForm() {
    const navigate = useNavigate();

    // Хранилище ошибок 
    const [errors, setErrors] = useState({});
    // Хранилище данных из формы
    const [formData, setFormData] = useState({ email: '', password: '' });

    // Функции-обработчики изменений в полях и сохранении в хранилище
    async function handleChange (e) {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    // Отправка формы и запрос на сервер
    async function handleSubmit (e) {
        e.preventDefault();

        const emailError = validateEmail(formData.email);
        const passwordError = validatePassword(formData.password);

        const newErrors = {};
        if (emailError !== true) newErrors.email = emailError;
        if (passwordError !== true) newErrors.password = passwordError;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            return;
        }

        const resp = await AuthApi.login(formData.email, formData.password)
        if (resp.data.code < 300 && resp.data.code > 199) {
            localStorage.setItem('token', resp.data.token)
            useUserStore.setState({
                name: resp.data.user.name,
                email: resp.data.user.email,
                role: resp.data.user.role
            });
            navigate('/profile')
        } else {
            throw new Error(resp.message)
        }
    };

    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                    type="email"
                    className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                />
                {errors.email && (
                    <div id="emailError" className="text-danger">{errors.email}</div>
                )}
            </div>

            <div className="mb-3">
                <label htmlFor="password" className="form-label">Пароль</label>
                <input
                    type="password"
                    className={`form-control ${errors.password ? 'is-invalid' : ''}`}
                    id="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                />
                {errors.password && (
                    <div id="passwordError" className="text-danger">{errors.password}</div>
                )}
            </div>

            <button type="submit" className="btn btn-primary w-100">Войти</button>
        </form>
    );
}