import { getLocale } from '../runtime.js';

const translations = {"ar":"إضافة لغة غير مدرجة","bn":"তালিকাভুক্ত নয় এমন একটি ভাষা যোগ করুন","de":"Fügen Sie eine nicht aufgeführte Sprache hinzu","en":"Add a language not listed","es":"Agregar un idioma que no aparece en la lista","fr":"Ajouter une langue non répertoriée","hi":"वह भाषा जोड़ें जो सूचीबद्ध नहीं है","id":"Tambahkan bahasa yang tidak tercantum","pt-BR":"Adicione um idioma não listado","ru":"Добавить язык, которого нет в списке","ur":"ایسی زبان شامل کریں جو درج نہیں ہے۔","zh-CN":"添加未列出的语言"};

export function editor_addlanguage_custom(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
