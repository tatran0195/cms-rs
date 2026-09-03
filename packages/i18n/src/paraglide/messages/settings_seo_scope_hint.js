import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر اللغة التي تنطبق عليها إعدادات تحسين محركات البحث هذه.","bn":"এই SEO ডিফল্টগুলি কোন ভাষাতে প্রযোজ্য তা চয়ন করুন৷","de":"Wählen Sie aus, für welche Sprache diese SEO-Standardeinstellungen gelten.","en":"Choose which language these SEO defaults apply to.","es":"Elija a qué idioma se aplican estos SEO valores predeterminados.","fr":"Choisissez la langue à laquelle ces valeurs par défaut SEO s'appliquent.","hi":"चुनें कि ये SEO डिफ़ॉल्ट किस भाषा पर लागू होते हैं।","id":"Pilih bahasa apa yang digunakan oleh default SEO ini.","pt-BR":"Escolha a qual idioma esses padrões SEO se aplicam.","ru":"Выберите, к какому языку применяются эти значения по умолчанию SEO.","ur":"منتخب کریں کہ یہ SEO ڈیفالٹس کس زبان پر لاگو ہوتے ہیں۔","zh-CN":"选择这些 SEO 默认值适用的语言。"};

export function settings_seo_scope_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
