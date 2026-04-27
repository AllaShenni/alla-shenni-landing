const problems = [
  {
    title: "Нашли —\nчерез месяц пропал",
    body: "Вложили время на онбординг, объяснили процессы, выстроили работу — и специалист ушёл. И снова поиски. Снова с нуля...",
    tag: "нестабильность",
  },
  {
    title: "Объясняешь по\nвторому кругу",
    body: "Говоришь одно — делают другое. Нужно постоянно проверять, исправлять, объяснять заново. Как будто ещё один студент...",
    tag: "некомпетентность",
  },
  {
    title: "Делегировал —\nпришлось переделывать",
    body: "Отдал задачу, отвлёкся на стратегию — вернулся к сломанному вебинару и расстроенным студентам. Опять всё сам...",
    tag: "нельзя доверять",
  },
]

export function Problem() {
  return (
    <section className="py-12 md:py-16">
      <div className="container mx-auto px-6 max-w-6xl">
        {/* Header */}
        <div className="max-w-xl mb-10">
          <p className="text-sm text-primary tracking-[0.2em] uppercase font-medium mb-4">
            ВАМ ЭТО БЛИЗКО
          </p>
          <h2 className="font-cormorant text-4xl md:text-5xl font-light leading-tight text-foreground">
            Почему <em className="italic text-primary">хорошего специалиста</em>{" "}
            <em className="italic">так сложно найти...</em>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((p, i) => (
            <div
              key={i}
              className="group relative bg-card rounded-2xl p-8 border border-border hover:border-primary/40 transition-all duration-300 hover:shadow-sm"
            >
<div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                <div className="w-2 h-2 rounded-full bg-primary" />
              </div>
              <h3 className="font-cormorant text-2xl font-semibold text-foreground mb-3 leading-tight whitespace-pre-line">
                {p.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.body}</p>
              <span className="inline-block mt-6 text-[10px] tracking-widest uppercase text-primary/70 border border-primary/20 px-3 py-1 rounded-full">
                {p.tag}
              </span>
            </div>
          ))}
        </div>

        {/* Bridge */}
        <p className="mt-10 text-center font-cormorant text-2xl md:text-3xl font-light text-muted-foreground italic">
          Это решаемо — если рядом правильный человек.
        </p>
      </div>
    </section>
  )
}
