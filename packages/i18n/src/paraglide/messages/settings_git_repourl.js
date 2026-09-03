import { getLocale } from '../runtime.js';

const translations = {"ar":"مسار المستودع","bn":"সংগ্রহস্থল পথ","de":"Repository-Pfad","en":"Repository path","es":"Ruta del repositorio","fr":"Chemin du référentiel","hi":"भंडार पथ","id":"Jalur repositori","pt-BR":"Caminho do repositório","ru":"Путь к репозиторию","ur":"ذخیرہ کا راستہ","zh-CN":"存储库路径"};

export function settings_git_repourl(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
