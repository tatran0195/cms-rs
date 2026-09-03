import { getLocale } from '../runtime.js';

const translations = {"ar":"شيفرة بإبراز التركيب.","bn":"সিনট্যাক্স-হাইলাইটেড কোড।","de":"Syntaxhervorgehobener Code.","en":"Syntax-highlighted code.","es":"Código resaltado por sintaxis.","fr":"Code mis en évidence par la syntaxe.","hi":"सिंटैक्स-हाइलाइट किया गया कोड.","id":"Kode yang disorot sintaksis.","pt-BR":"Código destacado pela sintaxe.","ru":"Код с выделенным синтаксисом.","ur":"نحو کو نمایاں کیا ہوا کوڈ۔","zh-CN":"语法突出显示的代码。"};

export function editor_slash_codeblock_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
