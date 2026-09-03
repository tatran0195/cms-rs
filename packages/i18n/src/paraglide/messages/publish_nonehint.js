import { getLocale } from '../runtime.js';

const translations = {"ar":"كل شيء محدّث — لا جديد لنشره.","bn":"আপনি আপ টু ডেট — প্রকাশ করার জন্য নতুন কিছু নেই৷","de":"Sie sind auf dem Laufenden – es gibt nichts Neues zu veröffentlichen.","en":"You're up to date — there's nothing new to publish.","es":"Estás actualizado: no hay nada nuevo que publicar.","fr":"Vous êtes à jour, il n'y a rien de nouveau à publier.","hi":"आप अद्यतित हैं - प्रकाशित करने के लिए कुछ भी नया नहीं है।","id":"Anda sudah mendapatkan informasi terkini — tidak ada hal baru yang dapat dipublikasikan.","pt-BR":"Você está atualizado – não há nada de novo para publicar.","ru":"Вы в курсе событий — нет ничего нового, что можно было бы публиковать.","ur":"آپ اپ ٹو ڈیٹ ہیں — شائع کرنے کے لیے کوئی نئی چیز نہیں ہے۔","zh-CN":"您已了解最新情况 - 没有任何新内容可发布。"};

export function publish_nonehint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
