export default function TopSection() {
  return (
    <section className="bg-[#E6D2CA] py-16 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <p className="uppercase tracking-widest text-sm font-medium mb-5 text-[#3949AB]">
          SAVE THE DATE
        </p>
        
        <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-[#1A1A1A] leading-tight">
          Learn 10 Strategies to<br />
          Optimize Your Campaigns
        </h1>
        
        <p className="text-[#1A1A1A]/80 max-w-xl mx-auto mb-12">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec scelerisque libero, et lacinia lectus.
        </p>
        
        <div className="bg-white rounded shadow-sm grid grid-cols-1 md:grid-cols-3 overflow-hidden">
          <div className="p-6 text-left">
            <p className="text-sm text-[#1A1A1A]/90">
              Pellentesque ut euismod sem. Etiam facilisi varius metus vel sodales. Fusce venenatis, elit in convallis feugiat, risus augue tempus urna, ut sodales tortor metus posuere ante. Curabitur vitae enim dignissim, vehicula odio a, maximus felis.
            </p>
          </div>
          <div className="p-6 text-left border-t md:border-t-0 md:border-l md:border-r border-gray-100">
            <p className="text-sm text-[#1A1A1A]/90">
              Pellentesque ut euismod sem. Etiam facilisi varius metus vel sodales. Fusce venenatis, elit in convallis feugiat, risus augue tempus urna, ut sodales tortor metus posuere ante. Curabitur vitae enim dignissim, vehicula odio a, maximus felis.
            </p>
          </div>
          <div className="p-6 text-left border-t md:border-t-0">
            <p className="text-sm text-[#1A1A1A]/90">
              Pellentesque ut euismod sem. Etiam facilisi varius metus vel sodales. Fusce venenatis, elit in convallis feugiat, risus augue tempus urna, ut sodales tortor metus posuere ante. Curabitur vitae enim dignissim, vehicula odio a, maximus felis.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
