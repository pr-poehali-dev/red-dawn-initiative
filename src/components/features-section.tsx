import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Собственное производство",
    description: "Полный цикл изготовления опор трубопроводов на заводе в Санкт-Петербурге — без посредников и лишних наценок.",
    icon: "brain",
    badge: "Завод",
  },
  {
    title: "ГОСТ и ОСТ стандарты",
    description: "Вся продукция изготавливается строго по ОСТ 36-146-88 и другим актуальным нормативам. Сертификаты качества прилагаются.",
    icon: "lock",
    badge: "Сертификат",
  },
  {
    title: "Широкий ассортимент",
    description: "Скользящие, неподвижные, пружинные, подвесные опоры и кронштейны. Любые типоразмеры в наличии и на заказ.",
    icon: "globe",
    badge: "Ассортимент",
  },
  {
    title: "Изготовление на заказ",
    description: "Нестандартные опорные конструкции по чертежам заказчика. Оперативные сроки и точное соответствие ТЗ.",
    icon: "zap",
    badge: "На заказ",
  },
  {
    title: "Судовые подвески",
    description: "Специализированные судовые подвески и опоры для морского и речного судостроения.",
    icon: "link",
    badge: "Судостроение",
  },
  {
    title: "Опт и розница",
    description: "Работаем с промышленными предприятиями, монтажными организациями и частными заказчиками. Постоянные клиенты — особые условия.",
    icon: "target",
    badge: "Оптовикам",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Почему выбирают нас</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Более 30 лет поставляем опоры трубопроводов промышленным предприятиям по всей России
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}