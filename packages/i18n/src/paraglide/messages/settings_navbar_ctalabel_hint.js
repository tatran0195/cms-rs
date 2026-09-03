import { getLocale } from '../runtime.js';

const translations = {"ar":"الزر المميّز في الجهة الجانبية من شريط التنقّل.","bn":"নববারের ডানদিকে হাইলাইট করা বোতাম।","de":"Die hervorgehobene Schaltfläche rechts in der Navigationsleiste.","en":"The highlighted button on the right of the navbar.","es":"El botón resaltado a la derecha de la barra de navegación.","fr":"Le bouton en surbrillance à droite de la barre de navigation.","hi":"नेवबार के दाईं ओर हाइलाइट किया गया बटन।","id":"Tombol yang disorot di sebelah kanan bilah navigasi.","pt-BR":"O botão destacado à direita da barra de navegação.","ru":"Выделенная кнопка справа от панели навигации.","ur":"نیوبار کے دائیں جانب نمایاں کردہ بٹن۔","zh-CN":"导航栏右侧突出显示的按钮。"};

export function settings_navbar_ctalabel_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
