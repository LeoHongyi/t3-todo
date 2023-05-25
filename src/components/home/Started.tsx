import Image from "next/image";
export default function Started() {
  return (
    <div className="mb-2 flex flex-col gap-x-4 px-2 sm:mb-28 sm:mt-20 sm:flex-row sm:px-28">
      <div>
        <Image
          src="/image.png"
          alt="started"
          width={596}
          height={370}
          className="w-full"
        />
      </div>
      <div className="flex flex-col gap-y-8 pt-10">
        <p className="text-center text-3xl font-bold dark:text-white sm:text-left">
          Achieve your target and won your life
        </p>
        <div className="text-center sm:text-left">
          <button className="rounded-lg bg-primary px-4 py-2 text-white hover:opacity-70">
            Get started
          </button>
        </div>
      </div>
    </div>
  );
}
