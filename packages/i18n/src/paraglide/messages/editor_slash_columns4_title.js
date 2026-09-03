import { getLocale } from '../runtime.js';

const translations = {"ar":"4 أعمدة","bn":"4 কলাম","de":"4 Spalten","en":"4 columns","es":"4 columnas","fr":"4 colonnes","hi":"4 कॉलम","id":"4 kolom","pt-BR":"4 colunas","ru":"4 столбца","ur":"4 کالم","zh-CN":"4 列"};

export function editor_slash_columns4_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
