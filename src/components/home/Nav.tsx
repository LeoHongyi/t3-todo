
import Link from "next/link";
import Image from "next/image";
import Icon from "../../../public/icon.svg";
export default function Nav() {
  return (
    <div className="flex h-24 items-center justify-between px-28">
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
    </div>
  );
}
