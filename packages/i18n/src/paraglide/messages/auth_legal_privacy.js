import { getLocale } from '../runtime.js';

const translations = {"ar":"سياسة الخصوصية","bn":"গোপনীয়তা নীতি","de":"Datenschutzrichtlinie","en":"Privacy Policy","es":"Política de privacidad","fr":"Politique de confidentialité","hi":"गोपनीयता नीति","id":"Kebijakan Privasi","pt-BR":"Política de Privacidade","ru":"Политика конфиденциальности","ur":"رازداری کی پالیسی","zh-CN":"隐私政策"};

export function auth_legal_privacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
