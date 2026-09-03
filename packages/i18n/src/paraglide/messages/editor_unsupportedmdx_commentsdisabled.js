import { getLocale } from '../runtime.js';

const translations = {"ar":"يمكن ربط التعليقات بالمحتوى المدعوم حول كتل MDX للقراءة فقط.","bn":"শুধুমাত্র পঠনযোগ্য MDX ব্লকের আশেপাশে সমর্থিত সামগ্রীতে মন্তব্যগুলি অ্যাঙ্কর করা যেতে পারে৷","de":"Kommentare können an unterstützten Inhalten rund um schreibgeschützte MDX-Blöcke verankert werden.","en":"Comments can be anchored to supported content around read-only MDX blocks.","es":"Los comentarios se pueden anclar al contenido admitido alrededor de bloques MDX de solo lectura.","fr":"Les commentaires peuvent être ancrés au contenu pris en charge autour de blocs MDX en lecture seule.","hi":"टिप्पणियों को केवल पढ़ने योग्य MDX ब्लॉक के आसपास समर्थित सामग्री पर एंकर किया जा सकता है।","id":"Komentar dapat ditambatkan ke konten yang didukung di sekitar blok MDX yang hanya dapat dibaca.","pt-BR":"Os comentários podem ser ancorados ao conteúdo compatível em torno de blocos MDX somente leitura.","ru":"Комментарии могут быть привязаны к поддерживаемому контенту вокруг блоков MDX, доступных только для чтения.","ur":"تبصرے صرف پڑھنے کے لیے MDX بلاکس کے آس پاس تعاون یافتہ مواد پر اینکر کیے جا سکتے ہیں۔","zh-CN":"注释可以锚定到只读 MDX 块周围支持的内容。"};

export function editor_unsupportedmdx_commentsdisabled(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
