import { getLocale } from '../runtime.js';

const translations = {"ar":"عناصر تحكم القرّاء غير نشطة","bn":"পাঠক নিয়ন্ত্রণ নিষ্ক্রিয়","de":"Lesersteuerungen sind inaktiv","en":"Reader controls are inactive","es":"Los controles del lector están inactivos","fr":"Les contrôles du lecteur sont inactifs","hi":"रीडर नियंत्रण निष्क्रिय हैं","id":"Kontrol pembaca tidak aktif","pt-BR":"Os controles do leitor estão inativos","ru":"Элементы управления считывателем неактивны","ur":"ریڈر کنٹرولز غیر فعال ہیں۔","zh-CN":"读卡器控件处于非活动状态"};

export function settings_authentication_reader_inactivetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
