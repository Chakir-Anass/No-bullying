"use client";
import { usePathname, useRouter } from "@/i18n/routing";
import { useState } from "react";
export function LangSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  // Change language without losing form data
  const changeLanguage = (newLocale: string) => {
    console.log({ pathname, newLocale });
    router.push(pathname, { scroll: false, locale: newLocale });
  };
  return (
    <>
      <button id='lang-toggle' onClick={() => setIsOpen(!isOpen)}>
        🌐
      </button>
      {isOpen && (
        <div id='lang-panel' className='flex flex-colgap-2 text-center'>
          <button onClick={() => changeLanguage("en")} className='lang-btn'>
            English
          </button>
          <button onClick={() => changeLanguage("fr")} className='lang-btn'>
            Français
          </button>
          <button onClick={() => changeLanguage("ar")} className='lang-btn'>
            العربية
          </button>
        </div>
      )}
    </>
  );
}
