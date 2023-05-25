
import Link from "next/link";
import Image from "next/image";
import Icon from "../../../public/icon.svg";
import { NavVariants } from "y/utils/motion";
import { motion } from "framer-motion";

export default function Nav() {
  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      variants={NavVariants}
      transition={{ duration: 1 }}
      className="flex h-24 items-center justify-between px-2 sm:px-28">
      <div className="flex items-center gap-x-2">
        <Image src={Icon as string } alt="logo" />
        <span className="font-bold text-accent-red">Todo Daily</span>
      </div>
      <div className="space-x-5">
        <Link href="/" className="text-accent-red">
          Login
        </Link>
        <Link href="/">Signup</Link>
      </div>
    </motion.div>
  );
}
