import { getLocale } from '../runtime.js';

const translations = {"ar":"اللغة التي تُعرض عند عدم وجود تفضيل.","bn":"কোন পছন্দ সেট না থাকলে পরিবেশিত ভাষা।","de":"Die bereitgestellte Sprache, wenn keine Präferenz festgelegt ist.","en":"The language served when no preference is set.","es":"El idioma servido cuando no se establece ninguna preferencia.","fr":"Langue servie lorsqu'aucune préférence n'est définie.","hi":"कोई प्राथमिकता निर्धारित न होने पर परोसी जाने वाली भाषा.","id":"Bahasa yang disajikan ketika tidak ada preferensi yang ditetapkan.","pt-BR":"O idioma veiculado quando nenhuma preferência é definida.","ru":"Язык, используемый, если предпочтения не установлены.","ur":"کوئی ترجیح سیٹ نہ ہونے پر پیش کی جانے والی زبان۔","zh-CN":"未设置首选项时提供的语言。"};

export function editor_langsettings_makedefaulthint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
