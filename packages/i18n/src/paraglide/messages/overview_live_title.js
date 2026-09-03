import { getLocale } from '../runtime.js';

const translations = {"ar":"النطاق النشط","bn":"লাইভ ডোমেইন","de":"Live-Domäne","en":"Live domain","es":"Dominio en vivo","fr":"Domaine en direct","hi":"लाइव डोमेन","id":"Domain langsung","pt-BR":"Domínio ativo","ru":"Живой домен","ur":"لائیو ڈومین","zh-CN":"实时域名"};

export function overview_live_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
