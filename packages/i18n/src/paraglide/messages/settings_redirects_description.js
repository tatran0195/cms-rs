import { getLocale } from '../runtime.js';

const translations = {"ar":"وجّه المسارات القديمة إلى مسارات جديدة لتبقى الروابط المحفوظة تعمل.","bn":"পুরানো পাথগুলিকে নতুনগুলিতে ফরোয়ার্ড করুন যাতে সংরক্ষিত লিঙ্কগুলি কাজ করতে থাকে।","de":"Leiten Sie alte Pfade an neue weiter, damit gespeicherte Links weiterhin funktionieren.","en":"Forward old paths to new ones so saved links keep working.","es":"Reenvíe rutas antiguas a otras nuevas para que los enlaces guardados sigan funcionando.","fr":"Transférez les anciens chemins vers les nouveaux afin que les liens enregistrés continuent de fonctionner.","hi":"पुराने पथों को नए पथों पर अग्रेषित करें ताकि सहेजे गए लिंक काम करते रहें।","id":"Meneruskan jalur lama ke jalur baru sehingga tautan tersimpan tetap berfungsi.","pt-BR":"Encaminhe caminhos antigos para novos para que os links salvos continuem funcionando.","ru":"Перенаправьте старые пути на новые, чтобы сохраненные ссылки продолжали работать.","ur":"پرانے راستوں کو نئے کی طرف آگے بڑھائیں تاکہ محفوظ کردہ لنکس کام کرتے رہیں۔","zh-CN":"将旧路径转发到新路径，以便保存的链接继续工作。"};

export function settings_redirects_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
