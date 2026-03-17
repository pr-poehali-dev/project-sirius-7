import type React from "react"
import { motion } from "framer-motion"
import {
  Inbox,
  CircleUser,
  Layers,
  FolderKanban,
  LayoutGrid,
  Users,
  Smartphone,
  Map,
  FileText,
  ChevronDown,
  ChevronRight,
  Search,
  Plus,
  Link2,
  MoreHorizontal,
  Sparkles,
  Settings,
  HelpCircle,
} from "lucide-react"

export function DashboardMockup() {
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.5,
      },
    },
  }

  const panelVariants = {
    hidden: {
      opacity: 0,
      x: 100,
      y: -80,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.22, 1, 0.36, 1],
      },
    },
  }

  return (
    <motion.div
      className="w-full h-full flex overflow-hidden"
      style={{ backgroundColor: "#070f24" }}
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Sidebar */}
      <motion.div
        className="w-[220px] h-full border-r flex flex-col shrink-0"
        style={{ backgroundColor: "#070f24", borderColor: "#0d2044" }}
        variants={panelVariants}
      >
        {/* Logo */}
        <div className="p-3 border-b" style={{ borderColor: "#0d2044" }}>
          <div className="flex items-center gap-2 px-2 py-1.5">
            <Search className="w-5 h-5 text-blue-400" />
            <span className="text-white font-semibold text-sm">OSINT</span>
            <ChevronDown className="w-3.5 h-3.5 text-blue-600/50 ml-auto" />
          </div>
        </div>

        {/* Search */}
        <div className="p-3">
          <div className="flex items-center gap-2 px-2.5 py-1.5 rounded-md text-blue-400/50 text-xs" style={{ backgroundColor: "#0d1f3c" }}>
            <Search className="w-3.5 h-3.5" />
            <span>Поиск...</span>
            <span className="ml-auto text-[10px] px-1.5 py-0.5 rounded" style={{ backgroundColor: "#0d2044" }}>⌘K</span>
          </div>
        </div>

        {/* Main nav */}
        <div className="px-3 space-y-0.5">
          <NavItem icon={Inbox} label="Задания" badge={3} active />
          <NavItem icon={CircleUser} label="Мой прогресс" />
        </div>

        {/* Workspace section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-blue-500/40 font-medium uppercase tracking-wider flex items-center gap-1">
            Категории
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Layers} label="Геолокация" hasSubmenu />
            <NavItem icon={FolderKanban} label="Личности" hasSubmenu />
            <NavItem icon={LayoutGrid} label="Компании" hasSubmenu />
            <NavItem icon={Users} label="Сети" hasSubmenu />
          </div>
        </div>

        {/* Favorites section */}
        <div className="mt-5 px-3">
          <div className="px-2 py-1 text-[10px] text-blue-500/40 font-medium uppercase tracking-wider flex items-center gap-1">
            Избранное
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Map} label="Задание #42" color="text-blue-400" />
            <NavItem icon={FileText} label="CTF Ноябрь 2025" color="text-blue-300" />
            <NavItem icon={Smartphone} label="Мобильный OSINT" color="text-blue-500" />
          </div>
        </div>

        {/* Teams section */}
        <div className="mt-5 px-3 flex-1">
          <div className="px-2 py-1 text-[10px] text-blue-500/40 font-medium uppercase tracking-wider flex items-center gap-1">
            Инструменты
          </div>
          <div className="space-y-0.5 mt-1">
            <NavItem icon={Sparkles} label="ИИ-анализ" hasSubmenu />
            <NavItem icon={Settings} label="Настройки" hasSubmenu />
          </div>
        </div>

        {/* Bottom */}
        <div className="p-3 border-t" style={{ borderColor: "#0d2044" }}>
          <NavItem icon={HelpCircle} label="Помощь" />
        </div>
      </motion.div>

      {/* Inbox List */}
      <motion.div
        className="w-[320px] h-full border-r flex flex-col shrink-0"
        style={{ backgroundColor: "#060d1e", borderColor: "#0d2044" }}
        variants={panelVariants}
      >
        <div className="px-4 py-3 border-b flex items-center justify-between" style={{ borderColor: "#0d2044" }}>
          <h3 className="text-white font-semibold text-sm">Задания</h3>
          <div className="flex items-center gap-2">
            <button className="text-zinc-500 hover:text-white transition-colors">
              <Plus className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto scrollbar-hide">
          <InboxItem
            id="OSN-042"
            title="Найди человека по фото"
            subtitle="Новое задание назначено вам"
            time="2ч"
            avatar="https://i.pravatar.cc/32?img=1"
            status="in-progress"
            active
          />
          <InboxItem
            id="CTF"
            title="CTF Ноябрь 2025"
            subtitle="Турнир начинается через 3 дня"
            time="1д"
            avatar="https://i.pravatar.cc/32?img=2"
            status="todo"
            isProject
          />
          <InboxItem
            id="OSN-039"
            title="Геолокация по тени"
            subtitle="Дедлайн истекает"
            time="2д"
            avatar="https://i.pravatar.cc/32?img=3"
            status="bug"
          />
          <InboxItem
            id="OSN-051"
            title="Анализ метаданных файла"
            subtitle="alex упомянул вас"
            time="4ч"
            avatar="https://i.pravatar.cc/32?img=4"
            status="todo"
          />
          <InboxItem
            id="OSN-033"
            title="Поиск по утечкам данных"
            subtitle="Подсказка добавлена"
            time="1н"
            avatar="https://i.pravatar.cc/32?img=5"
            status="bug"
          />
          <InboxItem
            title="Разведка по компании"
            subtitle="Добавлено в избранное"
            avatar="https://i.pravatar.cc/32?img=6"
            status="done"
            isProject
          />
          <InboxItem
            id="OSN-028"
            title="Идентификация локации"
            subtitle="Решение принято"
            time="1н"
            avatar="https://i.pravatar.cc/32?img=7"
            status="done"
          />
          <InboxItem
            title="Ночной CTF: Соцсети"
            subtitle="Новый раунд от организаторов"
            avatar="https://i.pravatar.cc/32?img=8"
            status="todo"
            isProject
          />
        </div>
      </motion.div>

      {/* Detail Panel */}
      <motion.div className="flex-1 h-full flex flex-col overflow-hidden" style={{ backgroundColor: "#050d1f" }} variants={panelVariants}>
        {/* Header breadcrumb */}
        <div className="px-5 py-3 border-b flex items-center justify-between shrink-0" style={{ borderColor: "#0d2044" }}>
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-blue-400/40">Геолокация</span>
            <span className="text-blue-600/30">›</span>
            <span className="text-blue-400">Продвинутый уровень</span>
            <span className="text-blue-600/30">›</span>
            <span className="text-blue-200">OSN-042</span>
          </div>
          <MoreHorizontal className="w-4 h-4 text-blue-500/40" />
        </div>

        {/* Content */}
        <div className="flex-1 p-5 overflow-auto scrollbar-hide">
          <h2 className="text-white text-xl font-semibold mb-5">Найди человека по фото</h2>

          {/* Code block */}
          <div className="rounded-lg p-4 text-[11px] font-mono mb-5 border" style={{ backgroundColor: "#060d1e", borderColor: "#0d2044" }}>
            <div className="space-y-2">
              <div>
                <span className="text-blue-400/50">Задание.</span>
                <span className="text-blue-300"> Используй обратный поиск изображений </span>
                <span className="text-blue-400/70">для идентификации.</span>
              </div>
              <div className="mt-3 text-blue-600/40">
                # Шаги: Google Images → Yandex → TinEye
              </div>
              <div>
                <span className="text-cyan-400/70">exiftool </span>
                <span className="text-blue-300">photo.jpg</span>
                <span className="text-blue-400/50"> | grep -i </span>
                <span className="text-blue-200">"GPS"</span>
              </div>
              <div>
                <span className="text-blue-400/50">lat: </span>
                <span className="text-cyan-300">55.7558</span>
                <span className="text-blue-400/50">, lon: </span>
                <span className="text-cyan-300">37.6173</span>
              </div>
              <div className="mt-3 text-blue-400/40">
                Результат: координаты найдены →
                <span className="text-blue-300"> Москва, Красная площадь</span>
              </div>
            </div>
          </div>

          {/* Meta actions */}
          <div className="space-y-2 text-sm mb-5">
            <div className="flex items-center gap-2 text-blue-400/40 hover:text-blue-300 cursor-pointer transition-colors">
              <Plus className="w-4 h-4" />
              <span>Добавить улику</span>
            </div>
            <div className="flex items-center gap-2 text-blue-400/40 hover:text-blue-300 cursor-pointer transition-colors">
              <Link2 className="w-4 h-4" />
              <span>Источники</span>
            </div>
          </div>

          {/* PR reference */}
          <div className="text-xs text-blue-500/40 mb-5">
            <span className="text-blue-600/40">#OSN-042</span>
            <span> Геолокация по тени и ракурсу съёмки</span>
          </div>

          {/* Activity */}
          <div className="pt-4 border-t" style={{ borderColor: "#0d2044" }}>
            <div className="text-xs text-blue-400/40 font-medium mb-3 uppercase tracking-wider">Активность</div>
            <div className="space-y-3">
              <ActivityItem
                avatar="https://i.pravatar.cc/24?img=1"
                name="alex"
                action="начал задание"
                from="Очередь"
                to="В работе"
                time="2 часа назад"
              />
              <ActivityItem
                avatar="https://i.pravatar.cc/24?img=2"
                name="marina"
                action="добавила подсказку"
                from="к заданию"
                time="1 час назад"
              />
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function NavItem({
  icon: Icon,
  label,
  badge,
  active,
  hasSubmenu,
  color,
}: {
  icon: React.ElementType
  label: string
  badge?: number
  active?: boolean
  hasSubmenu?: boolean
  color?: string
}) {
  return (
    <div
      className={`flex items-center gap-2 px-2 py-1.5 rounded-md cursor-pointer transition-colors ${
        active ? "text-white" : "text-blue-300/40 hover:text-blue-200"
      }`}
      style={active ? { backgroundColor: "#0d2044" } : {}}
    >
      <Icon className={`w-4 h-4 ${color || ""}`} />
      <span className="flex-1 text-xs">{label}</span>
      {badge && (
        <span className="bg-blue-600/80 text-white text-[10px] min-w-[18px] h-[18px] flex items-center justify-center rounded-full font-medium px-1">
          {badge}
        </span>
      )}
      {hasSubmenu && <ChevronRight className="w-3 h-3 text-blue-600/30" />}
    </div>
  )
}

