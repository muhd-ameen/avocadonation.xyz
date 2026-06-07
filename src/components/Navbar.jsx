const links = [
  { label: 'Discord', href: 'https://discord.gg/KEK7SrPF', external: true },
  { label: 'X', href: 'https://x.com/emeenx', external: true },
]

const ringClasses =
  'rounded-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]'

export default function Navbar() {
  return (
    <header className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-6 py-5 sm:py-6 lg:px-8">
      <a
        href="#top"
        className={`shrink-0 whitespace-nowrap text-base font-medium tracking-tight text-white ${ringClasses}`}
      >
        🥑 Avocado Nation
      </a>

      <nav className="flex items-center gap-4 sm:gap-7">
        {links.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noreferrer"
            className={`hidden text-sm font-medium text-neutral-400 transition-colors duration-150 ease-out hover:text-white sm:inline ${ringClasses}`}
          >
            {link.label}
          </a>
        ))}

        <a
          href="https://discord.gg/KEK7SrPF"
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center justify-center rounded-full bg-white px-4 py-2 text-sm font-medium text-black transition-opacity duration-150 ease-out hover:opacity-90 active:opacity-75 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white/60 focus-visible:ring-offset-2 focus-visible:ring-offset-[#050505]`}
        >
          Join
        </a>
      </nav>
    </header>
  )
}
