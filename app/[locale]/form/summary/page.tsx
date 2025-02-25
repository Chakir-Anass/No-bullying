import { SubmitForm } from "@/components/submit-form";
import { Summary } from "@/components/Summary";
import { Link } from "@/i18n/routing";
import { getTranslations } from "next-intl/server";
import React from "react";

export default async function SummaryPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Form");

  return (
    <div className='min-h-screen flex flex-col items-center justify-center gap-4 my-8'>
      <h1 className='text-4xl font-bold'>{t("summary")}</h1>
      <div className='bg-white/10 border border-white/10 rounded-2xl backdrop-blur-[12px] mx-auto p-2 flex flex-col gap-4'>
        <Summary locale={locale as "en" | "fr" | "ar"} />
        <div className='flex flex-col gap-2'>
          <SubmitForm />
          <Link
            href='/form'
            className='border text-center border-white/30 rounded-[10px] text-black cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-amber-400 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] hover:text-black w-full bg-amber-300 overflow-hidden mx-auto p-1 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full'
          >
            {t("back")}
          </Link>
        </div>
      </div>
    </div>
  );
}
