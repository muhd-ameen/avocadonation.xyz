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

            <p>i&apos;m ameen. mayor of avocado nation.</p>

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

            <p className="font-medium text-black">
              then join our discord and say hi.
            </p>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://discord.gg/KEK7SrPF"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 bg-[#5865F2] text-white text-sm font-medium rounded-md hover:bg-[#4752c4] transition-colors"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M20.317 4.369a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037 13.696 13.696 0 0 0-.608 1.249 18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.249.077.077 0 0 0-.079-.037 19.736 19.736 0 0 0-4.885 1.515.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.056 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028 14.147 14.147 0 0 0 1.226-1.994.077.077 0 0 0-.042-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128c.126-.094.252-.192.372-.291a.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.061 0a.074.074 0 0 1 .078.009c.12.1.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.364 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .031-.055c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.028zM8.02 15.331c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.211 0 2.166 1.094 2.157 2.418 0 1.334-.955 2.419-2.157 2.419zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.418 2.157-2.418 1.211 0 2.166 1.094 2.157 2.418 0 1.334-.946 2.419-2.157 2.419z" />
                </svg>
                Join Discord
              </a>

              <a
                href="https://x.com/settings/profile"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-black text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors"
              >
                Add 🥑 to your X bio
              </a>
            </div>

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
