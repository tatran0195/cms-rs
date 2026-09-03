import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر في علامة تبويب المتصفح. يُفضّل استخدام صورة PNG أو SVG بحجم 48×48.","bn":"ব্রাউজার ট্যাবে দেখানো হয়েছে। একটি 48×48 PNG বা SVG সবচেয়ে ভালো কাজ করে।","de":"Wird im Browser-Tab angezeigt. Ein 48×48 PNG oder SVG funktioniert am besten.","en":"Shown in the browser tab. A 48×48 PNG or SVG works best.","es":"Se muestra en la pestaña del navegador. Un PNG o SVG de 48 × 48 funciona mejor.","fr":"Affiché dans l'onglet du navigateur. Un PNG ou SVG 48×48 fonctionne mieux.","hi":"ब्राउज़र टैब में दिखाया गया है. 48×48 पीएनजी या एसवीजी सबसे अच्छा काम करता है।","id":"Ditampilkan di tab browser. PNG atau SVG berukuran 48×48 berfungsi paling baik.","pt-BR":"Mostrado na guia do navegador. Um PNG ou SVG 48×48 funciona melhor.","ru":"Отображается на вкладке браузера. Лучше всего подойдет PNG или SVG размером 48×48.","ur":"براؤزر ٹیب میں دکھایا گیا ہے۔ ایک 48×48 PNG یا SVG بہترین کام کرتا ہے۔","zh-CN":"显示在浏览器选项卡中。 48×48 PNG 或 SVG 效果最佳。"};

export function settings_branding_favicon_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
