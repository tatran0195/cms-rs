import { getLocale } from '../runtime.js';

const translations = {"ar":"مراجعة الاتصال","bn":"সংযোগ পর্যালোচনা করুন","de":"Überprüfen Sie die Verbindung","en":"Review connection","es":"Revisar la conexión","fr":"Vérifier la connexion","hi":"कनेक्शन की समीक्षा करें","id":"Tinjau koneksi","pt-BR":"Revise a conexão","ru":"Проверить соединение","ur":"کنکشن کا جائزہ لیں۔","zh-CN":"检查连接"};

export function settings_git_workflow_reviewtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
