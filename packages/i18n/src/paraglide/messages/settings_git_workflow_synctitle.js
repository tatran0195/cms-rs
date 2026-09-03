import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد تغييرات المستودع ومزامنتها","bn":"আমদানি এবং সিঙ্ক সংগ্রহস্থল পরিবর্তন","de":"Importieren und synchronisieren Sie Repository-Änderungen","en":"Import and sync repository changes","es":"Importar y sincronizar cambios en el repositorio","fr":"Importer et synchroniser les modifications du référentiel","hi":"आयात और सिंक रिपॉजिटरी परिवर्तन","id":"Impor dan sinkronkan perubahan repositori","pt-BR":"Importar e sincronizar alterações do repositório","ru":"Импортировать и синхронизировать изменения репозитория","ur":"ذخیرہ کی تبدیلیاں درآمد اور مطابقت پذیر بنائیں","zh-CN":"导入并同步存储库更改"};

export function settings_git_workflow_synctitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
