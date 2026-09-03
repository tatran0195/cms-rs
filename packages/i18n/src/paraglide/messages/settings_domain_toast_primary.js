import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث النطاق الأساسي","bn":"প্রাথমিক ডোমেইন আপডেট করা হয়েছে","de":"Primäre Domäne aktualisiert","en":"Primary domain updated","es":"Dominio principal actualizado","fr":"Domaine principal mis à jour","hi":"प्राथमिक डोमेन अद्यतन किया गया","id":"Domain primer diperbarui","pt-BR":"Domínio principal atualizado","ru":"Основной домен обновлен.","ur":"بنیادی ڈومین اپ ڈیٹ ہو گیا۔","zh-CN":"主域名已更新"};

export function settings_domain_toast_primary(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
