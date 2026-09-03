import { getLocale } from '../runtime.js';

const translations = {"ar":"يجري بناء الإصدار v{version}…","bn":"বিল্ডিং v{version}…","de":"Gebäude v{version}…","en":"Building v{version}…","es":"Edificio v{version}…","fr":"Bâtiment v{version}…","hi":"बिल्डिंग v{version}…","id":"Membangun v{version}…","pt-BR":"Construindo v{version}…","ru":"Создание v{version}…","ur":"عمارت v{version}…","zh-CN":"构建 v{version}..."};

export function settings_git_pipeline_building(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
