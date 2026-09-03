import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء إعداد JWT","bn":"JWT কনফিগারেশন লুকান","de":"JWT-Konfiguration ausblenden","en":"Hide JWT configuration","es":"Ocultar configuración JWT","fr":"Masquer la configuration JWT","hi":"JWT कॉन्फ़िगरेशन छुपाएं","id":"Sembunyikan konfigurasi JWT","pt-BR":"Ocultar configuração de JWT","ru":"Скрыть конфигурацию JWT","ur":"JWT کنفیگریشن چھپائیں۔","zh-CN":"隐藏 JWT 配置"};

export function settings_authentication_reader_jwthide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
