import { getLocale } from '../runtime.js';

const translations = {"ar":"{count} قرّاء","bn":"{count} পাঠক","de":"{count} Leser","en":"{count} readers","es":"{count} lectores","fr":"{count} lecteurs","hi":"{count} पाठक","id":"{count} pembaca","pt-BR":"{count} leitores","ru":"{count} читателей","ur":"{count} قارئین","zh-CN":"{count} 读者"};

export function settings_authentication_reader_readercount(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
