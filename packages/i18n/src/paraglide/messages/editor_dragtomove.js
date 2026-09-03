import { getLocale } from '../runtime.js';

const translations = {"ar":"اسحب للنقل","bn":"সরাতে টেনে আনুন","de":"Zum Verschieben ziehen","en":"Drag to move","es":"Arrastra para mover","fr":"Faites glisser pour déplacer","hi":"स्थानांतरित करने के लिए खींचें","id":"Seret untuk bergerak","pt-BR":"Arraste para mover","ru":"Перетащите, чтобы переместить","ur":"منتقل کرنے کے لیے گھسیٹیں۔","zh-CN":"拖动移动"};

export function editor_dragtomove(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
