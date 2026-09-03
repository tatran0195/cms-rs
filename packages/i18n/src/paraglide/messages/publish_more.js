import { getLocale } from '../runtime.js';

const translations = {"ar":"+{count} أخرى","bn":"+{count} আরো","de":"+{count} mehr","en":"+{count} more","es":"+{count} más","fr":"+{count} plus","hi":"+{count} अधिक","id":"+{count} lainnya","pt-BR":"+{count} mais","ru":"+{count} ещё","ur":"+{count} مزید","zh-CN":"+{count} 更多"};

export function publish_more(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
