import { useState } from "react";
import {  validateName, validateAge, validateEmail, validatePassword, validateConfirmPassword } from "../utils/validate";

export default function RegistrationForm () {
  const [formData, setFormData] = useState({ name: '', email: '', age: '', male: '', female: '', password: '', confirmPassword: '', agree: false });

  const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData(prevData => ({
          ...prevData,
          [name]: value
      }));
  };

  const handleSubmit = (e) => {
      e.preventDefault();
      if (validateEmail(formData.email) && validatePassword(formData.password) && validateName(formData.name && validateAge(formData.age && validateConfirmPassword(formData.password, formData.confirmPassword) && formData.agree == true && (formData.male === true || formData.famale === true) ))) {
          console.log('Ошибка валидации данных:', formData);
      }
      console.log('Отправленные данные:', formData);
  };
    

    return (
        <form id="Form" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label for="name" className="form-label">Имя</label>
          <input type="text" className="form-control" id="name" name="name" value={formData.name} onChange={handleChange} />
            <div id="nameError" className="text-danger"></div>
        </div>

        <div className="mb-3">
          <label for="email" className="form-label">Email</label>
          <input type="email" className="form-control" id="email" name="email" value={formData.email} onChange={handleChange} />
            <div id="emailError" className="text-danger"></div>
        </div>

        <div className="mb-3">
          <label for="age" className="form-label">Возраст</label>
          <input type="number" className="form-control" id="age" name="age" min="0" value={formData.age} onChange={handleChange} />
            <div id="ageError" className="text-danger"></div>
        </div>

        <div className="mb-3">
          <label className="form-label">Пол</label>
          <div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="male" value={formData.male} onChange={handleChange} />
                <label className="form-check-label" for="male">Мужской</label>
            </div>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="radio" name="gender" id="female" value={formData.female} onChange={handleChange}  />
                <label className="form-check-label" for="female">Женский</label>
            </div>
          </div>
          <div id="genderError" className="text-danger"></div>
        </div>

        <div className="mb-3">
          <label for="password" className="form-label">Пароль</label>
          <input type="password" className="form-control" id="password" name="password" value={formData.password} onChange={handleChange}   />
            <div id="passwordError" className="text-danger"></div>
        </div>

        <div className="mb-3">
          <label for="confirmPassword" className="form-label">Повторите пароль</label>
          <input type="password" className="form-control" id="confirmPassword" name="confirmPassword" value={formData.confirmPassword} onChange={handleChange}  />
            <div id="confirmPasswordError" className="text-danger"></div>
        </div>

        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="agree" name="agree" value={formData.agree} onChange={handleChange}  />
            <label className="form-check-label" for="agree">Я согласен на обработку персональных данных</label>
            <div id="agreeError" className="text-danger"></div>
        </div>

        <button type="submit" className="btn btn-primary w-100">Зарегистрироваться</button>
      </form>
    )
}