import { getLocale } from '../runtime.js';

const translations = {"ar":"ملف HTML ثابت ZIP","bn":"স্ট্যাটিক HTML জিপ","de":"Statische HTML ZIP","en":"Static HTML ZIP","es":"Estático HTML ZIP","fr":"Statique HTML ZIP","hi":"स्थिर HTML ज़िप","id":"HTML ZIP statis","pt-BR":"ZIP HTML estático","ru":"Статический HTML ZIP","ur":"جامد HTML ZIP","zh-CN":"静态 HTML 邮政编码"};

export function settings_exports_workflow_format_html(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
