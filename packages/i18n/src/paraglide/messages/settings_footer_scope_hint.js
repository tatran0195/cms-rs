import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر اللغة التي يظهر لها سطر الحقوق هذا. اتركه فارغًا لاستخدام الافتراضي.","bn":"এই কপিরাইট লাইনটি কোন ভাষায় প্রযোজ্য তা চয়ন করুন৷ ডিফল্ট ব্যবহার করতে এটি খালি ছেড়ে দিন।","de":"Wählen Sie aus, für welche Sprache diese Urheberrechtslinie gilt. Lassen Sie es leer, um die Standardeinstellung zu verwenden.","en":"Choose which language this copyright line applies to. Leave it empty to use the default.","es":"Elija a qué idioma se aplica esta línea de derechos de autor. Déjelo vacío para usar el valor predeterminado.","fr":"Choisissez la langue à laquelle cette ligne de droits d'auteur s'applique. Laissez-le vide pour utiliser la valeur par défaut.","hi":"चुनें कि यह कॉपीराइट पंक्ति किस भाषा पर लागू होती है। डिफ़ॉल्ट का उपयोग करने के लिए इसे खाली छोड़ दें।","id":"Pilih bahasa apa yang berlaku untuk baris hak cipta ini. Biarkan kosong untuk menggunakan default.","pt-BR":"Escolha a qual idioma esta linha de direitos autorais se aplica. Deixe em branco para usar o padrão.","ru":"Выберите, к какому языку относится эта строка об авторских правах. Оставьте это поле пустым, чтобы использовать значение по умолчанию.","ur":"منتخب کریں کہ یہ کاپی رائٹ لائن کس زبان پر لاگو ہوتی ہے۔ ڈیفالٹ استعمال کرنے کے لیے اسے خالی چھوڑ دیں۔","zh-CN":"选择此版权行适用的语言。将其留空以使用默认值。"};

export function settings_footer_scope_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
