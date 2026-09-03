import { getLocale } from '../runtime.js';

const translations = {"ar":"من اليمين إلى اليسار","bn":"ডান থেকে বাম","de":"Von rechts nach links","en":"Right to left","es":"De derecha a izquierda","fr":"De droite à gauche","hi":"दाएं से बाएं","id":"Kanan ke kiri","pt-BR":"Da direita para a esquerda","ru":"Справа налево","ur":"دائیں بائیں","zh-CN":"从右到左"};

export function editor_addlanguage_rtl(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
