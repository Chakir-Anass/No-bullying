"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useFormStore } from "@/store/useFormStore";
import { useRouter } from "@/i18n/routing";
import { questions } from "@/lib/questions";
import { toast } from "sonner";

export function SubmitForm() {
  const t = useTranslations("Form");
  const { resetForm, responses } = useFormStore();
  const router = useRouter();

  const promise = () =>
    new Promise((resolve) =>
      setTimeout(() => resolve({ name: "Sonner" }), 2000)
    );

  const handleSubmit = () => {
    const data: { [key: string]: string | null } = {};
    questions.forEach((question) => {
      data[question.name] = responses[question.name] || null;
    });
    console.log({ data });
    resetForm();
    router.push("/form");
    toast.promise(promise, {
      loading: t("loading"),
      success: t("success"),
      error: t("error"),
    });
  };
  return (
    <Button
      variant='outline'
      className='relative bg-white/30 border border-white/30 rounded-[10px] text-white px-6 py-3 text-base cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/40 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] overflow-hidden mx-auto before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full w-full p-1'
      onClick={handleSubmit}
    >
      {t("submit")}
    </Button>
  );
}
