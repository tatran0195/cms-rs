import { getLocale } from '../runtime.js';

const translations = {"ar":"وحدة تقنية","bn":"Technical console","de":"Technical console","en":"Technical console","es":"Technical console","fr":"Technical console","hi":"Technical console","id":"Technical console","pt-BR":"Technical console","ru":"Technical console","ur":"Technical console","zh-CN":"Technical console"};

export function settings_theme_option_console(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
