export function Footer() {
  const footerLinks = {
    "Задания": ["Геолокация", "Личности", "Компании", "Тёмный веб", "Изображения", "Метаданные", "Новичкам"],
    "Платформа": ["Тарифы", "CTF-турниры", "API", "Документация", "Рейтинг", "Достижения", "Мобильная версия"],
    "Компания": ["О нас", "Команда", "Блог", "Пресса", "Карьера", "Партнёрство", "Бренд"],
    "Ресурсы": ["Методики OSINT", "Инструменты", "Глоссарий", "Сообщить об ошибке", "Конфиденциальность", "Условия", "Статус"],
    "Связаться": ["Контакты", "Discord", "X (Twitter)", "Telegram", "GitHub"],
  }

  return (
    <footer className="border-t border-blue-900/30 py-16 px-6" style={{ backgroundColor: "#050d1f" }}>
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-6 gap-8">
          {/* Logo */}
          <div className="col-span-2 md:col-span-1">
            <svg width="20" height="20" viewBox="0 0 100 100" fill="none" className="text-blue-400">
              <circle cx="50" cy="50" r="40" stroke="currentColor" strokeWidth="8" fill="none" />
              <circle cx="50" cy="50" r="10" fill="currentColor" />
              <line x1="50" y1="10" x2="50" y2="30" stroke="currentColor" strokeWidth="6" />
              <line x1="50" y1="70" x2="50" y2="90" stroke="currentColor" strokeWidth="6" />
              <line x1="10" y1="50" x2="30" y2="50" stroke="currentColor" strokeWidth="6" />
              <line x1="70" y1="50" x2="90" y2="50" stroke="currentColor" strokeWidth="6" />
            </svg>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h3 className="text-blue-200/80 font-medium text-sm mb-4">{category}</h3>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link}>
                    <a href="#" className="text-blue-400/40 hover:text-blue-300/70 transition-colors text-sm">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  )
}