import { getLocale } from '../runtime.js';

const translations = {"ar":"أرسل مشاهدات صفحات القرّاء إلى معرّف قياس GA4.","bn":"একটি GA4 পরিমাপ আইডিতে পাঠকের পৃষ্ঠাদর্শন পাঠান।","de":"Leserseitenaufrufe an eine GA4-Mess-ID senden.","en":"Send reader pageviews to a GA4 measurement ID.","es":"Envíe páginas vistas del lector a una ID de medición GA4.","fr":"Envoyez les pages vues du lecteur à un identifiant de mesure GA4.","hi":"पाठक पृष्ठदृश्य को GA4 माप आईडी पर भेजें।","id":"Kirim tayangan laman pembaca ke ID pengukuran GA4.","pt-BR":"Envie visualizações de página do leitor para um ID de medição GA4.","ru":"Отправляйте просмотры страниц читателей на идентификатор измерения GA4.","ur":"قارئین کے صفحہ ملاحظات کو GA4 پیمائشی ID پر بھیجیں۔","zh-CN":"将读者综合浏览量发送至 GA4 衡量 ID。"};

export function settings_analytics_ga4_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
