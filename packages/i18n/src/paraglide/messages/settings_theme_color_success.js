import { getLocale } from '../runtime.js';

const translations = {"ar":"النجاح","bn":"সফলতা","de":"Erfolg","en":"Success","es":"Éxito","fr":"Succès","hi":"सफलता","id":"Sukses","pt-BR":"Sucesso","ru":"Успех","ur":"کامیابی","zh-CN":"成功"};

export function settings_theme_color_success(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