function InboxItem({
  id,
  title,
  subtitle,
  time,
  avatar,
  status,
  isProject,
  active,
}: {
  id?: string
  title: string
  subtitle?: string
  time?: string
  avatar: string
  status: string
  isProject?: boolean
  active?: boolean
}) {
  const statusColors: Record<string, string> = {
    "in-progress": "bg-yellow-500",
    todo: "bg-zinc-600",
    bug: "bg-red-500",
    done: "bg-emerald-500",
  }

  return (
    <div
      className="px-4 py-3 border-b cursor-pointer transition-colors"
      style={{
        borderColor: "#0d2044",
        backgroundColor: active ? "rgba(13,32,68,0.5)" : "transparent",
      }}
    >
      <div className="flex items-start gap-3">
        <img src={avatar || "/placeholder.svg"} alt="" className="w-8 h-8 rounded-full shrink-0 mt-0.5" />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            {id && <span className="text-blue-400/40 text-[10px]">{id}</span>}
            {isProject && <span className="text-blue-400 text-[10px]">Турнир</span>}
            <div className={`w-2 h-2 rounded-full ${statusColors[status] || "bg-blue-600"}`} />
          </div>
          <p className="text-white text-xs truncate leading-tight">{title}</p>
          {subtitle && <p className="text-blue-400/40 text-[10px] mt-0.5 truncate">{subtitle}</p>}
        </div>
        {time && <span className="text-blue-500/30 text-[10px] shrink-0">{time}</span>}
      </div>
    </div>
  )
}

function ActivityItem({
  avatar,
  name,
  action,
  from,
  to,
  time,
}: {
  avatar: string
  name: string
  action: string
  from: string
  to?: string
  time: string
}) {
  return (
    <div className="flex items-start gap-2">
      <img src={avatar || "/placeholder.svg"} alt="" className="w-5 h-5 rounded-full" />
      <div className="flex-1">
        <p className="text-blue-300/40 text-xs">
          <span className="text-white">{name}</span>
          <span className="text-blue-400/40"> {action} </span>
          <span className="text-blue-200/70">{from}</span>
          {to && (
            <>
              <span className="text-blue-400/40"> → </span>
              <span className="text-blue-200/70">{to}</span>
            </>
          )}
        </p>
        <p className="text-blue-500/30 text-[10px] mt-0.5">{time}</p>
      </div>
    </div>
  )
}