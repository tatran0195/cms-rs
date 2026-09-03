import { getLocale } from '../runtime.js';

const translations = {"ar":"معرّف القياس","bn":"পরিমাপ আইডি","de":"Messung ID","en":"Measurement ID","es":"ID de medición","fr":"Numéro de mesure","hi":"मापन ID","id":"ID Pengukuran","pt-BR":"ID da medição","ru":"Измерительный идентификатор","ur":"پیمائش کا ID","zh-CN":"测量标识"};

export function settings_integrations_field_measurementid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
