import { getLocale } from '../runtime.js';

const translations = {"ar":"من اليسار إلى اليمين","bn":"বাম থেকে ডানে","de":"Von links nach rechts","en":"Left to right","es":"De izquierda a derecha","fr":"De gauche à droite","hi":"बाएं से दाएं","id":"Kiri ke kanan","pt-BR":"Da esquerda para a direita","ru":"Слева направо","ur":"بائیں سے دائیں","zh-CN":"从左到右"};

export function editor_addlanguage_ltr(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
