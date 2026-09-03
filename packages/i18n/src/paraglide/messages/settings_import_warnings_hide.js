import { getLocale } from '../runtime.js';

const translations = {"ar":"إخفاء التحذيرات","bn":"সতর্কবার্তা লুকান","de":"Warnungen ausblenden","en":"Hide warnings","es":"Ocultar advertencias","fr":"Masquer les avertissements","hi":"चेतावनियाँ छिपाएँ","id":"Sembunyikan peringatan","pt-BR":"Ocultar avisos","ru":"Скрыть предупреждения","ur":"انتباہات چھپائیں۔","zh-CN":"隐藏警告"};

export function settings_import_warnings_hide(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
