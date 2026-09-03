import { getLocale } from '../runtime.js';

const translations = {"ar":"وقت التشغيل المحلي","bn":"স্থানীয় রান সময়","de":"Lokale Laufzeit","en":"Local run time","es":"tiempo de ejecución local","fr":"Durée d'exécution locale","hi":"स्थानीय संचालन समय","id":"Waktu pengoperasian lokal","pt-BR":"Tempo de execução local","ru":"Локальное время выполнения","ur":"مقامی رن ٹائم","zh-CN":"本地运行时间"};

export function settings_exports_workflow_localtime(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
