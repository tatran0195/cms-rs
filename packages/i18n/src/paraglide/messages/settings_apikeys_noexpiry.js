import { getLocale } from '../runtime.js';

const translations = {"ar":"بلا تاريخ انتهاء","bn":"কোনও মেয়াদ নেই","de":"Kein Ablaufdatum","en":"No expiration","es":"Sin caducidad","fr":"Sans expiration","hi":"कोई समाप्ति नहीं","id":"Tanpa kedaluwarsa","pt-BR":"Sem validade","ru":"Без срока действия","ur":"بغیر میعاد","zh-CN":"无到期时间"};

export function settings_apikeys_noexpiry(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
