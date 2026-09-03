import { getLocale } from '../runtime.js';

const translations = {"ar":"لا توجد تغييرات منذ آخر نشر.","bn":"শেষ প্রকাশ থেকে কোন পরিবর্তন.","de":"Keine Änderungen seit der letzten Veröffentlichung.","en":"No changes since the last publish.","es":"No hay cambios desde la última publicación.","fr":"Aucun changement depuis la dernière publication.","hi":"अंतिम प्रकाशन के बाद से कोई परिवर्तन नहीं.","id":"Tidak ada perubahan sejak publikasi terakhir.","pt-BR":"Nenhuma alteração desde a última publicação.","ru":"Никаких изменений с момента последней публикации.","ur":"آخری اشاعت کے بعد سے کوئی تبدیلی نہیں ہوئی۔","zh-CN":"自上次发布以来没有任何变化。"};

export function publish_none(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
