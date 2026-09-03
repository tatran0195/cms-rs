import { getLocale } from '../runtime.js';

const translations = {"ar":"يدعم سطرًا واحدًا من النص ورابطًا مضمّنًا واحدًا.","bn":"পাঠ্যের একটি লাইন এবং একটি ইনলাইন লিঙ্ক সমর্থন করে।","de":"Unterstützt eine einzelne Textzeile und einen Inline-Link.","en":"Supports a single line of text and one inline link.","es":"Admite una sola línea de texto y un enlace en línea.","fr":"Prend en charge une seule ligne de texte et un lien en ligne.","hi":"पाठ की एक पंक्ति और एक इनलाइन लिंक का समर्थन करता है।","id":"Mendukung satu baris teks dan satu tautan sebaris.","pt-BR":"Suporta uma única linha de texto e um link embutido.","ru":"Поддерживает одну строку текста и одну встроенную ссылку.","ur":"متن کی ایک لائن اور ایک ان لائن لنک کو سپورٹ کرتا ہے۔","zh-CN":"支持单行文本和一个内联链接。"};

export function settings_banner_message_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
