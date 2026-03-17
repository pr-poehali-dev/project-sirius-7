import Icon from "@/components/ui/icon"

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-blue-900/40 bg-[#050d1f]/85 backdrop-blur-md">
      <div className="w-full flex justify-center px-6 py-4">
        <div className="w-full max-w-4xl flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Icon name="Search" className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold">OSINT Challenges</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#" className="text-sm text-blue-300/60 hover:text-white transition-colors">
              Задания
            </a>
            <a href="#" className="text-sm text-blue-300/60 hover:text-white transition-colors">
              Категории
            </a>
            <a href="#" className="text-sm text-blue-300/60 hover:text-white transition-colors">
              Рейтинг
            </a>
            <a href="#" className="text-sm text-blue-300/60 hover:text-white transition-colors">
              Сообщество
            </a>
            <a href="#" className="text-sm text-blue-300/60 hover:text-white transition-colors">
              О нас
            </a>
          </div>
          <div className="flex items-center gap-4">
            <a href="#" className="text-sm text-blue-300/60 hover:text-white transition-colors">
              Войти
            </a>
            <a
              href="#"
              className="text-sm text-white bg-blue-700 hover:bg-blue-600 px-3.5 py-1.5 rounded-md border border-blue-600 transition-colors"
            >
              Регистрация
            </a>
          </div>
        </div>
      </div>
    </nav>
  )
}