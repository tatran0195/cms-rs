import { getLocale } from '../runtime.js';

const translations = {"ar":"تم النسخ إلى الحافظة","bn":"ক্লিপবোর্ডে কপি করা হয়েছে","de":"In die Zwischenablage kopiert","en":"Copied to clipboard","es":"Copiado al portapapeles","fr":"Copié dans le presse-papiers","hi":"क्लिपबोर्ड पर कॉपी किया गया","id":"Disalin ke papan klip","pt-BR":"Copiado para a área de transferência","ru":"Скопировано в буфер обмена","ur":"کلپ بورڈ پر کاپی ہو گیا۔","zh-CN":"已复制到剪贴板"};

export function settings_git_webhook_copied(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
