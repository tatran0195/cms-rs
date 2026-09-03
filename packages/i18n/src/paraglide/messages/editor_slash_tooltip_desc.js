import { getLocale } from '../runtime.js';

const translations = {"ar":"نص مضمّن مع تلميح عند التمرير.","bn":"একটি হোভার টুলটিপ সহ ইনলাইন পাঠ্য।","de":"Inline-Text mit einem Hover-Tooltip.","en":"Inline text with a hover tooltip.","es":"Texto en línea con información sobre herramientas al pasar el cursor.","fr":"Texte en ligne avec une info-bulle de survol.","hi":"होवर टूलटिप के साथ इनलाइन टेक्स्ट।","id":"Teks sebaris dengan tooltip hover.","pt-BR":"Texto embutido com uma dica de ferramenta instantânea.","ru":"Встроенный текст с подсказкой при наведении.","ur":"ہوور ٹول ٹپ کے ساتھ ان لائن متن۔","zh-CN":"带有悬停工具提示的内嵌文本。"};

export function editor_slash_tooltip_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
