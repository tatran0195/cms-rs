import { getLocale } from '../runtime.js';

const translations = {"ar":"هذا القارئ","bn":"এই পাঠক","de":"dieser Leser","en":"this reader","es":"este lector","fr":"ce lecteur","hi":"यह पाठक","id":"pembaca ini","pt-BR":"este leitor","ru":"этот читатель","ur":"یہ قاری","zh-CN":"这位读者"};

export function settings_authentication_reader_thisreader(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
