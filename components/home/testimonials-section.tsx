import { Sparkles } from "lucide-react";

const testimonials = [
  {
    quote:
      "The lighting completely changed how our home feels in the evening. It’s subtle, beautiful and so easy to live with.",
    name: "Ananya R.",
    role: "Homeowner",
    initials: "AR",
  },
  {
    quote:
      "We wanted technology that felt simple, not complicated. The smart controls fit naturally into our everyday routine.",
    name: "Rahul M.",
    role: "Residential client",
    initials: "RM",
  },
  {
    quote:
      "Thoughtful recommendations, a clean finish and details that bring the whole space together. Exactly what we hoped for.",
    name: "Meera & Kiran",
    role: "Homeowners",
    initials: "MK",
  },
];

export function TestimonialsSection() {
  return (
    <section className="relative border-y border-white/10 bg-[#0f0c08]/80 py-24 sm:py-28">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-6 lg:px-10">
        <div className="mb-12 flex flex-col justify-between gap-5 md:flex-row md:items-end">
          <div>
            <p className="eyebrow mb-4 flex items-center gap-3 text-xs font-semibold uppercase text-[#f7eb15]">
              <span className="h-px w-8 bg-[#f7eb15]" />
              Words from our clients
            </p>
            <h2 className="display-font text-4xl tracking-[-.045em] sm:text-5xl lg:text-6xl">
              Good design feels personal.
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/60">
            The best measure of our work is how naturally it becomes part of everyday life.
          </p>
        </div>
        <div className="grid grid-cols-1 gap-4 lg:grid-cols-3">
          {testimonials.map((item, index) => (
            <article
              key={item.name}
              className="testimonial-card flex min-h-[320px] flex-col justify-between rounded-sm border border-white/10 bg-[#0d1015] p-6 transition-colors duration-300 hover:border-[#f7eb15]/60 sm:p-8"
            >
              <div>
                <p className="display-font text-xl leading-[1.45] tracking-[-.02em] text-white sm:text-2xl">
                  “{item.quote}”
                </p>
              </div>
              <div className="mt-10 flex items-center gap-3 border-t border-white/10 pt-5">
                <div className="grid h-11 w-11 place-items-center rounded-full bg-[#f7eb15]/10 text-xs font-semibold text-[#fbf578]">
                  {item.initials}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{item.name}</p>
                  <p className="mt-1 text-xs text-white/50">{item.role}</p>
                </div>
                <span className="ml-auto font-mono text-xs text-white/30">0{index + 1}</span>
              </div>
            </article>
          ))}
        </div>
        <p className="mt-4 text-xs text-white/35">
          Placeholder testimonials — replace with approved customer feedback before publishing.
        </p>
      </div>
    </section>
  );
}


