import { getLocale } from '../runtime.js';

const translations = {"ar":"ينطبق على جميع اللغات — يُعدَّل من النطاق الافتراضي.","bn":"সমস্ত ভাষার জন্য প্রযোজ্য — ডিফল্ট সুযোগে সম্পাদনা করুন।","de":"Gilt für alle Sprachen – Bearbeitung im Standardbereich.","en":"Applies to all languages — edit in the Default scope.","es":"Se aplica a todos los idiomas: edite en el ámbito predeterminado.","fr":"S'applique à toutes les langues : modifiez dans la portée par défaut.","hi":"सभी भाषाओं पर लागू होता है - डिफ़ॉल्ट दायरे में संपादित करें।","id":"Berlaku untuk semua bahasa — edit dalam cakupan Default.","pt-BR":"Aplica-se a todos os idiomas — edite no escopo Padrão.","ru":"Применяется ко всем языкам — редактируйте в области «По умолчанию».","ur":"تمام زبانوں پر لاگو ہوتا ہے — پہلے سے طے شدہ دائرہ کار میں ترمیم کریں۔","zh-CN":"适用于所有语言 - 在默认范围内编辑。"};

export function settings_chrome_scope_globalfield(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
