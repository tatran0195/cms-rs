import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد آمن","bn":"নিরাপদে আমদানি করুন","de":"Sicher importieren","en":"Import safely","es":"Importar de forma segura","fr":"Importez en toute sécurité","hi":"सुरक्षित रूप से आयात करें","id":"Impor dengan aman","pt-BR":"Importe com segurança","ru":"Импортируйте безопасно","ur":"محفوظ طریقے سے درآمد کریں۔","zh-CN":"安全进口"};

export function settings_theme_importtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
