'use client';

import { useRouter } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';

import i18nConfig from '../../i18nConfig';

export default function LanguageChanger() {
  const { i18n } = useTranslation();
  const router = useRouter();
  const [currentPathname, setCurrentPathname] = useState('');

  useEffect(() => {
    setCurrentPathname(window.location.pathname);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newLocale = e.target.value;

    const hours = 1;
    const date = new Date();
    date.setTime(date.getTime() + hours * 60 * 60 * 1000);
    const expires = date.toUTCString();
    document.cookie = `NEXT_LOCALE=${newLocale};expires=${expires};path=/`;

    const isDefaultLocale = i18n.language === i18nConfig.defaultLocale;

    const newPathname = isDefaultLocale
      ? `/${newLocale}${currentPathname}`
      : currentPathname.replace(`/${i18n.language}`, `/${newLocale}`);

    router.push(newPathname);
  };

  return (
    <select
      id='language-select'
      name='language'
      onChange={handleChange}
      value={i18n.language}
      className='cursor-pointer rounded-lg bg-gray-800 p-1 text-white shadow-sm transition'
      autoComplete='language'
    >
      <option value='en'>English</option>
      <option value='pt-BR'>Português</option>
    </select>
  );
}
