// Валидация имени пользователя
export function validateName(name) {
    if (typeof name !== 'string') {
        return 'The name must be a string';
    }
    if (name.trim() === '') {
        return 'The name cannot be empty';
    }
    if (name[0] !== name[0].toUpperCase()) {
        return 'The first letter of the name must be uppercase';
    }
    return true;
}

// Валидация email
export function validateEmail(email) {
    if (typeof email !== 'string') {
        return 'Email must be a string';
    }
    if (email.trim() === '') {
        return 'Email cannot be empty';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email.trim())) {
        return 'Invalid email format';
    }
    return true;
}

// Валидация возраста
    export function validateAge(age) {
    const num = Number(age);
    if (isNaN(num)) {
        return 'Age must be a number';
    }
    if (!Number.isInteger(num)) {
        return 'Age must be an integer';
    }
    if (num < 2 || num > 150) {
        return 'Age must be between 2 and 150';
    }
    return true;
}
// Валидация пароля
export function validatePassword(password) {
    if (typeof password !== 'string') {
        return 'Password must be a string';
    }
    if (password.length < 4) {
        return 'Password must be at least 4 characters long';
    }
    const hasLower = /[a-z]/.test(password);
    const hasUpper = /[A-Z]/.test(password);
    const hasDigit = /\d/.test(password);
    if (!hasLower) {
        return 'Password must contain at least one lowercase letter';
    }
    if (!hasUpper) {
        return 'Password must contain at least one uppercase letter';
    }
    if (!hasDigit) {
        return 'Password must contain at least one digit';
    }
    return true;
}
// Валидация подтверждения пароля
export function validateConfirmPassword(password, confirmPassword) {
    if (password !== confirmPassword) {
        return 'Passwords do not match';
    }
    return true;
}

// Валидация названия книги
export function validateNameBook(title) {
    if (typeof title !== 'string') {
        return 'Book title must be a string';
    }
    if (title.trim() === '') {
        return 'Book title cannot be empty';
    }
    if (title.length > 64) {
        return 'Book title must not exceed 64 characters';
    }
    return true;
}
// Валидация автора книги
export function validateAuthorBook(author) {
    if (typeof author !== 'string') {
        return 'Author must be a string';
    }
    if (author.trim() === '') {
        return 'Author cannot be empty';
    }
    return true;
}// Валидация описания книги
export function validateDescBook(desc) {
    if (typeof desc !== 'string') {
        return 'Description must be a string';
    }
    if (desc.trim() === '') {
        return 'Description cannot be empty';
    }
    return true;
}