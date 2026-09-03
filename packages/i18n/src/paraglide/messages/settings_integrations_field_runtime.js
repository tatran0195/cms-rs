import { getLocale } from '../runtime.js';

const translations = {"ar":"بيئة البحث","bn":"সার্চ রানটাইম","de":"Suchlaufzeit","en":"Search runtime","es":"Tiempo de ejecución de búsqueda","fr":"Rechercher l'exécution","hi":"रनटाइम","id":"Cari waktu jalan","pt-BR":"Procurar o tempo de execução","ru":"Поисковое время","ur":"سرچ رن ٹائم","zh-CN":"搜索运行时间"};

export function settings_integrations_field_runtime(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
