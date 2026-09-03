import { getLocale } from '../runtime.js';

const translations = {"ar":"لديك تغييرات غير محفوظة في هذا النطاق. سيؤدي التبديل إلى لغة أخرى إلى تجاهلها.","bn":"এই সুযোগে আপনার অসংরক্ষিত পরিবর্তন আছে। অন্য ভাষায় স্যুইচ করলে সেগুলি বাতিল হয়ে যাবে।","de":"Sie haben in diesem Bereich nicht gespeicherte Änderungen. Beim Wechsel zu einer anderen Sprache werden sie verworfen.","en":"You have unsaved changes in this scope. Switching to another language will discard them.","es":"Tiene cambios no guardados en este ámbito. Cambiar a otro idioma los descartará.","fr":"Vous avez des modifications non enregistrées dans cette étendue. Passer à une autre langue les supprimera.","hi":"आपके पास इस दायरे में सहेजे नहीं गए परिवर्तन हैं. दूसरी भाषा में स्विच करने से वे छूट जाएंगे।","id":"Anda memiliki perubahan yang belum disimpan dalam cakupan ini. Beralih ke bahasa lain akan membuangnya.","pt-BR":"Você tem alterações não salvas neste escopo. Mudar para outro idioma irá descartá-los.","ru":"У вас есть несохраненные изменения в этой области. Переключение на другой язык приведет к их отмене.","ur":"آپ کے پاس اس دائرہ کار میں غیر محفوظ شدہ تبدیلیاں ہیں۔ دوسری زبان میں سوئچ کرنے سے وہ ضائع ہو جائیں گے۔","zh-CN":"您在此范围内有未保存的更改。切换到另一种语言将会丢弃它们。"};

export function settings_chrome_scope_discarddescription(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
