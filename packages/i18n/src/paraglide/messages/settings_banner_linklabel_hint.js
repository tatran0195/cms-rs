import { getLocale } from '../runtime.js';

const translations = {"ar":"دعوة إلى إجراء اختيارية تظهر في نهاية الشريط الإعلاني.","bn":"ব্যানারের শেষে দেখানো ঐচ্ছিক কল-টু-অ্যাকশন।","de":"Optionaler Call-to-Action, der am Ende des Banners angezeigt wird.","en":"Optional call-to-action shown at the end of the banner.","es":"Llamado a la acción opcional que se muestra al final del banner.","fr":"Appel à l’action facultatif affiché à la fin de la bannière.","hi":"वैकल्पिक कॉल-टू-एक्शन बैनर के अंत में दिखाया गया है।","id":"Ajakan bertindak opsional ditampilkan di akhir spanduk.","pt-BR":"Call to action opcional mostrada no final do banner.","ru":"Необязательный призыв к действию, показанный в конце баннера.","ur":"بینر کے آخر میں اختیاری کال ٹو ایکشن دکھایا گیا ہے۔","zh-CN":"横幅末尾显示可选的号召性用语。"};

export function settings_banner_linklabel_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
