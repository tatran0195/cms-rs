import { getLocale } from '../runtime.js';

const translations = {"ar":"أنت تعدّل سمة المسودة","bn":"খসড়া থিম সম্পাদনা করা হচ্ছে","de":"Bearbeiten des Designentwurfs","en":"Editing the draft theme","es":"Editando el borrador del tema","fr":"Modification du brouillon de thème","hi":"ड्राफ्ट विषय का संपादन","id":"Mengedit draf tema","pt-BR":"Editando o rascunho do tema","ru":"Редактирование черновика темы","ur":"ڈرافٹ تھیم میں ترمیم کرنا","zh-CN":"编辑草稿主题"};

export function settings_theme_drafttitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
