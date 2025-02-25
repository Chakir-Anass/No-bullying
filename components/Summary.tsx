"use client";

import { questions } from "@/lib/questions";
import { useFormStore } from "@/store/useFormStore";
import { useTranslations } from "next-intl";

export function Summary({ locale }: { locale: "en" | "fr" | "ar" }) {
  const { responses } = useFormStore();
  const t = useTranslations("Form");
  return (
    <div className='flex flex-col gap-4 text-sm'>
      {questions.map((question) => (
        <div key={question.q[locale]} className='p-4 bg-gray-600 rounded-lg'>
          {question.type === "text" && (
            <div>
              <h2 className='font-bold text-amber-300 mb-4'>
                {question.q[locale]}
              </h2>
              {question.fields.map((field) => (
                <div key={field.key}>
                  {field.label[locale]}: {responses[field.name]}
                </div>
              ))}
            </div>
          )}
          {question.type === "choice" && (
            <div>
              <h2 className='font-bold text-amber-300 mb-4'>
                {question.q[locale]}
              </h2>
              {question.choices.map((choice) => {
                if (choice.index === parseInt(responses[question.name])) {
                  return (
                    <div key={choice.index} className='flex gap-2'>
                      <span>{t("answer")}:</span>
                      <div className='text-green-500 font-bold'>
                        {choice[locale]}
                      </div>
                    </div>
                  );
                }
              })}
              {!responses[question.name] && (
                <span className='text-red-500 font-bold'>
                  {t("not_answered")}
                </span>
              )}
            </div>
          )}
          {question.type === "textarea" && (
            <div>
              <h2 className='font-bold text-amber-300 mb-4'>
                {question.q[locale]}
              </h2>
              <div className='flex gap-2'>
                <span>{t("answer")}:</span>
                <div className='text-green-500 font-bold'>
                  {responses[question.name]}
                </div>
              </div>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
