import { getLocale } from '../runtime.js';

const translations = {"ar":"رابط إلى صفحة شركتك.","bn":"আপনার কোম্পানির পৃষ্ঠায় লিঙ্ক করুন।","de":"Link zu Ihrer Unternehmensseite.","en":"Link to your company page.","es":"Enlace a la página de su empresa.","fr":"Lien vers la page de votre entreprise.","hi":"अपनी कंपनी पेज से लिंक करें.","id":"Tautan ke halaman perusahaan Anda.","pt-BR":"Link para a página da sua empresa.","ru":"Ссылка на страницу вашей компании.","ur":"اپنی کمپنی کے صفحے سے لنک کریں۔","zh-CN":"链接到您的公司页面。"};

export function settings_footer_linkedin_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
