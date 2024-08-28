"use client";
import { useTranslations } from "next-intl";
import { useRouter, usePathname } from "next/navigation";
import { useState, useEffect } from "react";

export default function HomePage() {
  const t = useTranslations("HomePage");
  const router = useRouter();
  const pathname = usePathname();

  const initialLang = pathname.split("/")[1] || "en";
  const [value, setValue] = useState<string>(initialLang);

  useEffect(() => {
    setValue(initialLang);
  }, [initialLang]);

  const handleChangeLanguage = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const language = e.target.value;
    setValue(language);
    router.push(`/${language}${pathname.slice(3)}`);
  };

  return (
    <>
      <select
        name="language"
        id="language-select"
        value={value}
        onChange={handleChangeLanguage}
      >
        <option value="en">Tiếng Anh</option>
        <option value="vi">Tiếng Việt</option>
      </select>
      <h1>{t("title")}</h1>
      <h1>{t("description")}</h1>
    </>
  );
}
