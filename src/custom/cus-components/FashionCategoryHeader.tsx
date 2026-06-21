export default function FashionCategoryHeader() {
  return (
    <section className="relative pb-20 pt-50 bg-white overflow-hidden">
      {/* Soft Glow */}
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-rose-100/70 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-pink-100/60 blur-[140px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase tracking-[5px] text-sm text-neutral-500 mb-5">
            Curated For Every Style
          </p>

          <h1 className="text-4xl md:text-6xl font-light text-neutral-900 leading-tight">
            Explore Our
            <span className="block italic text-neutral-700">
              Fashion Collections
            </span>
          </h1>

          <p className="mt-8 text-neutral-500 text-base md:text-lg leading-8">
            Discover carefully curated collections designed for every season,
            occasion, and lifestyle. From timeless essentials to statement
            pieces, find styles that express your individuality.
          </p>

          {/* Features */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 md:gap-12">
            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-neutral-900">
                Premium
              </p>
              <p className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
                Quality
              </p>
            </div>

            <div className="hidden md:block h-12 w-px bg-neutral-200" />

            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-neutral-900">
                Modern
              </p>
              <p className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
                Design
              </p>
            </div>

            <div className="hidden md:block h-12 w-px bg-neutral-200" />

            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-neutral-900">
                New
              </p>
              <p className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
                Arrivals
              </p>
            </div>

            <div className="hidden md:block h-12 w-px bg-neutral-200" />

            <div className="text-center">
              <p className="text-3xl md:text-4xl font-light text-neutral-900">
                Timeless
              </p>
              <p className="mt-2 uppercase tracking-[3px] text-xs text-neutral-500">
                Style
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}