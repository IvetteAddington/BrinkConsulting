import SignupForm from "./SignupForm";

export default function BottomSection() {
  return (
    <section className="bg-[#3949AB] py-16 px-6 text-white">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="text-left">
          <h2 className="font-serif text-2xl font-medium mb-4">Lorem ipsum dolor sit</h2>
          <p className="text-white/80 text-sm leading-relaxed mb-4">
            Pellentesque ut euismod sem. Etiam facilisi varius metus vel sodales. Fusce venenatis, elit in convallis feugiat, risus augue tempus urna, ut sodales tortor metus posuere ante. Curabitur vitae enim dignissim, vehicula odio a, maximus felis. Aenean metus sapien, pulvinar quis consequat ac, mollis sit amet ipsum. In lectus enim, fringilla a nunc vel, mattis viverra tortor. Proin neque quam, iaculis sit amet dictum quis, consectetur in augue. Class aptent taciti sociosqu.
          </p>
        </div>
        
        <SignupForm />
      </div>
    </section>
  );
}
