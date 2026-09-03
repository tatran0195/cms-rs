import { getLocale } from '../runtime.js';

const translations = {"ar":"روابط مثبّتة تظهر أعلى الشريط الجانبي.","bn":"সাইডবারের শীর্ষে পিন করা লিঙ্কগুলি দেখানো হয়েছে৷","de":"Angepinnte Links werden oben in der Seitenleiste angezeigt.","en":"Pinned links shown at the top of the sidebar.","es":"Enlaces fijados que se muestran en la parte superior de la barra lateral.","fr":"Liens épinglés affichés en haut de la barre latérale.","hi":"पिन किए गए लिंक साइडबार के शीर्ष पर दिखाए गए हैं।","id":"Tautan yang disematkan ditampilkan di bagian atas bilah sisi.","pt-BR":"Links fixados mostrados na parte superior da barra lateral.","ru":"Закрепленные ссылки отображаются в верхней части боковой панели.","ur":"سائڈبار کے اوپری حصے میں دکھائے گئے پن کردہ لنکس۔","zh-CN":"固定链接显示在侧边栏的顶部。"};

export function settings_navbar_anchors_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
