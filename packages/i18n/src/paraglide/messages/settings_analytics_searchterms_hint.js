import { getLocale } from '../runtime.js';

const translations = {"ar":"الاشتراك في تخزين قصير الأجل لعبارات البحث في الوثائق العامة بعد الموافقة. تُستبعد استعلامات المواقع الخاصة دائمًا.","bn":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","de":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","en":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","es":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","fr":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","hi":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","id":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","pt-BR":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","ru":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","ur":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded.","zh-CN":"Opt in to short-lived search-term storage for public docs after consent. Private-site queries are always excluded."};

export function settings_analytics_searchterms_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
