import { useState } from "react";
import { useNavigate } from "react-router-dom";
// Импортируем функции валидации
import {
    validateName,
    validateAge,
    validateEmail,
    validatePassword,
    validateConfirmPassword
} from "../utils/validate";
// Импортируем функции-запросы
import { AuthApi } from "../services/useAuthApi";

export default function RegistrationForm() {
    const navigate = useNavigate();

    
    const [errors, setErrors] = useState({});
    // Хранилище данных из формы
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        age: '',
        gender: '',
        password: '',
        confirmPassword: '',
        agree: false
    });

    // Функции-обработчики изменений в полях и сохранении в хранилище
    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        const newValue = type === 'checkbox' ? checked : value;

        setFormData((prev) => ({
            ...prev,
            [name]: newValue
        }));

        if (errors[name]) {
            setErrors((prev) => ({ ...prev, [name]: '' }));
        }
    };

    const handleGenderChange = (gender) => {
        setFormData((prev) => ({ ...prev, gender }));
        if (errors.gender) {
            setErrors((prev) => ({ ...prev, gender: '' }));
        }
    };

    // Отправка формы и запрос на сервер
    const handleSubmit = async (e) => {
        e.preventDefault();

        const nameError = validateName(formData.name);
        const emailError = validateEmail(formData.email);
        const ageError = validateAge(formData.age);
        const passwordError = validatePassword(formData.password);
        const confirmPasswordError = validateConfirmPassword(formData.password, formData.confirmPassword);

        let genderError = null;
        if (!formData.gender) {
            genderError = "Gender must be specified";
        }

        let agreeError = null;
        if (!formData.agree) {
            agreeError = "You must agree to the processing of personal data";
        }

        const newErrors = {};
        if (nameError !== true) newErrors.name = nameError;
        if (emailError !== true) newErrors.email = emailError;
        if (ageError !== true) newErrors.age = ageError;
        if (passwordError !== true) newErrors.password = passwordError;
        if (confirmPasswordError !== true) newErrors.confirmPassword = confirmPasswordError;
        if (genderError) newErrors.gender = genderError;
        if (agreeError) newErrors.agree = agreeError;

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            console.log('Ошибка валидации данных:', newErrors);
            return;
        }

        console.log('Отправленные данные:',formData.name, formData.email, formData.age, formData.password);
        try {
            const resp = await AuthApi.registration(formData.name, formData.email, formData.age, formData.password);
            if (resp.data?.code >= 200 && resp.data?.code < 300) {
                navigate('/');
            }
        } catch (err) {
            console.error('Registration error:', err);
        }
    };

    return (
        <form id="Form" onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="name" className="form-label">Имя</label>
                <input
                    type="text"
                    className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
                {errors.name && <div className="text-danger">{errors.name}</div>}
            </div>

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
                {errors.email && <div className="text-danger">{errors.email}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="age" className="form-label">Возраст</label>
                <input
                    type="number"
                    className={`form-control ${errors.age ? 'is-invalid' : ''}`}
                    id="age"
                    name="age"
                    min="0"
                    value={formData.age}
                    onChange={handleChange}
                />
                {errors.age && <div className="text-danger">{errors.age}</div>}
            </div>

            <div className="mb-3">
                <label className="form-label">Пол</label>
                <div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="male"
                            checked={formData.gender === 'male'}
                            onChange={() => handleGenderChange('male')}
                        />
                        <label className="form-check-label" htmlFor="male">Мужской</label>
                    </div>
                    <div className="form-check form-check-inline">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="gender"
                            id="female"
                            checked={formData.gender === 'female'}
                            onChange={() => handleGenderChange('female')}
                        />
                        <label className="form-check-label" htmlFor="female">Женский</label>
                    </div>
                </div>
                {errors.gender && <div className="text-danger">{errors.gender}</div>}
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
                {errors.password && <div className="text-danger">{errors.password}</div>}
            </div>

            <div className="mb-3">
                <label htmlFor="confirmPassword" className="form-label">Повторите пароль</label>
                <input
                    type="password"
                    className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
                    id="confirmPassword"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                />
                {errors.confirmPassword && <div className="text-danger">{errors.confirmPassword}</div>}
            </div>

            <div className="mb-3 form-check">
                <input
                    type="checkbox"
                    className="form-check-input"
                    id="agree"
                    name="agree"
                    checked={formData.agree}
                    onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="agree">
                    Я согласен на обработку персональных данных
                </label>
                {errors.agree && <div className="text-danger">{errors.agree}</div>}
            </div>

            <button type="submit" className="btn btn-primary w-100">
                Зарегистрироваться
            </button>
        </form>
    );
}