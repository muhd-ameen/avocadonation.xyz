const paragraphs = [
  'avocado nation started as a joke.',
  'i changed my bio one day to:',
  { text: '"mayor of avocado nation 🥑"', emphasis: true },
  { text: 'no roadmap.\nno whitepaper.\nno master plan.', lines: true },
  'just a weird internet line.',
  'but the internet has a funny habit.',
  'sometimes jokes become real things.',
  'bitcoin started weird.',
  'startups started weird.',
  'online communities started weird.',
  'so maybe avocado nation stays a meme.',
  'or maybe it becomes a small corner of the internet where people who like building weird things hang out.',
  "either way i'm having fun building.",
  { text: "if you're reading this, welcome.", emphasis: true },
]

export default function Story() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 lg:px-8 lg:py-28">
      <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
        how avocado nation started
      </h2>

      <div className="mt-10 space-y-6 text-lg leading-relaxed text-neutral-400">
        {paragraphs.map((p, i) => {
          if (typeof p === 'string') {
            return <p key={i}>{p}</p>
          }
          if (p.lines) {
            return (
              <p key={i} className="whitespace-pre-line text-white">
                {p.text}
              </p>
            )
          }
          return (
            <p key={i} className="text-white">
              {p.text}
            </p>
          )
        })}
      </div>
    </section>
  )
}
