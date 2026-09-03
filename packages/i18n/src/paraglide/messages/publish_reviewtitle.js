import { getLocale } from '../runtime.js';

const translations = {"ar":"مراجعة التغييرات","bn":"পরিবর্তনগুলি পর্যালোচনা করুন","de":"Überprüfen Sie die Änderungen","en":"Review changes","es":"Revisar cambios","fr":"Examiner les modifications","hi":"परिवर्तनों की समीक्षा करें","id":"Tinjau perubahan","pt-BR":"Revise as alterações","ru":"Просмотрите изменения","ur":"تبدیلیوں کا جائزہ لیں۔","zh-CN":"审查变更"};

export function publish_reviewtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
