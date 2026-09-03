import { getLocale } from '../runtime.js';

const translations = {"ar":"إعداد تسليم JWT","bn":"JWT হ্যান্ডঅফ কনফিগার করুন","de":"Konfigurieren Sie die JWT-Übergabe","en":"Configure JWT handoff","es":"Configurar la transferencia JWT","fr":"Configurer le transfert JWT","hi":"JWT हैंडऑफ़ कॉन्फ़िगर करें","id":"Konfigurasikan handoff JWT","pt-BR":"Configurar transferência de JWT","ru":"Настроить передачу обслуживания JWT","ur":"JWT ہینڈ آف کنفیگر کریں۔","zh-CN":"配置 JWT 切换"};

export function settings_authentication_reader_jwtconfigure(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
