import { getLocale } from '../runtime.js';

const translations = {"ar":"المظهر","bn":"চেহারা","de":"Aussehen","en":"Appearance","es":"Apariencia","fr":"Apparence","hi":"दिखावट","id":"Penampilan","pt-BR":"Aparência","ru":"Внешний вид","ur":"ظاہری شکل","zh-CN":"外观"};

export function settings_tab_appearance(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
