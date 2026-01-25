import { useEffect, useState } from "react";
import useNavigate from 'redt-router-dom'
import { useUserStore } from '../store/ProfileStore'
// Импортируем функции-запросы
import { BooksApi } from "../services/useBooksApi";

export default function SettingsFrom () {
    const navigate = useNavigate();
    const { role } = useUserStore();

    // Хранилище формы 
    const [formData, setFormData] = useState({});

    // Загрузка настроек чтения
    useEffect(() => {
        if (role !== 'admin' && role !== 'user') {
            navigate('/denied');
        }

        const fetchUserBooks = async () => {
            try {
                const resp = await BooksApi.getSettingsBookUser();
                if (resp.data?.code >= 200 && resp.data?.code < 300) {
                    setFormData(resp.data.settings || {});
                } else {
                    console.error('Ошибка загрузки настроек:', resp.message);
                    setFormData({});
                }
            } catch (error) {
                console.error('Сетевая ошибка:', error);
                setFormData({});
            }
        };
        fetchUserBooks();
    }, [role, navigate]);

    // Функция-обработчик на изменение в полях и отправка на сервер запроса
    const updateStyles = async (field, value) => {
        const newFormData = {
            ...formData,
            [field]: value
        };
    
        setFormData(newFormData);
        try {
            const response = await BooksApi.updateSettingsBookUser(newFormData);
            
            if (response.data?.code >= 200 && response.data?.code < 300) {
                console.log('Настройки успешно обновлены');
            } else {
                console.error('Ошибка обновления:', response.data?.message);
            }
        } catch (error) {
            console.error('Сетевая ошибка при сохранении:', error);
        }
    };

    return (
        <form className="mb-3">
            <div className="row">
                <div className="col-md-3">
                    <label for="fontFamily" className="form-label">Шрифт</label>
                    <select className="form-select" id="fontFamily" onchange={(e) => updateStyles('font_family', e.target.value)}>
                        <option value="Arial, sans-serif">Arial</option>
                        <option value="Times New Roman, serif">Times New Roman</option>
                        <option value="Courier New, monospace">Courier New</option>
                        <option value="Georgia, serif">Georgia</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="fontSize" className="form-label">Размер текста</label>
                    <select className="form-select" id="fontSize" onchange={(e) => updateStyles('font_size', e.target.value)}>
                        <option value="12px">12px</option>
                        <option value="14px">14px</option>
                        <option value="16px">16px</option>
                        <option value="18px">18px</option>
                        <option value="20px">20px</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="backgroundColor" className="form-label">Цвет фона</label>
                    <select className="form-select" id="backgroundColor" onchange={(e) => updateStyles('background_color', e.target.value)}>
                        <option value="#ffffff">Белый</option>
                        <option value="#f8f9fa">Светло-серый</option>
                        <option value="#e9ecef">Серый</option>
                        <option value="#343a40">Темный</option>
                        <option value="#fff3cd">Светло-желтый</option>
                    </select>
                </div>
                <div className="col-md-3">
                    <label for="textColor" className="form-label">Цвет текста</label>
                    <select className="form-select" id="textColor" onchange={(e) => updateStyles('text_color', e.target.value)}>
                        <option value="#000000">Черный</option>
                        <option value="#343a40">Темно-серый</option>
                        <option value="#ffffff">Белый</option>
                        <option value="#007bff">Синий</option>
                        <option value="#dc3545">Красный</option>
                    </select>
                </div>
            </div>
        </form>
    )
}