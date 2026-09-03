import { getLocale } from '../runtime.js';

const translations = {"ar":"تم حفظ المستودع","bn":"সংগ্রহস্থল সংরক্ষিত","de":"Repository gespeichert","en":"Repository saved","es":"Repositorio guardado","fr":"Dépôt enregistré","hi":"भंडार सहेजा गया","id":"Repositori disimpan","pt-BR":"Repositório salvo","ru":"Репозиторий сохранен.","ur":"ذخیرہ محفوظ ہو گیا۔","zh-CN":"存储库已保存"};

export function settings_git_reposaved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
