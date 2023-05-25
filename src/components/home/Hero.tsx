import Image from "next/image";
export default function Hero() {
  return (
    <div className="hero">
      <p className="m-auto my-10 w-[400px] px-1.5 text-center text-3xl font-bold">
        Organizing your day activity with Todo Daily
      </p>
      <div className="relative">
        <div className="absolute left-0 right-0 top-2 text-center">
          <button className="rounded-lg bg-primary px-4 py-2 text-white hover:opacity-70">
            Get started
          </button>
        </div>
        <Image
          src="/hero.png"
          alt="hero"
          width={1363}
          height={909}
          className="w-full"
        />
      </div>
    </div>
  );
}
