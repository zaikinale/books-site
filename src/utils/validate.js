// Фнункции по валидации данных из Форм 

export function validateName(name) {
    if (typeof name !== 'string') return false;
    if (name.trim() === '') return false;
    if (name[0] !== name[0].toUpperCase()) return false;
    return true;
}
export function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

export function validateAge(age) {
    const num = Number(age);
    return Number.isInteger(num) && num >= 2 && num <= 150;
}

export function validatePassword(password) {
    if (typeof password !== 'string') return false;
    if (password.length < 4) return false;

    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);

    return hasLower && hasUpper && hasDigit;
}

export function validateConfirmPassword(password, confirmPassword) {
    return password === confirmPassword;
}