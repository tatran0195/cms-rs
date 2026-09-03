import { getLocale } from '../runtime.js';

const translations = {"ar":"استخدم الصيغة owner/repo.","bn":"ফর্ম মালিক/রেপো ব্যবহার করুন.","de":"Verwenden Sie das Formular Eigentümer/Repo.","en":"Use the form owner/repo.","es":"Utilice el formulario propietario/repositorio.","fr":"Utilisez le formulaire propriétaire/dépôt.","hi":"प्रपत्र स्वामी/रेपो का उपयोग करें.","id":"Gunakan pemilik formulir/repo.","pt-BR":"Use o formulário proprietário/repo.","ru":"Используйте владельца формы/репозиторий.","ur":"فارم کے مالک/ریپو کا استعمال کریں۔","zh-CN":"使用所有者/存储库表单。"};

export function settings_import_mintlify_invalidrepo(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
