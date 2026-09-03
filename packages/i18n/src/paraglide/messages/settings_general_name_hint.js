import { getLocale } from '../runtime.js';

const translations = {"ar":"اسم المشروع، يظهر في شريط التنقّل وعلامة تبويب المتصفح.","bn":"প্রকল্পের নাম, নেভিবার এবং ব্রাউজার ট্যাবে দেখানো হয়েছে।","de":"Der Name des Projekts, angezeigt in der Navigationsleiste und im Browser-Tab.","en":"The name of the project, shown in the navbar and browser tab.","es":"El nombre del proyecto, que se muestra en la barra de navegación y en la pestaña del navegador.","fr":"Le nom du projet, affiché dans la barre de navigation et dans l'onglet du navigateur.","hi":"प्रोजेक्ट का नाम, नेवबार और ब्राउज़र टैब में दिखाया गया है।","id":"Nama proyek, ditampilkan di bilah navigasi dan tab browser.","pt-BR":"O nome do projeto, mostrado na barra de navegação e na guia do navegador.","ru":"Имя проекта, отображаемое на панели навигации и вкладке браузера.","ur":"پروجیکٹ کا نام، نیوبار اور براؤزر ٹیب میں دکھایا گیا ہے۔","zh-CN":"项目的名称，显示在导航栏和浏览器选项卡中。"};

export function settings_general_name_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
