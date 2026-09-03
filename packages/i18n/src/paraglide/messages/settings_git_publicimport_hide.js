import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء الخيارات","bn":"অপশন লুকান","de":"Optionen ausblenden","en":"Hide options","es":"Ocultar opciones","fr":"Masquer les options","hi":"विकल्प छिपाएँ","id":"Sembunyikan opsi","pt-BR":"Ocultar opções","ru":"Скрыть параметры","ur":"اختیارات چھپائیں۔","zh-CN":"隐藏选项"};

export function settings_git_publicimport_hide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
