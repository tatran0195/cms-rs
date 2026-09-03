import { getLocale } from '../runtime.js';

const translations = {"ar":"تعذّر حفظ أحدث مسودة قبل فتح المعاينة.","bn":"পূর্বরূপ খোলার আগে সর্বশেষ খসড়া সংরক্ষণ করা যায়নি৷","de":"Der neueste Entwurf konnte vor dem Öffnen der Vorschau nicht gespeichert werden.","en":"Could not save the latest draft before opening preview.","es":"No se pudo guardar el último borrador antes de abrir la vista previa.","fr":"Impossible d'enregistrer le dernier brouillon avant d'ouvrir l'aperçu.","hi":"पूर्वावलोकन खोलने से पहले नवीनतम ड्राफ्ट सहेजा नहीं जा सका.","id":"Tidak dapat menyimpan draf terbaru sebelum membuka pratinjau.","pt-BR":"Não foi possível salvar o rascunho mais recente antes de abrir a visualização.","ru":"Не удалось сохранить последний черновик перед открытием предварительного просмотра.","ur":"پیش منظر کھولنے سے پہلے تازہ ترین مسودہ محفوظ نہیں کیا جا سکا۔","zh-CN":"打开预览之前无法保存最新草稿。"};

export function editor_previewsaveerror(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
