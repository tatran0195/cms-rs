import { getLocale } from '../runtime.js';

const translations = {"ar":"رمز لمرة واحدة","bn":"এককালীন কোড","de":"Einmaliger Code","en":"One-time code","es":"código de un solo uso","fr":"Code à usage unique","hi":"एक बार का कोड","id":"Kode satu kali","pt-BR":"Código único","ru":"Одноразовый код","ur":"ایک بار کا کوڈ","zh-CN":"一次性代码"};

export function auth_otp_label(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
