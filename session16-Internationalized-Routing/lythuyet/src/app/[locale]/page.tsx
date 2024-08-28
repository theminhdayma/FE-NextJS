"use client"
import {useTranslations} from 'next-intl';
import { useRouter } from 'next/navigation';
 
export default function HomePage() {
  const t = useTranslations('HomePage');

  const route = useRouter()
  const handleClick = () => {
    route.push("/en")
  }
  return <>
    <h1>{t('title')}</h1>
    <h1>{t('company')}</h1>
    <button onClick={handleClick}>Dịch</button>
  </>;
}