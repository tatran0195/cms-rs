import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر تحميل اتصال Git","bn":"গিট সংযোগ লোড করা যায়নি","de":"Git-Verbindung konnte nicht geladen werden","en":"Git connection could not be loaded","es":"No se pudo cargar la conexión Git","fr":"La connexion Git n'a pas pu être chargée","hi":"Git कनेक्शन लोड नहीं किया जा सका","id":"Koneksi Git tidak dapat dimuat","pt-BR":"A conexão Git não pôde ser carregada","ru":"Не удалось загрузить соединение Git.","ur":"گٹ کنکشن لوڈ نہیں ہو سکا","zh-CN":"Git 连接无法加载"};

export function settings_git_workflow_loaderror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
