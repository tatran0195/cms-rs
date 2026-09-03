import { getLocale } from '../runtime.js';

const translations = {"ar":"لقطات شاشة","bn":"স্ক্রিনশট","de":"Screenshots","en":"screenshots","es":"capturas de pantalla","fr":"captures d'écran","hi":"स्क्रीनशॉट","id":"tangkapan layar","pt-BR":"capturas de tela","ru":"скриншоты","ur":"اسکرین شاٹس","zh-CN":"截图"};

export function site_screenshots(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
