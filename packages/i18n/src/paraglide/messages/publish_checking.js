import { getLocale } from '../runtime.js';

const translations = {"ar":"جارٍ التحقق من التغييرات…","bn":"পরিবর্তনগুলি পরীক্ষা করা হচ্ছে...","de":"Auf Änderungen prüfen…","en":"Checking for changes…","es":"Comprobando cambios...","fr":"Vérification des modifications…","hi":"परिवर्तनों की जाँच की जा रही है...","id":"Memeriksa perubahan…","pt-BR":"Verificando alterações…","ru":"Проверка изменений…","ur":"تبدیلیوں کی جانچ ہو رہی ہے…","zh-CN":"检查更改..."};

export function publish_checking(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
