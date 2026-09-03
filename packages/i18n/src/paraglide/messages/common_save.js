import { getLocale } from '../runtime.js';

const translations = {"ar":"حفظ التغييرات","bn":"পরিবর্তনগুলি সংরক্ষণ করুন","de":"Änderungen speichern","en":"Save changes","es":"Guardar cambios","fr":"Enregistrer les modifications","hi":"परिवर्तन सहेजें","id":"Simpan perubahan","pt-BR":"Salvar alterações","ru":"Сохранить изменения","ur":"تبدیلیاں محفوظ کریں۔","zh-CN":"保存更改"};

export function common_save(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
