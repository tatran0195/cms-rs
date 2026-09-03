import { getLocale } from '../runtime.js';

const translations = {"ar":"مستودع GitHub","bn":"GitHub সংগ্রহস্থল","de":"GitHub-Repository","en":"GitHub repository","es":"GitHub repositorio","fr":"Dépôt GitHub","hi":"GitHub भंडार","id":"repositori GitHub","pt-BR":"Repositório GitHub","ru":"Репозиторий GitHub","ur":"GitHub ذخیرہ","zh-CN":"GitHub 存储库"};

export function settings_import_mintlify_repo(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
