import { motion } from 'framer-motion';

const trainingen = [
  {
    title: "1-op-1 Personal Training",
    description: "Persoonlijke begeleiding op maat, waarbij we samen werken aan jouw specifieke doelen.",
    price: "€60 per sessie",
    features: [
      "Volledig persoonlijk trainingsschema",
      "Voedingsadvies inbegrepen",
      "Flexibele planning",
      "Direct resultaat door persoonlijke aandacht"
    ]
  },
  {
    title: "Duo Training",
    description: "Train samen met een vriend(in) en motiveer elkaar om je doelen te bereiken.",
    price: "€40 p.p. per sessie",
    features: [
      "Aangepast programma voor twee personen",
      "Voordelig tarief",
      "Samen sporten is leuker",
      "Flexibele planning voor beide deelnemers"
    ]
  },
  {
    title: "Small Group Training",
    description: "Train in een kleine groep van maximaal 4 personen met persoonlijke aandacht.",
    price: "€25 p.p. per sessie",
    features: [
      "Groepsmotivatie",
      "Betaalbare optie",
      "Sociale workout ervaring",
      "Vaste trainingsmomenten"
    ]
  }
];

export default function Trainingen() {
  return (
    <div className="pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl font-bold text-humble-dark mb-4">Trainingen</h1>
          <p className="text-xl text-humble-text">
            Ontdek de verschillende trainingsmogelijkheden die het beste bij jou passen
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trainingen.map((training, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold text-humble-dark mb-2">{training.title}</h3>
              <p className="text-humble-text mb-4">{training.description}</p>
              <p className="text-xl font-semibold text-humble-primary mb-4">{training.price}</p>
              <ul className="space-y-2">
                {training.features.map((feature, i) => (
                  <li key={i} className="flex items-center text-humble-text">
                    <span className="w-2 h-2 bg-humble-primary rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full mt-6 bg-humble-primary text-white py-2 rounded-full hover:bg-humble-accent transition-colors">
                Plan een intake
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}