import { getLocale } from '../runtime.js';

const translations = {"ar":"تمت إزالة مرجع OpenAPI من عمليات النشر القادمة","bn":"OpenAPI রেফারেন্স ভবিষ্যতের প্রকাশনা থেকে সরানো হয়েছে","de":"OpenAPI-Referenz aus zukünftigen Veröffentlichungen entfernt","en":"OpenAPI reference removed from future publishes","es":"OpenAPI referencia eliminada de futuras publicaciones","fr":"Référence OpenAPI supprimée des futures publications","hi":"OpenAPI संदर्भ भविष्य के प्रकाशनों से हटा दिया गया","id":"Referensi OpenAPI dihapus dari penerbitan mendatang","pt-BR":"Referência OpenAPI removida de publicações futuras","ru":"Ссылка OpenAPI удалена из будущих публикаций.","ur":"OpenAPI حوالہ مستقبل کی اشاعتوں سے ہٹا دیا گیا۔","zh-CN":"OpenAPI 参考从未来的发布中删除"};

export function settings_openapi_deleted(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
