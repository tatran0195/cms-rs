import { getLocale } from '../runtime.js';

const translations = {"ar":"إجابة موثقة من وثائق هذا الموقع","bn":"A grounded answer from this site’s documentation","de":"A grounded answer from this site’s documentation","en":"A grounded answer from this site’s documentation","es":"A grounded answer from this site’s documentation","fr":"A grounded answer from this site’s documentation","hi":"A grounded answer from this site’s documentation","id":"A grounded answer from this site’s documentation","pt-BR":"A grounded answer from this site’s documentation","ru":"A grounded answer from this site’s documentation","ur":"A grounded answer from this site’s documentation","zh-CN":"A grounded answer from this site’s documentation"};

export function site_groundedanswertitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
