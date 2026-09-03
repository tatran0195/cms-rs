import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار المستندات","bn":"ডক্স পাথ","de":"Docs-Pfad","en":"Docs path","es":"Ruta de documentos","fr":"Chemin d'accès aux documents","hi":"दस्तावेज़ पथ","id":"Jalur dokumen","pt-BR":"Caminho do Documentos","ru":"Путь к документам","ur":"دستاویزات کا راستہ","zh-CN":"文档路径"};

export function settings_git_workflow_docspath(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
