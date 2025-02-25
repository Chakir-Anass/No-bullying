import { TeamDrawer } from "./team-drawer";

export function Footer() {
  return (
    <footer className='flex flex-col w-full items-center justify-center text-xs backdrop-blur-sm gap-2'>
      © 2025 IBN BATTOUTA School – All Rights Reserved.
      <TeamDrawer />
    </footer>
  );
}
