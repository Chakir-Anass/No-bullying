import { Link } from "@/i18n/routing";
import "./mainPage.css";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("Home");
  return (
    <main>
      <section className='hero'>
        <h1>{t("title")}</h1>
        <p>{t("description")}</p>
        <Link className='btn' href={"/form"}>
          {t("button")}
        </Link>
        <div className='scroll-indicator'>▼</div>
      </section>
      <section className='content backdrop-blur-sm'>
        <h2>{t("consolation")}</h2>
        <p>{t("consolationDescription")}</p>
        <p>{t("consolationDescription2")}</p>
      </section>
    </main>
  );
}
