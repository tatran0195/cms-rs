import { getLocale } from '../runtime.js';

const translations = {"ar":"تفعيل تسليم JWT","bn":"JWT হ্যান্ডঅফ সক্ষম করুন","de":"Aktivieren Sie die JWT-Übergabe","en":"Enable JWT handoff","es":"Habilitar transferencia JWT","fr":"Activer le transfert JWT","hi":"JWT हैंडऑफ़ सक्षम करें","id":"Aktifkan penyerahan JWT","pt-BR":"Ativar transferência de JWT","ru":"Включить передачу обслуживания JWT","ur":"JWT ہینڈ آف کو فعال کریں۔","zh-CN":"启用 JWT 切换"};

export function settings_authentication_reader_jwtenable(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
