import { getLocale } from '../runtime.js';

const translations = {"ar":"إيقاف “{site}”؟","bn":"Take down “{site}”?","de":"Take down “{site}”?","en":"Take down “{site}”?","es":"Take down “{site}”?","fr":"Take down “{site}”?","hi":"Take down “{site}”?","id":"Take down “{site}”?","pt-BR":"Take down “{site}”?","ru":"Take down “{site}”?","ur":"Take down “{site}”?","zh-CN":"Take down “{site}”?"};

export function admin_sites_takedowntitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
