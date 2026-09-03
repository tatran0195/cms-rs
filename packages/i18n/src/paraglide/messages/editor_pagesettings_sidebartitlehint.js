import { getLocale } from '../runtime.js';

const translations = {"ar":"تسمية قصيرة تظهر في التنقّل بدل العنوان الكامل.","bn":"সম্পূর্ণ শিরোনামের পরিবর্তে নেভিগেশনে একটি ছোট লেবেল দেখানো হয়েছে।","de":"Eine kurze Beschriftung, die in der Navigation anstelle des vollständigen Titels angezeigt wird.","en":"A short label shown in the navigation instead of the full title.","es":"Una etiqueta breve que se muestra en la navegación en lugar del título completo.","fr":"Une courte étiquette affichée dans la navigation au lieu du titre complet.","hi":"पूरे शीर्षक के बजाय नेविगेशन में एक छोटा लेबल दिखाया गया है।","id":"Label pendek ditampilkan di navigasi, bukan judul lengkap.","pt-BR":"Um pequeno rótulo mostrado na navegação em vez do título completo.","ru":"Короткая метка, отображаемая в навигации вместо полного заголовка.","ur":"مکمل عنوان کے بجائے نیویگیشن میں دکھایا گیا ایک مختصر لیبل۔","zh-CN":"导航中显示的短标签而不是完整标题。"};

export function editor_pagesettings_sidebartitlehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
