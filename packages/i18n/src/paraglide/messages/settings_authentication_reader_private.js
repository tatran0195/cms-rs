import { getLocale } from '../runtime.js';

const translations = {"ar":"قرّاء خاصون","bn":"ব্যক্তিগত পাঠক","de":"Privatleser","en":"Private readers","es":"Lectores privados","fr":"Lecteurs privés","hi":"निजी पाठक","id":"Pembaca pribadi","pt-BR":"Leitores privados","ru":"Частные читатели","ur":"نجی قارئین","zh-CN":"私人读者"};

export function settings_authentication_reader_private(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
