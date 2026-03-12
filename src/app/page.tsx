import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen px-6 py-16 md:py-24">
      <div className="mx-auto max-w-[680px]">
        {/* Section 1 - Intro */}
        <section className="mb-16">
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-10">
            Welcome to Avocado Nation 🥑
          </h1>

          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>hi.</p>

            <p>i&apos;m ameen.</p>

            <p>
              i spend most of my time building things on the internet.
            </p>

            <p>
              lately i&apos;ve been thinking a lot about one question:
            </p>

            <p className="font-medium text-black">
              how do humans coordinate?
            </p>

            <p>
              companies are coordination. communities are coordination.
              governments are coordination. startups are coordination.
            </p>

            <p>
              the internet is slowly becoming the biggest coordination
              machine humans have ever built.
            </p>

            <p>so i build things around that idea.</p>
          </div>
        </section>

        {/* Section 2 - Image */}
        <section className="mb-16">
          <Image
            src="/avocado.png"
            alt="avocado nation"
            width={500}
            height={500}
            className="rounded-xl w-full max-w-[500px]"
            priority
          />
        </section>

        {/* Section 3 - Origin story */}
        <section className="mb-16">
          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>avocado nation started as a joke.</p>

            <p>i changed my bio one day to:</p>

            <p className="font-medium text-black">
              &quot;mayor of avocado nation 🥑&quot;
            </p>

            <p>no roadmap. no whitepaper. no master plan.</p>

            <p>just a weird internet line.</p>

            <p>but the internet has a funny habit.</p>

            <p>sometimes jokes become real things.</p>

            <p>
              bitcoin started weird. startups started weird. online
              communities started weird.
            </p>

            <p>so maybe avocado nation stays a meme.</p>

            <p>
              or maybe it becomes a small corner of the internet where
              people who like building weird things hang out.
            </p>

            <p>either way i&apos;m having fun building.</p>
          </div>
        </section>

        {/* Section 4 - CTA */}
        <section className="mb-24">
          <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed">
            <p>
              if you&apos;re reading this, welcome to avocado nation.
            </p>

            <p>
              there are no borders. no passports. no paperwork.
            </p>

            <p>just builders.</p>

            <p>if you want to join the nation:</p>

            <p className="font-medium text-black">
              add an avocado emoji 🥑 to your X bio.
            </p>

            <a
              href="https://x.com/settings/profile"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
            >
              Add 🥑 to your X bio
            </a>

            <Image
              src="/x-profile.png"
              alt="ameen.x profile on X"
              width={500}
              height={280}
              className="rounded-xl w-full max-w-[500px]"
            />

            <p>you can even write:</p>

            <p className="font-medium text-black">
              &quot;citizen of avocado nation 🥑&quot;
            </p>

            <p>that&apos;s it.</p>

            <p className="text-black font-medium text-2xl pt-4">
              welcome.
            </p>
          </div>
        </section>
        {/* Footer */}
        <footer className="pt-8 pb-4">
          <a
            href="https://x.com/emeenx"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-gray-500 hover:text-black transition-colors"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
            </svg>
            <span className="text-sm font-medium">@emeenx</span>
          </a>
        </footer>
      </div>
    </main>
  );
}
