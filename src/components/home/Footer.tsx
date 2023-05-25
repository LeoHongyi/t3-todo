import { motion } from "framer-motion";
import { FooterVariants } from "y/utils/motion";
export default function Footer() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={FooterVariants}
      className="justify-between border-t border-primary pt-4 dark:text-white sm:mx-28 sm:flex"
    >
      <div className="flex flex-col items-center gap-y-6">
        <div className="flex items-center gap-x-3">
          <svg
            width="41"
            height="41"
            viewBox="0 0 41 41"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="41" height="41" rx="3" className="fill-primary" />
            <rect
              x="15.375"
              y="10.25"
              width="21.7812"
              height="5.125"
              fill="white"
            />
            <rect
              x="15.375"
              y="19.2188"
              width="21.7812"
              height="5.125"
              fill="white"
            />
            <rect
              x="15.375"
              y="28.1875"
              width="21.7812"
              height="5.125"
              fill="white"
            />
          </svg>
          <div>
            <p>Lets change your habit</p>
            <p>join with million people</p>
          </div>
        </div>

        <div>
          <p>DK Tech Company</p>
          <p className="font-light">Uma Street, Lost City, Aincard</p>
        </div>
      </div>
      <div className="mt-4 flex justify-center gap-x-20 sm:mt-0">
        <div className="flex flex-col gap-y-4">
          <div className="text-xl text-primary">Features</div>
          <div className="flex flex-col gap-y-1">
            <div>Lorem</div>
            <div>Ipsum</div>
            <div>Sit</div>
            <div>Dolor</div>
          </div>
        </div>

        <div className="flex flex-col gap-y-4">
          <div className="text-xl text-primary">Pricing</div>
          <div className="flex flex-col gap-y-1">
            <div>Lorem</div>
            <div>Ipsum</div>
            <div>Sit</div>
            <div>Dolor</div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
