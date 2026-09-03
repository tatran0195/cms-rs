import { getLocale } from '../runtime.js';

const translations = {"ar":"عرض التحذيرات ({count})","bn":"সতর্কতা দেখান ({count})","de":"Warnungen anzeigen ({count})","en":"Show warnings ({count})","es":"Mostrar advertencias ({count})","fr":"Afficher les avertissements ({count})","hi":"चेतावनियाँ दिखाएँ ({count})","id":"Tampilkan peringatan ({count})","pt-BR":"Mostrar avisos ({count})","ru":"Показать предупреждения ({count})","ur":"انتباہات دکھائیں ({count})","zh-CN":"显示警告 ({count})"};

export function settings_import_warnings_show(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
