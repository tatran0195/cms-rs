import { getLocale } from '../runtime.js';

const translations = {"ar":"مجموعة بطاقات","bn":"কার্ড গ্রুপ","de":"Kartengruppe","en":"Card group","es":"grupo de tarjetas","fr":"Groupe de cartes","hi":"कार्ड समूह","id":"Kelompok kartu","pt-BR":"Grupo de cartões","ru":"Группа карт","ur":"کارڈ گروپ","zh-CN":"卡组"};

export function editor_slash_cardgroup_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
