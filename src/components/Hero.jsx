export default function Hero() {
  return (
    <section className="relative mx-auto max-w-6xl px-6 pt-10 pb-20 sm:pt-16 lg:px-8 lg:pt-20 lg:pb-32">
      {/*
        Holographic character (desktop only for now).
        Transparent PNG, no container / border / background — it blends straight
        into #050505. Sits on the right at ~40vw and bleeds slightly past center,
        behind the text (z-0).
      */}
      <img
        src="/character.png"
        alt=""
        aria-hidden="true"
        className="pointer-events-none absolute top-1/2 right-[6vw] z-0 hidden w-[40vw] max-w-[560px] -translate-y-1/2 select-none lg:block"
      />

      {/* Copy — sits above the image (z-10). */}
      <div className="relative z-10 max-w-2xl">
        <p className="animate-fade-up text-xs font-medium uppercase tracking-[0.25em] text-neutral-500">
          Welcome to Avocado Nation 🥑
        </p>

        <h1 className="animate-fade-up mt-6 text-5xl font-medium leading-[1.05] tracking-tight text-white sm:text-6xl lg:text-7xl" style={{ animationDelay: '60ms' }}>
          hi.
          <br />
          i&apos;m ameen.
          <br />
          mayor of avocado nation.
        </h1>

        <div className="animate-fade-up mt-8 max-w-md space-y-4 text-lg leading-relaxed text-neutral-400" style={{ animationDelay: '120ms' }}>
          <p>i spend most of my time building things on the internet.</p>
          <p>lately i&apos;ve been thinking a lot about one question:</p>
          <p className="text-white">how do humans coordinate?</p>
        </div>
      </div>
    </section>
  )
}
