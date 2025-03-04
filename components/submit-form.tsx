"use client";

import { useTranslations } from "next-intl";
import { Button } from "./ui/button";
import { useFormStore } from "@/store/useFormStore";
import { useRouter } from "@/i18n/routing";
import { questions } from "@/lib/questions";
import { toast } from "sonner";
import { useMutation } from "@tanstack/react-query";

export function SubmitForm() {
  const t = useTranslations("Form");
  const { resetForm, responses } = useFormStore();
  const router = useRouter();

  const { mutate: submitForm, isPending } = useMutation({
    mutationFn: async (data: { [key: string]: string | number | null }) => {
      await fetch(
        "https://main-bvxea6i-thscbbhdu5c3i.fr-3.platformsh.site/api/forms",
        {
          method: "POST",
          body: JSON.stringify(data),
          headers: {
            "Content-Type": "application/ld+json",
          },
        }
      );
    },
    onSuccess: () => {
      toast.success(t("success"));
      resetForm();
      router.push("/form");
    },
    onError: () => {
      toast.error(t("error"));
      router.push("/form");
    },
  });

  const handleSubmit = () => {
    const data: { [key: string]: string | number | null } = {};
    questions.forEach((question) => {
      if (question.type === "text") {
        question.fields.forEach((field) => {
          data[field.name] = responses[field.name] || null;
        });
      } else if (question.type === "choice") {
        data[question.name] = responses[question.name]
          ? parseInt(responses[question.name])
          : null;
      } else {
        data[question.name] = responses[question.name] || null;
      }
    });
    submitForm(data);
  };
  return (
    <Button
      variant='outline'
      className='relative bg-white/30 border border-white/30 rounded-[10px] text-white px-6 py-3 text-base cursor-pointer transition-all duration-300 backdrop-blur-[5px] shadow-[0_4px_8px_rgba(0,0,0,0.3)] hover:bg-white/40 hover:shadow-[0_6px_12px_rgba(0,0,0,0.4)] overflow-hidden mx-auto before:absolute before:top-0 before:left-[-100%] before:w-full before:h-full before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent before:transition-all before:duration-500 hover:before:left-full w-full p-1'
      onClick={handleSubmit}
      disabled={isPending}
    >
      {t("submit")}
    </Button>
  );
}
