import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل رابط موقع Ghost كاملًا، بما في ذلك https://.","bn":"https://. সহ সম্পূর্ণ ঘোস্ট সাইটের URL লিখুন","de":"Geben Sie die vollständige URL der Ghost-Site ein, einschließlich https://.","en":"Enter the full Ghost site URL, including https://.","es":"Ingrese la URL completa del sitio Ghost, incluido https://.","fr":"Saisissez l'URL complète du site Ghost, y compris https://..","hi":"https://. सहित संपूर्ण घोस्ट साइट URL दर्ज करें","id":"Masukkan URL situs Hantu lengkap, termasuk https://.","pt-BR":"Insira o URL completo do site Ghost, incluindo https://.","ru":"Введите полный URL-адрес сайта Ghost, включая https://..","ur":"گھوسٹ سائٹ کا مکمل URL درج کریں، بشمول https://.","zh-CN":"输入完整的 Ghost 站点 URL，包括 https://."};

export function settings_import_ghost_invalidurl(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
