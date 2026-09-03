import { getLocale } from '../runtime.js';

const translations = {"ar":"المستودع","bn":"ভান্ডার","de":"Repository","en":"Repository","es":"Repositorio","fr":"Référentiel","hi":"भण्डार","id":"Gudang","pt-BR":"Repositório","ru":"Репозиторий","ur":"مخزن","zh-CN":"存储库"};

export function settings_git_workflow_step_repository(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
