import { getLocale } from '../runtime.js';

const translations = {"ar":"إدارة إعداد JWT","bn":"JWT কনফিগারেশন পরিচালনা করুন","de":"Verwalten Sie die JWT-Konfiguration","en":"Manage JWT configuration","es":"Administrar la configuración JWT","fr":"Gérer la configuration JWT","hi":"JWT कॉन्फ़िगरेशन प्रबंधित करें","id":"Kelola konfigurasi JWT","pt-BR":"Gerenciar configuração de JWT","ru":"Управление конфигурацией JWT","ur":"JWT کنفیگریشن کا نظم کریں۔","zh-CN":"管理 JWT 配置"};

export function settings_authentication_reader_jwtmanage(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
