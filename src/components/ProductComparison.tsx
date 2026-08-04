"use client";

interface ComparisonItem {
  name: string;
  market: boolean;
  ours: boolean;
}

interface ProductComparisonProps {
  marketName: string;
  ourName: string;
  pointers: ComparisonItem[];
}

export default function ProductComparison({
  marketName,
  ourName,
  pointers,
}: ProductComparisonProps) {
  return (
    <section className="py-16 px-5 sm:px-10 lg:px-16 bg-cream/30">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-10">
          <span className="block text-[10px] font-semibold tracking-[0.3em] text-charcoal/60 uppercase mb-3">
            Why Us?
          </span>
          <h2 className="font-serif text-3xl sm:text-4xl text-charcoal italic">
            The Difference is Clear
          </h2>
        </div>

        <div className="bg-white rounded-2xl shadow-sm border border-charcoal/10 overflow-hidden">
          {/* Header */}
          <div className="grid grid-cols-3 bg-charcoal/5 border-b border-charcoal/10">
            <div className="p-4 sm:p-6 flex items-center justify-center border-r border-charcoal/10">
              <span className="font-sans text-xs sm:text-sm font-semibold tracking-wider text-charcoal/60 uppercase text-center">
                Features
              </span>
            </div>
            <div className="p-4 sm:p-6 flex items-center justify-center border-r border-charcoal/10 bg-white/50">
              <span className="font-serif text-sm sm:text-lg text-charcoal text-center">
                {marketName}
              </span>
            </div>
            <div className="p-4 sm:p-6 flex items-center justify-center bg-cream/20">
              <span className="font-serif text-sm sm:text-lg text-charcoal font-semibold text-center">
                {ourName}
              </span>
            </div>
          </div>

          {/* Rows */}
          <div className="divide-y divide-charcoal/5">
            {pointers.map((pointer, i) => (
              <div key={i} className="grid grid-cols-3 hover:bg-cream/10 transition-colors">
                <div className="p-4 sm:p-6 flex items-center justify-center border-r border-charcoal/10">
                  <span className="font-sans text-sm text-charcoal/80 text-center font-medium">
                    {pointer.name}
                  </span>
                </div>
                <div className="p-4 sm:p-6 flex items-center justify-center border-r border-charcoal/10">
                  {pointer.market ? (
                    <div className="h-8 w-8 rounded-full bg-green-100/50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-red-100/50 flex items-center justify-center">
                      <svg className="w-4 h-4 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                  )}
                </div>
                <div className="p-4 sm:p-6 flex items-center justify-center bg-cream/10">
                  {pointer.ours ? (
                    <div className="h-8 w-8 rounded-full bg-charcoal flex items-center justify-center">
                      <svg className="w-4 h-4 text-cream" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" /></svg>
                    </div>
                  ) : (
                    <div className="h-8 w-8 rounded-full bg-charcoal/10 flex items-center justify-center">
                      <svg className="w-4 h-4 text-charcoal/70" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" /></svg>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
