import {motion} from 'framer-motion'
import Image from "next/image";
export default function Hero() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 2 }}
      className="hero"
    >
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, type: "spring" }}
        className="m-auto my-10 w-[400px] px-1.5 text-center text-3xl font-bold dark:text-white"
      >
        Organizing your day activity with Todo Daily
      </motion.p>
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
    </motion.div>
  );
}
