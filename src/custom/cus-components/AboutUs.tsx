import React from "react";

export default function AboutUs() {
  return (
    <section className="relative overflow-hidden py-20 md:py-28 bg-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[linear-gradient(to_bottom_right,#ffffff,#fafafa,#f5f5f5,#ffffff)]" />

      {/* Soft Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-pink-100/60 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-rose-100/60 blur-[120px] rounded-full" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-12">

        <div className="grid lg:grid-cols-2 gap-14 items-center">

          {/* Left Content */}
          <div>

            <span className="uppercase tracking-[4px] text-xs font-medium text-pink-600">
              Since Years of Trust
            </span>

            <h1 className="text-4xl md:text-6xl font-light text-neutral-900 mt-4 mb-8 leading-tight">
              About
              <br />
              Vardhman Traders
            </h1>

            <div className="space-y-6 text-neutral-600 leading-relaxed text-base">

              <p>
                Welcome to <strong>Vardhman Traders</strong>, a trusted
                name serving customers from the heart of Jalandhar.
                Located at <strong>E.P. 333, Inside Saidan Gate</strong>,
                we have built our reputation through quality products,
                reliable service, and long-term customer relationships.
              </p>

              <p>
                We believe that business is built on trust, honesty,
                and customer satisfaction. Every customer who visits us
                receives the same commitment to quality, fair pricing,
                and professional service.
              </p>

              <p>
                Our mission is simple — to provide dependable products
                and exceptional service while maintaining the values
                that have helped us earn the confidence of our customers
                over the years.
              </p>

            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-10 mt-10">

              <div>
                <h3 className="text-3xl font-semibold text-neutral-900">
                  100%
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Customer Focused
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-neutral-900">
                  Quality
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Products & Service
                </p>
              </div>

              <div>
                <h3 className="text-3xl font-semibold text-neutral-900">
                  Trust
                </h3>
                <p className="text-sm text-neutral-500 mt-1">
                  Built Over Time
                </p>
              </div>

            </div>

          </div>

          {/* Right Side */}
          <div className="relative">

            <div className="bg-white border border-neutral-200 rounded-[32px] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.06)]">

              <span className="text-xs uppercase tracking-[4px] text-pink-600">
                Our Location
              </span>

              <h3 className="text-3xl font-semibold text-neutral-900 mt-4 mb-6">
                Vardhman Traders
              </h3>

              <div className="space-y-4 text-neutral-600">

                <div>
                  <p className="text-sm uppercase tracking-wide text-neutral-400 mb-1">
                    Address
                  </p>
                  <p>
                    E.P. 333
                    <br />
                    Inside Saidan Gate
                    <br />
                    Jalandhar
                  </p>
                </div>

                <div>
                  <p className="text-sm uppercase tracking-wide text-neutral-400 mb-1">
                    Commitment
                  </p>
                  <p>
                    Quality products, reliable service,
                    and customer satisfaction.
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}