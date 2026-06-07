const steps = [
  { n: '01', text: 'add 🥑 to your X bio' },
  { n: '02', text: 'join the discord' },
  { n: '03', text: 'say hi' },
]

export default function Join() {
  return (
    <section className="mx-auto max-w-2xl px-6 py-20 lg:px-8 lg:py-28">
      <h2 className="text-2xl font-medium tracking-tight text-white sm:text-3xl">
        become a citizen
      </h2>

      <ol className="mt-10 space-y-6">
        {steps.map((step) => (
          <li key={step.n} className="flex items-baseline gap-5">
            <span className="font-mono text-sm tabular-nums text-neutral-500">
              {step.n}
            </span>
            <span className="text-lg text-white">{step.text}</span>
          </li>
        ))}
      </ol>

      <div className="mt-12 flex flex-col gap-3 sm:flex-row">
        <a
          href="https://discord.gg"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition-opacity duration-150 ease-out hover:opacity-90 active:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          Join Discord
        </a>
        <a
          href="https://x.com/account/settings"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-white transition-colors duration-150 ease-out hover:border-white/40 hover:bg-white/5 active:bg-white/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          Add 🥑 to your X Bio
        </a>
      </div>
    </section>
  )
}
