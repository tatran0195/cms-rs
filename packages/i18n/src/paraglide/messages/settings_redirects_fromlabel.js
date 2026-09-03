import { getLocale } from '../runtime.js';

const translations = {"ar":"إعادة التوجيه من المسار","bn":"পথ থেকে পুনঃনির্দেশ","de":"Vom Pfad umleiten","en":"Redirect from path","es":"Redirigir desde la ruta","fr":"Redirection depuis le chemin","hi":"पथ से पुनर्निर्देशित करें","id":"Redirect dari jalur","pt-BR":"Redirecionar do caminho","ru":"Перенаправление с пути","ur":"راستے سے ری ڈائریکٹ کریں۔","zh-CN":"从路径重定向"};

export function settings_redirects_fromlabel(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
