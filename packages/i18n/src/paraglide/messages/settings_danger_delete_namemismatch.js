import { getLocale } from '../runtime.js';

const translations = {"ar":"الاسم غير مطابق — تم إلغاء الحذف.","bn":"নাম মেলেনি — মোছা বাতিল করা হয়েছে।","de":"Der Name stimmte nicht überein – Löschung abgebrochen.","en":"The name did not match — deletion cancelled.","es":"El nombre no coincide: se canceló la eliminación.","fr":"Le nom ne correspond pas — suppression annulée.","hi":"नाम मेल नहीं खाता - विलोपन रद्द किया गया।","id":"Namanya tidak cocok — penghapusan dibatalkan.","pt-BR":"O nome não corresponde – exclusão cancelada.","ru":"Имя не соответствует — удаление отменено.","ur":"نام مماثل نہیں — حذف کرنا منسوخ کر دیا گیا۔","zh-CN":"名称不匹配 — 删除已取消。"};

export function settings_danger_delete_namemismatch(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
