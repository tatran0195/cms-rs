import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث مصدر OpenAPI","bn":"OpenAPI উৎস রিফ্রেশ করা হয়েছে","de":"OpenAPI Quelle aktualisiert","en":"OpenAPI source refreshed","es":"OpenAPI fuente actualizada","fr":"Source OpenAPI actualisée","hi":"OpenAPI स्रोत ताज़ा किया गया","id":"OpenAPI sumber disegarkan","pt-BR":"OpenAPI fonte atualizada","ru":"Источник OpenAPI обновлен.","ur":"OpenAPI ذریعہ تازہ کیا گیا۔","zh-CN":"OpenAPI 源已刷新"};

export function settings_openapi_synced(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
