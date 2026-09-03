import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر اللغة التي ينطبق عليها نص البحث هذا. اتركه فارغًا لاستخدام الافتراضي.","bn":"এই অনুসন্ধান স্থানধারক কোন ভাষাতে প্রযোজ্য তা চয়ন করুন৷ ডিফল্ট ব্যবহার করতে এটি খালি ছেড়ে দিন।","de":"Wählen Sie aus, für welche Sprache dieser Suchplatzhalter gilt. Lassen Sie es leer, um die Standardeinstellung zu verwenden.","en":"Choose which language this search placeholder applies to. Leave it empty to use the default.","es":"Elija a qué idioma se aplica este marcador de posición de búsqueda. Déjelo vacío para usar el valor predeterminado.","fr":"Choisissez la langue à laquelle cet espace réservé de recherche s'applique. Laissez-le vide pour utiliser la valeur par défaut.","hi":"चुनें कि यह खोज प्लेसहोल्डर किस भाषा पर लागू होता है। डिफ़ॉल्ट का उपयोग करने के लिए इसे खाली छोड़ दें।","id":"Pilih bahasa yang digunakan untuk placeholder pencarian ini. Biarkan kosong untuk menggunakan default.","pt-BR":"Escolha a qual idioma este espaço reservado de pesquisa se aplica. Deixe em branco para usar o padrão.","ru":"Выберите, к какому языку относится этот заполнитель поиска. Оставьте это поле пустым, чтобы использовать значение по умолчанию.","ur":"منتخب کریں کہ یہ تلاش پلیس ہولڈر کس زبان پر لاگو ہوتا ہے۔ ڈیفالٹ استعمال کرنے کے لیے اسے خالی چھوڑ دیں۔","zh-CN":"选择此搜索占位符适用的语言。将其留空以使用默认值。"};

export function settings_search_scope_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
