import { getLocale } from '../runtime.js';

const translations = {"ar":"أدخل رابطًا صالحًا: https أو mailto أو tel أو ‎#anchor أو مسارًا يبدأ بـ /.","bn":"একটি বৈধ URL লিখুন: https, mailto, tel, #anchor, অথবা / দিয়ে শুরু হওয়া একটি পথ।","de":"Geben Sie eine gültige URL ein: https, mailto, tel, #anchor oder einen Pfad, der mit / beginnt.","en":"Enter a valid URL: https, mailto, tel, #anchor, or a path starting with /.","es":"Ingrese una URL válida: https, mailto, tel, #anchor o una ruta que comience con /.","fr":"Saisissez une URL valide : https, mailto, tel, #anchor ou un chemin commençant par /.","hi":"एक वैध यूआरएल दर्ज करें: https, mailto, tel, #anchor, या / से शुरू होने वाला पथ।","id":"Masukkan URL yang valid: https, mailto, tel, #anchor, atau jalur yang dimulai dengan /.","pt-BR":"Insira um URL válido: https, mailto, tel, #anchor ou um caminho começando com /.","ru":"Введите действительный URL-адрес: https, mailto, tel, #anchor или путь, начинающийся с /.","ur":"ایک درست URL درج کریں: https، mailto، tel، #anchor، یا / سے شروع ہونے والا راستہ۔","zh-CN":"输入有效的 URL：https、mailto、tel、#anchor 或以 / 开头的路径。"};

export function editor_link_invalid(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
