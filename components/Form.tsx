"use client";
import React from "react";
import { useTranslations } from "next-intl";
import { QuestionForm } from "./QuestionForm";
import { questions } from "@/lib/questions";

import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Progress } from "@/components/ui/progress";
import { Link } from "@/i18n/routing";

export function Form({ locale = "en" }: { locale?: "en" | "fr" | "ar" }) {
  const t = useTranslations("Form");

  const [api, setApi] = React.useState<CarouselApi>();
  const [current, setCurrent] = React.useState(0);
  const [count, setCount] = React.useState(0);

  React.useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <div className='flex-1 max-w-3xl self-center mx-auto'>
      <p className=''>{t("formTitle")}</p>
      <div className='form-carousel p-8'>
        <Progress
          value={((current - 1) / (count - 1)) * 100}
          className='w-full mb-4 '
        />
        <Carousel
          className=''
          setApi={setApi}
          opts={{ direction: locale === "ar" ? "rtl" : "ltr" }}
        >
          <CarouselContent>
            {questions.map((question, index) => (
              <CarouselItem key={index} className='basis-full overflow-hidden'>
                <div className=''>
                  <div key={question.q[locale]}>
                    <p>{question.q[locale]}</p>
                    <QuestionForm question={question} locale={locale} />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className='flex flex-col gap-4 mt-4'>
            {current === count && (
              <Link
                className='relative bg-white/30 border border-white/30 rounded-[10px] text-white px-6 py-3 text-base cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/40 hover:scale-105 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] overflow-hidden mx-auto  before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full w-full p-5'
                href='/form/summary'
              >
                {t("confirm")}
              </Link>
            )}
            <CarouselNext
              text={t("next")}
              className='relative bg-white/30 border border-white/30 rounded-[10px] text-white px-6 py-3 text-base cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/40 hover:scale-105 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] overflow-hidden mx-auto  before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full w-full p-5'
            />
            <CarouselPrevious
              text={t("back")}
              className='relative border border-white/30 rounded-[10px] text-black px-6 py-3 text-base cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-amber-400 hover:scale-105 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] hover:text-black w-full bg-amber-300 overflow-hidden mx-auto p-5 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full'
            />

            {current === 1 && (
              <Link
                className='relative border border-white/30 rounded-[10px] text-black px-6 py-3 text-base cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-amber-400 hover:scale-105 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] hover:text-black w-full bg-amber-300 overflow-hidden mx-auto p-5 before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full'
                href='/'
              >
                {t("back")}
              </Link>
            )}
          </div>
        </Carousel>
      </div>
    </div>
  );
}
