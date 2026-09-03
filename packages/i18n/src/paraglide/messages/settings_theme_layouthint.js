import { getLocale } from '../runtime.js';

const translations = {"ar":"تحكّم في الكثافة وعرض القراءة والرأس والشريط الجانبي والتنقل والزوايا بخيارات آمنة.","bn":"রক্ষিত বিকল্পগুলির সাথে ঘনত্ব, পড়ার প্রস্থ, শিরোনাম, সাইডবার, নেভিগেশন আচরণ এবং রেডিআই নিয়ন্ত্রণ করুন।","de":"Steuern Sie Dichte, Lesebreite, Kopfzeile, Seitenleiste, Navigationsverhalten und Radien mit geschützten Optionen.","en":"Control density, reading width, header, sidebar, navigation behavior, and radii with guarded options.","es":"Controle la densidad, el ancho de lectura, el encabezado, la barra lateral, el comportamiento de navegación y los radios con opciones protegidas.","fr":"Contrôlez la densité, la largeur de lecture, l'en-tête, la barre latérale, le comportement de navigation et les rayons avec des options protégées.","hi":"संरक्षित विकल्पों के साथ घनत्व, पढ़ने की चौड़ाई, हेडर, साइडबार, नेविगेशन व्यवहार और त्रिज्या को नियंत्रित करें।","id":"Kontrol kepadatan, lebar pembacaan, header, sidebar, perilaku navigasi, dan jari-jari dengan opsi yang dilindungi.","pt-BR":"Densidade de controle, largura de leitura, cabeçalho, barra lateral, comportamento de navegação e raios com opções protegidas.","ru":"Управляйте плотностью, шириной чтения, заголовком, боковой панелью, поведением навигации и радиусами с помощью защищенных параметров.","ur":"حفاظتی اختیارات کے ساتھ کثافت، پڑھنے کی چوڑائی، ہیڈر، سائڈبار، نیویگیشن رویے، اور ریڈی کو کنٹرول کریں۔","zh-CN":"使用受保护的选项控制密度、阅读宽度、标题、侧边栏、导航行为和半径。"};

export function settings_theme_layouthint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
