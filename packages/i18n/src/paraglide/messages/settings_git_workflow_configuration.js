import { getLocale } from '../runtime.js';

const translations = {"ar":"إعداد الاتصال","bn":"সংযোগ কনফিগারেশন","de":"Verbindungskonfiguration","en":"Connection configuration","es":"Configuración de conexión","fr":"Configuration de la connexion","hi":"कनेक्शन विन्यास","id":"Konfigurasi koneksi","pt-BR":"Configuração de conexão","ru":"Конфигурация подключения","ur":"کنکشن کنفیگریشن","zh-CN":"连接配置"};

export function settings_git_workflow_configuration(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
