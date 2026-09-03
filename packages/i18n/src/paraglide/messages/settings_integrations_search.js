import { getLocale } from '../runtime.js';

const translations = {"ar":"ابحث في التكاملات","bn":"ইন্টিগ্রেশন অনুসন্ধান করুন","de":"Integrationen suchen","en":"Search integrations","es":"Buscar integraciones","fr":"Intégrations de recherche","hi":"एकीकरण खोजें","id":"Cari integrasinya","pt-BR":"Integrações de pesquisa","ru":"Поисковая интеграция","ur":"انضمام تلاش کریں","zh-CN":"搜索集成"};

export function settings_integrations_search(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
