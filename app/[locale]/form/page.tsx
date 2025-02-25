import { Form } from "@/components/Form";
import "./form.css";
import { getTranslations } from "next-intl/server";
export default async function FormPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations("Form");
  return (
    <div
      className='min-h-screen min-w-screen'
      dir={locale === "ar" ? "rtl" : "ltr"}
    >
      <section className='hero-form'>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
      </section>
      <section className='hero-form'>
        <Form locale={locale as "en" | "fr" | "ar"} />
      </section>
    </div>
  );
}
