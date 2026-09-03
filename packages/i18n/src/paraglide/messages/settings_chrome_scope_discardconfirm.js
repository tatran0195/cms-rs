import { getLocale } from '../runtime.js';

const translations = {"ar":"تجاهل التغييرات","bn":"পরিবর্তন বাতিল করুন","de":"Änderungen verwerfen","en":"Discard changes","es":"Descartar cambios","fr":"Ignorer les modifications","hi":"परिवर्तन त्यागें","id":"Buang perubahan","pt-BR":"Descartar alterações","ru":"Отменить изменения","ur":"تبدیلیوں کو مسترد کریں۔","zh-CN":"放弃更改"};

export function settings_chrome_scope_discardconfirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
