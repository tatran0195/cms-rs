import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر النسخ — انسخه يدويًا.","bn":"অনুলিপি করা যায়নি - এটি ম্যানুয়ালি অনুলিপি করুন.","de":"Konnte nicht kopiert werden. Kopieren Sie es manuell.","en":"Could not copy — copy it manually.","es":"No se pudo copiar; cópielo manualmente.","fr":"Impossible de copier : copiez-le manuellement.","hi":"कॉपी नहीं किया जा सका - इसे मैन्युअल रूप से कॉपी करें।","id":"Tidak dapat menyalin — salin secara manual.","pt-BR":"Não foi possível copiar — copie manualmente.","ru":"Не удалось скопировать — скопируйте вручную.","ur":"کاپی نہیں کیا جا سکا — اسے دستی طور پر کاپی کریں۔","zh-CN":"无法复制 — 手动复制。"};

export function settings_git_webhook_copyerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
