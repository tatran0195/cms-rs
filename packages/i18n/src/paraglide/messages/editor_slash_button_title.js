import { getLocale } from '../runtime.js';

const translations = {"ar":"زر","bn":"বোতাম","de":"Knopf","en":"Button","es":"Botón","fr":"Bouton","hi":"बटन","id":"Tombol","pt-BR":"Botão","ru":"Кнопка","ur":"بٹن","zh-CN":"按钮"};

export function editor_slash_button_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
