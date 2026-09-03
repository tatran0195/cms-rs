import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد نطاقات مخصصة بعد.","bn":"এখনও কোন কাস্টম ডোমেন নেই.","de":"Noch keine benutzerdefinierten Domänen.","en":"No custom domains yet.","es":"Aún no hay dominios personalizados.","fr":"Aucun domaine personnalisé pour l'instant.","hi":"अभी तक कोई कस्टम डोमेन नहीं.","id":"Belum ada domain khusus.","pt-BR":"Ainda não há domínios personalizados.","ru":"Пользовательских доменов пока нет.","ur":"ابھی تک کوئی حسب ضرورت ڈومینز نہیں ہیں۔","zh-CN":"还没有自定义域。"};

export function settings_domain_empty(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
