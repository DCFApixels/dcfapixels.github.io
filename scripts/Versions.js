// Функция для получения значения параметра version из URL
function getVersionFromQuery() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('version');
}

// Устанавливаем класс на body в зависимости от параметра
function setVersionClass(version) {
    // Удаляем все классы, начинающиеся с version_ (чтобы не было конфликтов)
    document.body.className = document.body.className
        .split(' ')
        .filter(cls => !cls.startsWith('version_'))
        .join(' ');

    // Если версия не указана или недопустима, используем 'main' по умолчанию
    const validVersions = ['main', 'portfolio'];
    if (!version || !validVersions.includes(version)) {
        version = 'main';
    }

    // Добавляем класс version_<имя>
    document.body.classList.add(`version_${version}`);
}

// При загрузке страницы
window.addEventListener('load', () => {
    const version = getVersionFromQuery();
    setVersionClass(version);
});