import { getLocale } from '../runtime.js';

const translations = {"ar":"يجب ألا يقل {label} عن {min} أحرف","bn":"{label} কমপক্ষে {min} অক্ষর হতে হবে","de":"{label} muss mindestens {min} Zeichen umfassen","en":"{label} must be at least {min} characters","es":"{label} debe tener al menos {min} caracteres","fr":"{label} doit contenir au moins {min} caractères","hi":"{label} कम से कम {min} वर्ण होना चाहिए","id":"{label} minimal harus {min} karakter","pt-BR":"{label} deve ter pelo menos {min} caracteres","ru":"{label} должен содержать не менее {min} символов.","ur":"{label} کم از کم {min} حروف کا ہونا ضروری ہے","zh-CN":"{label} 必须至少有 {min} 个字符"};

export function validation_minlength(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
