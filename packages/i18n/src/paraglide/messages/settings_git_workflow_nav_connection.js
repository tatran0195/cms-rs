import { getLocale } from '../runtime.js';

const translations = {"ar":"إعدادات الاتصال","bn":"সংযোগ সেটিংস","de":"Verbindungseinstellungen","en":"Connection settings","es":"Configuración de conexión","fr":"Paramètres de connexion","hi":"कनेक्शन सेटिंग्स","id":"Pengaturan koneksi","pt-BR":"Configurações de conexão","ru":"Настройки подключения","ur":"کنکشن کی ترتیبات","zh-CN":"连接设置"};

export function settings_git_workflow_nav_connection(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
