import { getLocale } from '../runtime.js';

const translations = {"ar":"اسحب تغييرات المستودع إلى Nibleaf","bn":"সংগ্রহস্থলের পরিবর্তনগুলি Nibleaf এ টানুন","de":"Repository-Änderungen in Nibleaf ziehen","en":"Pull repository changes into Nibleaf","es":"Extraiga los cambios del repositorio a Nibleaf","fr":"Extrayez les modifications du référentiel dans Nibleaf","hi":"रिपॉजिटरी परिवर्तनों को Nibleaf में खींचें","id":"Tarik perubahan repositori ke Nibleaf","pt-BR":"Extraia as alterações do repositório para Nibleaf","ru":"Извлечь изменения репозитория в Nibleaf.","ur":"ذخیرہ کی تبدیلیوں کو Nibleaf میں کھینچیں","zh-CN":"将存储库更改拉入 Nibleaf"};

export function settings_git_workflow_nav_syncdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
