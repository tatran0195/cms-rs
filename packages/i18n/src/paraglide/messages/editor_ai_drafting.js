import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ صياغة قسم…","bn":"একটি বিভাগ খসড়া করা হচ্ছে...","de":"Einen Abschnitt entwerfen…","en":"Drafting a section…","es":"Redactando una sección...","fr":"Rédaction d'une section…","hi":"एक अनुभाग का मसौदा तैयार किया जा रहा है...","id":"Menyusun bagian…","pt-BR":"Elaborando uma seção…","ru":"Составление раздела…","ur":"ایک سیکشن کا مسودہ تیار کیا جا رہا ہے…","zh-CN":"起草一个部分..."};

export function editor_ai_drafting(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
