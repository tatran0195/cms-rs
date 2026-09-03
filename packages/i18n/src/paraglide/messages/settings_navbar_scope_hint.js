import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر اللغة التي تنطبق عليها تسميات شريط التنقّل هذه. الحقول الفارغة تعود إلى الإعداد الافتراضي.","bn":"এই নেভিবার লেবেলগুলি কোন ভাষায় প্রযোজ্য তা চয়ন করুন৷ খালি ক্ষেত্রগুলি ডিফল্ট কনফিগারেশনে ফিরে আসে।","de":"Wählen Sie aus, für welche Sprache diese Navigationsleistenbezeichnungen gelten. Leere Felder fallen auf die Standardkonfiguration zurück.","en":"Choose which language these navbar labels apply to. Empty fields fall back to the default configuration.","es":"Elija a qué idioma se aplican estas etiquetas de la barra de navegación. Los campos vacíos vuelven a la configuración predeterminada.","fr":"Choisissez la langue à laquelle ces étiquettes de barre de navigation s'appliquent. Les champs vides reviennent à la configuration par défaut.","hi":"चुनें कि ये नेवबार लेबल किस भाषा पर लागू होते हैं। खाली फ़ील्ड डिफ़ॉल्ट कॉन्फ़िगरेशन पर वापस आ जाती हैं।","id":"Pilih bahasa apa yang digunakan label navbar ini. Bidang kosong kembali ke konfigurasi default.","pt-BR":"Escolha a qual idioma esses rótulos da barra de navegação se aplicam. Os campos vazios retornam à configuração padrão.","ru":"Выберите, к какому языку относятся эти метки панели навигации. Пустые поля возвращают конфигурацию по умолчанию.","ur":"منتخب کریں کہ یہ نیوبار لیبل کس زبان پر لاگو ہوتے ہیں۔ خالی فیلڈز ڈیفالٹ کنفیگریشن میں واپس آجاتی ہیں۔","zh-CN":"选择这些导航栏标签适用的语言。空字段将回退到默认配置。"};

export function settings_navbar_scope_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
