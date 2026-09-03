import { getLocale } from '../runtime.js';

const translations = {"ar":"أمر ينبغي للقارئ تجنبه.","bn":"পাঠকের কিছু এড়ানো উচিত।","de":"Etwas, das der Leser vermeiden sollte.","en":"Something the reader should avoid.","es":"Algo que el lector debería evitar.","fr":"Quelque chose que le lecteur devrait éviter.","hi":"पाठक को कुछ चीज़ों से बचना चाहिए।","id":"Sesuatu yang harus dihindari pembaca.","pt-BR":"Algo que o leitor deve evitar.","ru":"То, чего читателю следует избегать.","ur":"جس سے قاری کو پرہیز کرنا چاہیے۔","zh-CN":"读者应该避免的事情。"};

export function editor_slash_warning_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
