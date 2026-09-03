import { getLocale } from '../runtime.js';

const translations = {"ar":"مجموعة شيفرات","bn":"কোড গ্রুপ","de":"Codegruppe","en":"Code group","es":"Grupo de códigos","fr":"Groupe de codes","hi":"कोड समूह","id":"Grup kode","pt-BR":"Grupo de códigos","ru":"Группа кодов","ur":"کوڈ گروپ","zh-CN":"代码组"};

export function editor_slash_codegroup_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
