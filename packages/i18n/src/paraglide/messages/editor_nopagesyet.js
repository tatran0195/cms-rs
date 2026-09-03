import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد صفحات بعد","bn":"এখনো কোনো পৃষ্ঠা নেই","de":"Noch keine Seiten","en":"No pages yet","es":"Aún no hay páginas","fr":"Aucune page pour l'instant","hi":"अभी तक कोई पेज नहीं","id":"Belum ada halaman","pt-BR":"Ainda não há páginas","ru":"Страниц пока нет","ur":"ابھی تک کوئی صفحہ نہیں ہے۔","zh-CN":"还没有页面"};

export function editor_nopagesyet(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
