import { getLocale } from '../runtime.js';

const translations = {"ar":"خطأ TLS","bn":"TLS ত্রুটি","de":"TLS-Fehler","en":"TLS error","es":"error TLS","fr":"Erreur TLS","hi":"टीएलएस त्रुटि","id":"kesalahan TLS","pt-BR":"Erro TLS","ru":"Ошибка TLS","ur":"TLS خرابی۔","zh-CN":"TLS 错误"};

export function settings_domain_status_sslerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
