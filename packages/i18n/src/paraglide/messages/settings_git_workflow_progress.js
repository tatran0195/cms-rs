import { getLocale } from '../runtime.js';

const translations = {"ar":"تقدّم الاتصال","bn":"সংযোগের অগ্রগতি","de":"Verbindungsfortschritt","en":"Connection progress","es":"Progreso de la conexión","fr":"Progression de la connexion","hi":"कनेक्शन की प्रगति","id":"Kemajuan koneksi","pt-BR":"Progresso da conexão","ru":"Ход подключения","ur":"کنکشن کی پیشرفت","zh-CN":"连接进度"};

export function settings_git_workflow_progress(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
