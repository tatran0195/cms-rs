import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحميل إعدادات البحث أو حفظها.","bn":"Search settings could not be loaded or saved.","de":"Search settings could not be loaded or saved.","en":"Search settings could not be loaded or saved.","es":"Search settings could not be loaded or saved.","fr":"Search settings could not be loaded or saved.","hi":"Search settings could not be loaded or saved.","id":"Search settings could not be loaded or saved.","pt-BR":"Search settings could not be loaded or saved.","ru":"Search settings could not be loaded or saved.","ur":"Search settings could not be loaded or saved.","zh-CN":"Search settings could not be loaded or saved."};

export function settings_search_configuration_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
