import { getLocale } from '../runtime.js';

const translations = {"ar":"اسحب لإعادة الترتيب","bn":"পুনরায় সাজাতে টেনে আনুন","de":"Zum Neuanordnen ziehen","en":"Drag to reorder","es":"Arrastra para reordenar","fr":"Faites glisser pour réorganiser","hi":"पुनः व्यवस्थित करने के लिए खींचें","id":"Tarik untuk menyusun ulang","pt-BR":"Arraste para reordenar","ru":"Перетащите, чтобы изменить порядок","ur":"دوبارہ ترتیب دینے کے لیے گھسیٹیں۔","zh-CN":"拖动以重新排序"};

export function editor_dragtoreorder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
