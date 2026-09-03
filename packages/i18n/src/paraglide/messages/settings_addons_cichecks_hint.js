import { getLocale } from '../runtime.js';

const translations = {"ar":"شغّل فحوصات النشر قبل تفعيل لقطات توثيق جديدة.","bn":"নতুন ডক্স স্ন্যাপশট লাইভ হওয়ার আগে প্রকাশনা পরীক্ষা চালান।","de":"Führen Sie Veröffentlichungsprüfungen durch, bevor neue Dokument-Snapshots online gehen.","en":"Run publishing checks before new docs snapshots go live.","es":"Ejecute comprobaciones de publicación antes de que se publiquen nuevas instantáneas de documentos.","fr":"Exécutez des vérifications de publication avant la mise en ligne des nouveaux instantanés de documents.","hi":"नए दस्तावेज़ स्नैपशॉट लाइव होने से पहले प्रकाशन जाँच चलाएँ।","id":"Jalankan pemeriksaan penerbitan sebelum snapshot dokumen baru ditayangkan.","pt-BR":"Execute verificações de publicação antes que novos instantâneos de documentos sejam publicados.","ru":"Выполняйте проверку публикации перед публикацией новых снимков документов.","ur":"نئے دستاویزات کے اسنیپ شاٹس کے لائیو ہونے سے پہلے پبلشنگ چیکس چلائیں۔","zh-CN":"在新文档快照上线之前运行发布检查。"};

export function settings_addons_cichecks_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
