import { useState } from "react";
import { validateEmail, validatePassword } from "../utils/validate";

export default function LoginFrom () {
    const [formData, setFormData] = useState({ email: '', password: '' });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateEmail(formData.email) && validatePassword(formData.password)) {
            console.log('Ошибка валидации данных:', formData);
        }
        console.log('Отправленные данные:', formData);
    };

    return (
        <form id="loginForm" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label for="email" className="form-label">Email</label>
                <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
                <div id="emailError" className="text-danger"></div>
            </div>
            <div className="mb-3">
                <label for="password" className="form-label">Пароль</label>
                <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange} />
                <div id="passwordError" className="text-danger"></div>
            </div>
            <button type="submit" className="btn btn-primary w-100">Войти</button>
        </form>
    )
}