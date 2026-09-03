import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حفظ إعداد JWT.","bn":"JWT কনফিগারেশন সংরক্ষিত।","de":"JWT Konfiguration gespeichert.","en":"JWT configuration saved.","es":"JWT configuración guardada.","fr":"Configuration JWT enregistrée.","hi":"JWT कॉन्फ़िगरेशन सहेजा गया.","id":"Konfigurasi JWT disimpan.","pt-BR":"JWT configuração salva.","ru":"Конфигурация JWT сохранена.","ur":"JWT کنفیگریشن محفوظ ہو گئی۔","zh-CN":"JWT 配置已保存。"};

export function settings_authentication_reader_jwtsaved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
