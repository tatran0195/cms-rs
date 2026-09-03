import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر نسخ سجل DNS","bn":"DNS রেকর্ড অনুলিপি করা যায়নি","de":"Der DNS-Eintrag konnte nicht kopiert werden","en":"Could not copy the DNS record","es":"No se pudo copiar el registro DNS","fr":"Impossible de copier l'enregistrement DNS","hi":"DNS रिकॉर्ड की प्रतिलिपि नहीं बनाई जा सकी","id":"Tidak dapat menyalin data DNS","pt-BR":"Não foi possível copiar o registro DNS","ru":"Не удалось скопировать запись DNS","ur":"DNS ریکارڈ کاپی نہیں کیا جا سکا","zh-CN":"无法复制 DNS 记录"};

export function settings_domain_dns_copyfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
