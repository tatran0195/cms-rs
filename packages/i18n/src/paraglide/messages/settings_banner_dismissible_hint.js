import { getLocale } from '../runtime.js';

const translations = {"ar":"السماح للقرّاء بإغلاق الشريط الإعلاني وتذكّر اختيارهم.","bn":"পাঠকদের ব্যানার বন্ধ এবং তাদের পছন্দ মনে রাখা যাক.","de":"Lassen Sie die Leser das Banner schließen und sich an ihre Wahl erinnern.","en":"Let readers close the banner and remember their choice.","es":"Deje que los lectores cierren el banner y recuerden su elección.","fr":"Laissez les lecteurs fermer la bannière et se souvenir de leur choix.","hi":"पाठकों को बैनर बंद करने दें और अपनी पसंद याद रखने दें।","id":"Biarkan pembaca menutup spanduk dan mengingat pilihan mereka.","pt-BR":"Deixe os leitores fecharem o banner e lembrarem de sua escolha.","ru":"Пусть читатели закроют баннер и запомнят свой выбор.","ur":"قارئین کو بینر بند کرنے دیں اور ان کی پسند کو یاد رکھیں۔","zh-CN":"让读者关闭横幅并记住他们的选择。"};

export function settings_banner_dismissible_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
