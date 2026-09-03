import { getLocale } from '../runtime.js';

const translations = {"ar":"عمودان","bn":"2 কলাম","de":"2 Spalten","en":"2 columns","es":"2 columnas","fr":"2 colonnes","hi":"2 कॉलम","id":"2 kolom","pt-BR":"2 colunas","ru":"2 столбца","ur":"2 کالم","zh-CN":"2 列"};

export function editor_slash_columns2_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
