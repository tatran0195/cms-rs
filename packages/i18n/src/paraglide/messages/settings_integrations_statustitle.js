import { getLocale } from '../runtime.js';

const translations = {"ar":"حالة الاتصال","bn":"সংযোগের অবস্থা","de":"Verbindungsstatus","en":"Connection status","es":"Estado de conexión","fr":"État de la connexion","hi":"कनेक्शन की स्थिति","id":"Status koneksi","pt-BR":"Status da conexão","ru":"Статус соединения","ur":"کنکشن کا اسٹیٹس","zh-CN":"连接状态"};

export function settings_integrations_statustitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
