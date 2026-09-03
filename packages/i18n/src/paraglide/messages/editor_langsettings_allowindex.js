import { getLocale } from '../runtime.js';

const translations = {"ar":"السماح بالفهرسة","bn":"সার্চ ইনডেক্সিংয়ের অনুমতি দিন","de":"Suchindizierung zulassen","en":"Allow search indexing","es":"Permitir indexación de búsqueda","fr":"Autoriser l'indexation de recherche","hi":"खोज अनुक्रमणिका की अनुमति दें","id":"Izinkan pengindeksan pencarian","pt-BR":"Permitir indexação de pesquisa","ru":"Разрешить индексацию поиска","ur":"سرچ انڈیکسنگ کی اجازت دیں۔","zh-CN":"允许搜索索引"};

export function editor_langsettings_allowindex(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
