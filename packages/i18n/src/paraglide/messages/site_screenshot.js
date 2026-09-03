import { getLocale } from '../runtime.js';

const translations = {"ar":"لقطة شاشة","bn":"স্ক্রিনশট","de":"Screenshot","en":"screenshot","es":"captura de pantalla","fr":"capture d'écran","hi":"स्क्रीनशॉट","id":"tangkapan layar","pt-BR":"captura de tela","ru":"скриншот","ur":"اسکرین شاٹ","zh-CN":"截图"};

export function site_screenshot(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
