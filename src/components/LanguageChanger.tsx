'use client';

import { useRouter, usePathname } from 'next/navigation';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18nConfig from '../../i18nConfig';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const currentLocale = i18n.language;
  const [isChanging, setIsChanging] = useState(false);
  const router = useRouter();
  const currentPathname = usePathname();

  const handleChange = async (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;
    setIsChanging(true);

    const days = 30;
    const date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    const newPathname =
      currentLocale === i18nConfig.defaultLocale
        ? `/${newLocale}${currentPathname}`
        : currentPathname.replace(`/${currentLocale}`, `/${newLocale}`);

    await router.replace(newPathname);
    setIsChanging(false);
  };

  return (
    <select
      id='language-select'
      name='language'
      onChange={handleChange}
      value={currentLocale}
      disabled={isChanging}
      className='cursor-pointer rounded-lg bg-gray-800 p-1 text-white shadow-sm transition'
      autoComplete='language'
    >
      <option value='en'>English</option>
      <option value='pt-BR'>Português</option>
    </select>
  );
}
