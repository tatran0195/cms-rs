import { getLocale } from '../runtime.js';

const translations = {"ar":"مزامنة أحدث التغييرات","bn":"সাম্প্রতিক পরিবর্তনগুলি সিঙ্ক করুন","de":"Synchronisieren Sie die neuesten Änderungen","en":"Sync latest changes","es":"Sincronizar los últimos cambios","fr":"Synchroniser les dernières modifications","hi":"नवीनतम परिवर्तन समन्वयित करें","id":"Sinkronkan perubahan terbaru","pt-BR":"Sincronize as alterações mais recentes","ru":"Синхронизировать последние изменения","ur":"تازہ ترین تبدیلیوں کو مطابقت پذیر بنائیں","zh-CN":"同步最新更改"};

export function settings_git_workflow_synclatest(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
