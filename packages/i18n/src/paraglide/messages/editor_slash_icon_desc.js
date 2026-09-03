import { getLocale } from '../runtime.js';

const translations = {"ar":"أيقونة مضمّنة بالاسم.","bn":"নামের একটি ইনলাইন আইকন।","de":"Ein Inline-Symbol mit Namen.","en":"An inline icon by name.","es":"Un icono en línea por nombre.","fr":"Une icône en ligne par nom.","hi":"नाम से एक इनलाइन आइकन.","id":"Ikon sebaris berdasarkan nama.","pt-BR":"Um ícone embutido por nome.","ru":"Встроенный значок по имени.","ur":"نام سے ایک ان لائن آئیکن۔","zh-CN":"按名称命名的内嵌图标。"};

export function editor_slash_icon_desc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
