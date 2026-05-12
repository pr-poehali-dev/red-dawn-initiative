import { Timeline } from "@/components/ui/timeline"

export function ApplicationsTimeline() {
  const data = [
    {
      title: "Нефтегазовая промышленность",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Опоры трубопроводов для нефтепроводов, газопроводов и технологических трубопроводов НПЗ.
            Работаем с ведущими предприятиями отрасли, обеспечиваем соответствие требованиям проектной документации.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Неподвижные и скользящие опоры для магистральных трубопроводов
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Пружинные блоки для компенсации температурных расширений
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Поставки партиями от единицы до тысяч штук
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Энергетика и теплоснабжение",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Опоры и подвески для тепловых и атомных электростанций, котельных и тепловых сетей.
            Изготавливаем конструкции по нормам и требованиям Ростехнадзора.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Опоры паропроводов и трубопроводов высокого давления
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Подвесные конструкции для тепловых сетей
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Кронштейны и хомуты для котельного оборудования
            </div>
          </div>
        </div>
      ),
    },
    {
      title: "Судостроение",
      content: (
        <div>
          <p className="text-white text-sm md:text-base font-normal mb-6 leading-relaxed">
            Судовые подвески и опоры для трубопроводов морских и речных судов.
            Поставляем на верфи Санкт-Петербурга и других регионов России.
          </p>
          <div className="space-y-3">
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Судовые подвески по стандартам регистра
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Вибростойкие опоры для двигательных отсеков
            </div>
            <div className="flex items-center gap-3 text-red-400 text-sm">
              <div className="w-2 h-2 bg-red-500 rounded-full"></div>
              Индивидуальные решения по чертежам заказчика
            </div>
          </div>
        </div>
      ),
    },
  ]

  return (
    <section id="applications" className="py-20 bg-black">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-white mb-6">Области применения</h2>
          <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
            Опоры трубопроводов Невского завода применяются в нефтегазовой отрасли, энергетике,
            судостроении и на промышленных объектах по всей России.
          </p>
        </div>

        <div className="relative">
          <Timeline data={data} />
        </div>
      </div>
    </section>
  )
}