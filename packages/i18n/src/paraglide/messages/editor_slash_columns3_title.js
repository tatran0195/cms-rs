import { getLocale } from '../runtime.js';

const translations = {"ar":"3 أعمدة","bn":"3টি কলাম","de":"3 Spalten","en":"3 columns","es":"3 columnas","fr":"3 colonnes","hi":"3 कॉलम","id":"3 kolom","pt-BR":"3 colunas","ru":"3 столбца","ur":"3 کالم","zh-CN":"3 列"};

export function editor_slash_columns3_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
