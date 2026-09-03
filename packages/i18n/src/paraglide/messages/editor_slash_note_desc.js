import { getLocale } from '../runtime.js';

const translations = {"ar":"ملاحظة معلوماتية محايدة.","bn":"একটি নিরপেক্ষ তথ্যপূর্ণ নোট।","de":"Eine neutrale Informationsnotiz.","en":"A neutral informational note.","es":"Una nota informativa neutral.","fr":"Une note d’information neutre.","hi":"एक तटस्थ सूचनात्मक नोट.","id":"Catatan informasi yang netral.","pt-BR":"Uma nota informativa neutra.","ru":"Нейтральная информационная заметка.","ur":"ایک غیر جانبدار معلوماتی نوٹ۔","zh-CN":"中立的信息说明。"};

export function editor_slash_note_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
