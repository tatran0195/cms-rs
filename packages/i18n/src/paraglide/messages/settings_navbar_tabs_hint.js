import { getLocale } from '../runtime.js';

const translations = {"ar":"صف ثانوي من التبويبات الرئيسية أعلى الشريط الجانبي.","bn":"সাইডবারের উপরে শীর্ষ-স্তরের ট্যাবের একটি গৌণ সারি।","de":"Eine sekundäre Reihe mit Registerkarten der obersten Ebene über der Seitenleiste.","en":"A secondary row of top-level tabs above the sidebar.","es":"Una fila secundaria de pestañas de nivel superior encima de la barra lateral.","fr":"Une rangée secondaire d'onglets de niveau supérieur au-dessus de la barre latérale.","hi":"साइडबार के ऊपर शीर्ष-स्तरीय टैब की एक द्वितीयक पंक्ति।","id":"Baris sekunder tab tingkat atas di atas sidebar.","pt-BR":"Uma linha secundária de guias de nível superior acima da barra lateral.","ru":"Дополнительный ряд вкладок верхнего уровня над боковой панелью.","ur":"سائڈبار کے اوپر ٹاپ لیول ٹیبز کی ایک ثانوی قطار۔","zh-CN":"侧边栏上方的第二行顶级选项卡。"};

export function settings_navbar_tabs_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
