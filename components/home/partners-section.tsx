const partners = [
  "HÄFELE",
  "SCHNEIDER",
  "PHILIPS",
  "LEGRAND",
  "GM MODULAR",
  "ANCHOR",
  "WIPRO LIGHTING",
];

export function PartnersSection() {
  return (
    <section aria-labelledby="partners-title" className="border-y border-white/10 py-14 sm:py-16">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-9 flex flex-col items-start justify-between gap-3 sm:flex-row sm:items-end">
          <div>
            <p className="eyebrow mb-3 text-xs font-semibold uppercase text-[#f7eb15]">
              Technology we trust
            </p>
            <h2 id="partners-title" className="display-font text-3xl tracking-[-.035em] sm:text-4xl">
              Made possible with the right partners.
            </h2>
          </div>
          <p className="text-xs text-white/45">Partner names shown as placeholders.</p>
        </div>
      </div>
      <div className="partner-marquee relative overflow-hidden border-y border-white/10 py-7">
        <div className="partner-track flex w-max items-center gap-14 sm:gap-20">
          {[...partners, ...partners].map((partner, index) => (
            <span
              key={`${partner}-${index}`}
              className="partner-word whitespace-nowrap text-lg font-semibold tracking-[.13em] text-white/55 transition-colors hover:text-white sm:text-xl"
            >
              {partner}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}


