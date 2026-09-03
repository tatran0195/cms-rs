import { getLocale } from '../runtime.js';

const translations = {"ar":"أبقِ المعاينات غير المنشورة متاحة للمراجعة قبل الإصدار.","bn":"প্রকাশের আগে পর্যালোচনার জন্য অপ্রকাশিত প্রিভিউ উপলব্ধ রাখুন।","de":"Halten Sie unveröffentlichte Vorschauen vor der Veröffentlichung zur Überprüfung bereit.","en":"Keep unpublished previews available for review before release.","es":"Mantenga vistas previas no publicadas disponibles para su revisión antes del lanzamiento.","fr":"Gardez les aperçus non publiés disponibles pour examen avant la publication.","hi":"रिलीज़ से पहले समीक्षा के लिए अप्रकाशित पूर्वावलोकन उपलब्ध रखें।","id":"Simpan pratinjau yang belum dipublikasikan untuk ditinjau sebelum dirilis.","pt-BR":"Mantenha as visualizações não publicadas disponíveis para revisão antes do lançamento.","ru":"Сохраняйте неопубликованные превью-версии доступными для просмотра перед выпуском.","ur":"ریلیز سے پہلے غیر مطبوعہ مناظر کو جائزے کے لیے دستیاب رکھیں۔","zh-CN":"在发布之前保留未发布的预览以供审核。"};

export function settings_addons_previewdeployments_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
