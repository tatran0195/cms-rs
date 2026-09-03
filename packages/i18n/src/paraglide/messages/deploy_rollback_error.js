import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر التراجع","bn":"রোল ব্যাক করতে পারেনি","de":"Konnte nicht zurückgesetzt werden","en":"Could not roll back","es":"No se pudo retroceder","fr":"Impossible de revenir en arrière","hi":"वापस रोल नहीं किया जा सका","id":"Tidak dapat memutar kembali","pt-BR":"Não foi possível reverter","ru":"Не удалось откатиться назад","ur":"پیچھے نہیں ہٹ سکا","zh-CN":"无法回滚"};

export function deploy_rollback_error(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
