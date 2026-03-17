export function CTASection() {
  return (
    <section className="py-24 px-6" style={{ backgroundColor: "#050d1f" }}>
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <h2 className="text-3xl md:text-4xl lg:text-[42px] font-medium text-white tracking-tight">
            Раскрой своё первое дело уже сегодня.
          </h2>
          <div className="flex items-center gap-3">
            <button className="px-5 py-2.5 border border-blue-800/60 text-blue-300 font-medium rounded-lg hover:bg-blue-900/30 transition-colors text-sm">
              Узнать больше
            </button>
            <button className="px-5 py-2.5 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-500 transition-colors text-sm">
              Начать задания
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}