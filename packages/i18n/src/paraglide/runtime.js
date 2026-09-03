let currentLocale = 'en';

export const baseLocale = 'en';
export const locales = ["ar","bn","de","en","es","fr","hi","id","pt-BR","ru","ur","zh-CN"];

export function getLocale() {
  if (typeof document !== 'undefined') {
    const cookie = document.cookie.split('; ').find(row => row.startsWith('CMS_LOCALE=') || row.startsWith('NIBLEAF_LOCALE='));
    if (cookie) {
      const val = cookie.split('=')[1];
      if (locales.includes(val)) return val;
    }
  }
  return currentLocale;
}

export async function setLocale(locale, options = {}) {
  if (locales.includes(locale)) {
    currentLocale = locale;
    if (typeof document !== 'undefined') {
      document.cookie = `CMS_LOCALE=${locale}; path=/; max-age=31536000; SameSite=Lax`;
    }
  }
}
