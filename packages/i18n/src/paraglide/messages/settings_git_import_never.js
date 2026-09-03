import { getLocale } from '../runtime.js';

const translations = {"ar":"لم يتم الاستيراد بعد.","bn":"এখনো আমদানি করা হয়নি।","de":"Noch nicht importiert.","en":"Not imported yet.","es":"Aún no importado.","fr":"Pas encore importé.","hi":"अभी तक आयात नहीं किया गया.","id":"Belum diimpor.","pt-BR":"Ainda não foi importado.","ru":"Еще не импортирован.","ur":"ابھی تک درآمد نہیں ہوا۔","zh-CN":"还没进口。"};

export function settings_git_import_never(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
