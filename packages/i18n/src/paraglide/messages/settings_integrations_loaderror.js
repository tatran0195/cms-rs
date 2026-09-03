import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تحميل التكاملات","bn":"ইন্টিগ্রেশন লোড করা যায়নি","de":"Integrationen konnten nicht geladen werden","en":"Integrations could not be loaded","es":"No se han podido cargar las integraciones","fr":"Les intégrations ne pouvaient pas être chargées","hi":"एकीकरण लोड नहीं किया जा सकता","id":"Integrasi tidak dapat dimuat","pt-BR":"Não foi possível carregar as integrações","ru":"Интеграция не может быть загружена","ur":"انضمام لوڈ نہیں ہو سکے","zh-CN":"无法装入整合"};

export function settings_integrations_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
