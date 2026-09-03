import { getLocale } from '../runtime.js';

const translations = {"ar":"هيكل الصفحة","bn":"পৃষ্ঠা কাঠামো","de":"Seitenstruktur","en":"Structural shell","es":"Estructura de página","fr":"Structure de page","hi":"पृष्ठ संरचना","id":"Struktur halaman","pt-BR":"Estrutura da página","ru":"Структура страницы","ur":"صفحہ ساخت","zh-CN":"页面结构"};

export function settings_theme_shell(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
