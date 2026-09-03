import { getLocale } from '../runtime.js';

const translations = {"ar":"انقل محتواك معك","bn":"আপনার সাথে আপনার সামগ্রী আনুন","de":"Bringen Sie Ihre Inhalte mit","en":"Bring your content with you","es":"Lleva tu contenido contigo","fr":"Apportez votre contenu avec vous","hi":"अपनी सामग्री अपने साथ लाएँ","id":"Bawalah konten Anda bersama Anda","pt-BR":"Leve seu conteúdo com você","ru":"Возьмите с собой свой контент","ur":"اپنا مواد اپنے ساتھ لائیں۔","zh-CN":"随身携带您的内容"};

export function settings_import_workspace_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
