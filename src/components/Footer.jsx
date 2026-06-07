export default function Footer() {
  return (
    <footer className="mx-auto max-w-2xl px-6 py-16 lg:px-8">
      <div className="flex flex-col gap-2 text-sm text-neutral-500 sm:flex-row sm:items-center sm:justify-between">
        <a
          href="https://x.com/emeenx"
          target="_blank"
          rel="noreferrer"
          className="rounded-sm text-white transition-colors duration-150 ease-out hover:text-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]"
        >
          @emeenx
        </a>

        <p>
          citizen count:{' '}
          {/* Wire to a live count later; intentionally static for now. */}
          <span className="font-mono tabular-nums">loading...</span>
        </p>
      </div>
    </footer>
  )
}
