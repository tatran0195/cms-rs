import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل لونًا سداسيًا صالحًا مثل ‎#5546E8","bn":"একটি বৈধ হেক্স রঙ লিখুন যেমন #5546E8","de":"Geben Sie eine gültige Hex-Farbe ein, z. B. #5546E8","en":"Enter a valid hex colour like #5546E8","es":"Ingrese un color hexadecimal válido como #5546E8","fr":"Entrez une couleur hexadécimale valide comme #5546E8","hi":"#5546E8 जैसा वैध हेक्स रंग दर्ज करें","id":"Masukkan warna hex yang valid seperti #5546E8","pt-BR":"Insira uma cor hexadecimal válida como #5546E8","ru":"Введите действительный шестнадцатеричный цвет, например #5546E8.","ur":"ایک درست ہیکس رنگ درج کریں جیسے #5546E8","zh-CN":"输入有效的十六进制颜色，例如 #5546E8"};

export function settings_styling_invalidhex(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
