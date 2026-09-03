import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت صياغة القسم.","bn":"খসড়া প্রণীত।","de":"Abschnitt entworfen.","en":"Section drafted.","es":"Sección redactada.","fr":"Article rédigé.","hi":"अनुभाग का मसौदा तैयार किया गया.","id":"Bagian dirancang.","pt-BR":"Seção elaborada.","ru":"Раздел составлен.","ur":"سیکشن کا مسودہ تیار کیا گیا۔","zh-CN":"部分起草。"};

export function editor_ai_sectiondrafted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
