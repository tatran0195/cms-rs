import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر نسخ الرابط","bn":"লিঙ্ক কপি করা যায়নি","de":"Der Link konnte nicht kopiert werden","en":"Could not copy the link","es":"No se pudo copiar el enlace","fr":"Impossible de copier le lien","hi":"लिंक कॉपी नहीं किया जा सका","id":"Tidak dapat menyalin tautan","pt-BR":"Não foi possível copiar o link","ru":"Не удалось скопировать ссылку","ur":"لنک کاپی نہیں کیا جا سکا","zh-CN":"无法复制链接"};

export function settings_members_copyfailed(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
