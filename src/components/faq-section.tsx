import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Какие стандарты используются при производстве опор трубопроводов?",
      answer:
        "Мы производим опоры по ОСТ 36-146-88, ОСТ 36-94-83, ГОСТ 14911-82 и другим актуальным нормативным документам. На все изделия предоставляются сертификаты качества и паспорта.",
    },
    {
      question: "Как быстро вы изготавливаете продукцию на заказ?",
      answer:
        "Стандартные позиции из наличия — отгрузка в течение 1–3 рабочих дней. Изготовление по чертежам заказчика — от 5 до 15 рабочих дней в зависимости от сложности и объёма партии.",
    },
    {
      question: "Работаете ли вы с небольшими заказами?",
      answer:
        "Да, принимаем заказы от 1 штуки. Розничные и оптовые покупатели работают на одинаково комфортных условиях. Постоянным клиентам предоставляем скидки.",
    },
    {
      question: "Можете ли вы изготовить опору по нашему чертежу?",
      answer:
        "Да, изготовление нестандартных опорных конструкций по чертежам заказчика — одно из наших ключевых направлений. Пришлите чертёж или эскиз — рассчитаем стоимость и сроки.",
    },
    {
      question: "Доставляете ли вы продукцию в регионы?",
      answer:
        "Да, доставляем по всей России транспортными компаниями по выбору заказчика: ПЭК, Деловые Линии, СДЭК и другими. Самовывоз — со склада в Санкт-Петербурге.",
    },
    {
      question: "Есть ли у вас продукция в наличии?",
      answer:
        "Широкий ассортимент стандартных опор трубопроводов всегда в наличии на нашем складе в Санкт-Петербурге. Уточняйте наличие конкретных позиций по телефону или электронной почте.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Ответы на популярные вопросы о продукции, сроках изготовления и условиях поставки.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}