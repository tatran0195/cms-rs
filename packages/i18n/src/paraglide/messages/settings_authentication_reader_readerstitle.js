import { getLocale } from '../runtime.js';

const translations = {"ar":"قرّاء مخصصون","bn":"নিবেদিতপ্রাণ পাঠক","de":"Engagierte Leser","en":"Dedicated readers","es":"Lectores dedicados","fr":"Des lecteurs dévoués","hi":"समर्पित पाठक","id":"Pembaca yang berdedikasi","pt-BR":"Leitores dedicados","ru":"Преданные читатели","ur":"سرشار قارئین","zh-CN":"专门的读者"};

export function settings_authentication_reader_readerstitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
