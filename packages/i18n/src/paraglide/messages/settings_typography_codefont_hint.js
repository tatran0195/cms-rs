import { getLocale } from '../runtime.js';

const translations = {"ar":"يُستخدم في كتل التعليمات البرمجية والتعليمات البرمجية المضمّنة.","bn":"কোড ব্লক এবং ইনলাইন কোড ব্যবহার করা হয়.","de":"Wird in Codeblöcken und Inline-Code verwendet.","en":"Used in code blocks and inline code.","es":"Utilizado en bloques de código y código en línea.","fr":"Utilisé dans les blocs de code et le code en ligne.","hi":"कोड ब्लॉक और इनलाइन कोड में उपयोग किया जाता है।","id":"Digunakan dalam blok kode dan kode sebaris.","pt-BR":"Usado em blocos de código e código embutido.","ru":"Используется в блоках кода и встроенном коде.","ur":"کوڈ بلاکس اور ان لائن کوڈ میں استعمال کیا جاتا ہے۔","zh-CN":"用于代码块和内联代码。"};

export function settings_typography_codefont_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
