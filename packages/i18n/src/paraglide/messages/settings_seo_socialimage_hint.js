import { getLocale } from '../runtime.js';

const translations = {"ar":"تظهر عند مشاركة مستنداتك. يُوصى بحجم 1200×630.","bn":"আপনার ডক্স শেয়ার করা হলে দেখানো হয়। 1200×630 প্রস্তাবিত।","de":"Wird angezeigt, wenn Ihre Dokumente freigegeben werden. 1200×630 empfohlen.","en":"Shown when your docs are shared. 1200×630 recommended.","es":"Se muestra cuando se comparten sus documentos. Se recomienda 1200×630.","fr":"Affiché lorsque vos documents sont partagés. 1200×630 recommandé.","hi":"जब आपके दस्तावेज़ साझा किए जाते हैं तो दिखाया जाता है। 1200×630 अनुशंसित।","id":"Ditampilkan saat dokumen Anda dibagikan. 1200×630 direkomendasikan.","pt-BR":"Exibido quando seus documentos são compartilhados. 1200×630 recomendado.","ru":"Отображается, когда к вашим документам предоставлен общий доступ. Рекомендуется 1200×630.","ur":"آپ کے دستاویزات کا اشتراک ہونے پر دکھایا جاتا ہے۔ 1200×630 تجویز کردہ۔","zh-CN":"当您的文档被共享时显示。推荐1200×630。"};

export function settings_seo_socialimage_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
