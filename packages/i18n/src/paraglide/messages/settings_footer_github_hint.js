import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط إلى مؤسستك أو مستودعك.","bn":"আপনার প্রতিষ্ঠান বা সংগ্রহস্থল লিঙ্ক.","de":"Link zu Ihrer Organisation oder Ihrem Repository.","en":"Link to your organisation or repository.","es":"Enlace a su organización o repositorio.","fr":"Lien vers votre organisation ou référentiel.","hi":"अपने संगठन या भंडार से लिंक करें.","id":"Tautan ke organisasi atau repositori Anda.","pt-BR":"Link para sua organização ou repositório.","ru":"Ссылка на вашу организацию или репозиторий.","ur":"اپنی تنظیم یا ذخیرہ سے لنک کریں۔","zh-CN":"链接到您的组织或存储库。"};

export function settings_footer_github_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
