import { useEffect } from 'react';
import { useUserStore } from '../store/ProfileStore';
import { AuthApi } from "../services/useAuthApi";
import { useNavigate } from "react-router-dom";

export default function Logout () {
    const navigate = useNavigate();
    const { role } = useUserStore();

    // Проверка на роль пользователя
    useEffect(() => {
        if (role !== 'admin' && role !== 'user') {
            navigate('/denied');
        }
    }, [role, navigate]);

    // Запрос на выход из профиля
    useEffect(() => {
        // Проверка на роль пользователя
        if (role !== 'admin' && role !== 'user') {
            return;
        }
    
        const fetchUserBooks = async () => {
            try {
                const resp = await AuthApi.logout();
                if (resp.data?.code < 200 && resp.data?.code > 300) {
                    console.error('Ошибка выхода из профиля:', resp.message);
                }
            } catch (error) {
                console.error('Сетевая ошибка:', error);
            }
        };
    
        fetchUserBooks();
    }, [role]);

    return (
        <h5>Вы вышли из профиля</h5>
    )
}