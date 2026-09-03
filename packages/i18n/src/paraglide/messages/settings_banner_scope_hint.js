import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر اللغة التي يظهر لها هذا الشريط. الحقول الفارغة تعود إلى الشريط الافتراضي.","bn":"এই ব্যানারটি কোন ভাষায় প্রযোজ্য তা চয়ন করুন৷ খালি ক্ষেত্রগুলি ডিফল্ট ব্যানারে ফিরে আসে।","de":"Wählen Sie aus, für welche Sprache dieses Banner gilt. Leere Felder greifen auf das Standardbanner zurück.","en":"Choose which language this banner applies to. Empty fields fall back to the default banner.","es":"Elija a qué idioma se aplica este banner. Los campos vacíos vuelven al banner predeterminado.","fr":"Choisissez la langue à laquelle cette bannière s'applique. Les champs vides reviennent à la bannière par défaut.","hi":"चुनें कि यह बैनर किस भाषा पर लागू होता है। खाली फ़ील्ड डिफ़ॉल्ट बैनर पर वापस आ जाती हैं।","id":"Pilih bahasa apa yang digunakan spanduk ini. Bidang kosong kembali ke spanduk default.","pt-BR":"Escolha a qual idioma este banner se aplica. Os campos vazios retornam ao banner padrão.","ru":"Выберите, к какому языку относится этот баннер. Пустые поля возвращаются к баннеру по умолчанию.","ur":"منتخب کریں کہ یہ بینر کس زبان پر لاگو ہوتا ہے۔ خالی فیلڈز ڈیفالٹ بینر پر واپس آ جاتے ہیں۔","zh-CN":"选择此横幅适用的语言。空字段会回退到默认横幅。"};

export function settings_banner_scope_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
