import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحقق…","bn":"যাচাই করা হচ্ছে...","de":"Überprüfen…","en":"Verifying…","es":"Verificando…","fr":"Vérification…","hi":"सत्यापन किया जा रहा है...","id":"Memverifikasi…","pt-BR":"Verificando…","ru":"Проверка…","ur":"تصدیق ہو رہی ہے…","zh-CN":"正在验证..."};

export function auth_otp_verifying(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
