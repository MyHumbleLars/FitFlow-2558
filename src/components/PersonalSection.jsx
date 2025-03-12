import { motion } from 'framer-motion';

export default function PersonalSection() {
  return (
    <section id="about" className="bg-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-12 lg:mb-0"
          >
            <h2 className="text-3xl font-bold text-black mb-6">
              Het gezicht achter My Humble
            </h2>
            <div className="prose text-black space-y-4">
              <p className="text-lg">
                Mijn naam is Lars Keijzer en ik ben 22 jaar. De kracht van sport heeft mijn leven veranderd. Ik wil graag mijn eigen ervaring en kennis overbrengen op anderen.
              </p>
              <p className="text-lg">
                Bij mij ging de knop om in maart 2020. Ik ben begonnen met afvallen en verloor 35 kilo in een tijdsbestek van zo'n 8 maanden. In deze periode heb ik hard aan mezelf gewerkt en besloten om niet meer achter de feiten aan te lopen. Ik voel tegenwoordig een enorm verschil in mindset, zelfvertrouwen, discipline en doorzettingsvermogen.
              </p>
              <p className="text-lg">
                Een droom die kon uitkomen omdat ik was afgevallen, is mijn avontuur in Amerika. In de zomer van 2023 ben ik vertrokken naar Californië om deel uit te maken van een collegevoetbalteam. We reisden dwars door deze prachtige staat voor voetbalwedstrijden tegen andere colleges. Als ik niet was begonnen met een andere levensstijl, had ik never deze gave ervaring meegemaakt.
              </p>
              <p className="text-lg">
                Ben je gemotiveerd geraakt door mijn verhaal? Bekijk de verschillende doelen en zet die stok achter de deur! Samen bevrijden we jouw inner champion en begeleiden we jou om jouw doelen te behalen.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <img
              src="/lars-profile.jpg"
              alt="Lars Keijzer"
              className="rounded-lg shadow-xl"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}