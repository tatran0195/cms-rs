import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد تكاملات مطابقة","bn":"কোন ইন্টিগ্রেশন পাওয়া যায়নি","de":"Keine Integrationen gefunden","en":"No integrations found","es":"No se han encontrado integraciones","fr":"Aucune intégration trouvée","hi":"कोई एकीकरण नहीं मिला","id":"Tidak ada integrasi yang ditemukan","pt-BR":"Não foram encontradas integrações","ru":"Интеграции не найдено","ur":"کوئی انضمام نہیں ملا","zh-CN":"未找到整合"};

export function settings_integrations_noresults(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
