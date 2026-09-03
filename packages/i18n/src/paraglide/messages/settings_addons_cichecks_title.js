import { getLocale } from '../runtime.js';

const translations = {"ar":"فحوصات CI","bn":"সিআই চেক করে","de":"CI-Prüfungen","en":"CI checks","es":"comprobaciones de CI","fr":"Chèques CI","hi":"सीआई जाँच करता है","id":"pemeriksaan CI","pt-BR":"Verificações de CI","ru":"CI-проверки","ur":"CI چیک کرتا ہے۔","zh-CN":"CI 检查"};

export function settings_addons_cichecks_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
