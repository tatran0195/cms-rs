import { getLocale } from '../runtime.js';

const translations = {"ar":"صف هذا الإصدار (اختياري)","bn":"এই প্রকাশের বর্ণনা দিন (ঐচ্ছিক)","de":"Beschreiben Sie diese Version (optional)","en":"Describe this release (optional)","es":"Describe esta versión (opcional)","fr":"Décrire cette version (facultatif)","hi":"इस रिलीज़ का वर्णन करें (वैकल्पिक)","id":"Jelaskan rilis ini (opsional)","pt-BR":"Descreva esta versão (opcional)","ru":"Опишите этот выпуск (необязательно)","ur":"اس ریلیز کی وضاحت کریں (اختیاری)","zh-CN":"描述此版本（可选）"};

export function publish_messageplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
