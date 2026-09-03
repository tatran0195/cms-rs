import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذر تحديث مصدر OpenAPI.","bn":"OpenAPI উৎস রিফ্রেশ করা যায়নি।","de":"Die Quelle OpenAPI konnte nicht aktualisiert werden.","en":"Could not refresh the OpenAPI source.","es":"No se pudo actualizar la fuente OpenAPI.","fr":"Impossible d'actualiser la source OpenAPI.","hi":"OpenAPI स्रोत को ताज़ा नहीं किया जा सका.","id":"Tidak dapat menyegarkan sumber OpenAPI.","pt-BR":"Não foi possível atualizar a origem OpenAPI.","ru":"Не удалось обновить источник OpenAPI.","ur":"OpenAPI ذریعہ کو ریفریش نہیں کیا جا سکا۔","zh-CN":"无法刷新 OpenAPI 源。"};

export function settings_openapi_syncerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
