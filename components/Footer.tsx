import { TeamDrawer } from "./team-drawer";
import Image from "next/image";

export function Footer() {
  return (
    <footer className='flex flex-col w-full items-center justify-center text-xs backdrop-blur-sm gap-2'>
      <Image
        src='/LOGO-MEN-AAMZ.png'
        alt='IBN BATTOUTA HIGH SCHOOL'
        width={300}
        height={300}
        priority={true}
      />
      © 2025 IBN BATTOUTA HIGH SCHOOL – All Rights Reserved.
      <TeamDrawer />
    </footer>
  );
}
