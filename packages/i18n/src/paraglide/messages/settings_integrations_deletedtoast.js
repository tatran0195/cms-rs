import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حذف التكامل","bn":"ইন্টিগ্রেশন মুছে ফেলা হয়েছে","de":"Integration gelöscht","en":"Integration deleted","es":"Integración eliminada","fr":"Intégration supprimée","hi":"एकीकरण नष्ट कर दिया","id":"Integrasi dihapus","pt-BR":"Integração apagada","ru":"Интеграция удалена","ur":"انضمام حذف کر دیا گیا","zh-CN":"删除整合"};

export function settings_integrations_deletedtoast(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
