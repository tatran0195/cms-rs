import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر أي لون","bn":"যেকোন রঙ বেছে নিন","de":"Wählen Sie eine beliebige Farbe","en":"Pick any color","es":"Elige cualquier color","fr":"Choisissez n'importe quelle couleur","hi":"कोई भी रंग चुनें","id":"Pilih warna apa pun","pt-BR":"Escolha qualquer cor","ru":"Выберите любой цвет","ur":"کوئی بھی رنگ چنیں۔","zh-CN":"选择任何颜色"};

export function settings_styling_pickcolor(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
