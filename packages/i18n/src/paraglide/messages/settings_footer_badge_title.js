import { getLocale } from '../runtime.js';

const translations = {"ar":"إظهار شارة «صُنع باستخدام Nibleaf»","bn":"\"Nibleaf দিয়ে তৈরি\" ব্যাজ দেখান","de":"Abzeichen „Hergestellt mit Nibleaf“ anzeigen","en":"Show “Made with Nibleaf” badge","es":"Mostrar la insignia \"Hecho con Nibleaf\"","fr":"Afficher le badge « Fabriqué avec Nibleaf »","hi":"\"Nibleaf से निर्मित\" बैज दिखाएँ","id":"Tampilkan lencana “Dibuat dengan Nibleaf”.","pt-BR":"Mostrar selo “Feito com Nibleaf”","ru":"Показывать значок «Сделано с помощью Nibleaf»","ur":"\"Nibleaf کے ساتھ بنایا گیا\" بیج دکھائیں۔","zh-CN":"显示“使用 Nibleaf 制作”徽章"};

export function settings_footer_badge_title(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
