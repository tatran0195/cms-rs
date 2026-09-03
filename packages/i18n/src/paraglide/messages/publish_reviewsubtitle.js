import { getLocale } from '../runtime.js';

const translations = {"ar":"قارن النشر التالي بالموقع الحالي.","bn":"বর্তমান লাইভ সাইটের সাথে পরবর্তী প্রকাশের তুলনা করুন।","de":"Vergleichen Sie die nächste Veröffentlichung mit der aktuellen Live-Site.","en":"Compare the next publish against the current live site.","es":"Compare la próxima publicación con el sitio activo actual.","fr":"Comparez la prochaine publication avec le site en ligne actuel.","hi":"अगले प्रकाशन की तुलना वर्तमान लाइव साइट से करें।","id":"Bandingkan publikasi berikutnya dengan situs langsung saat ini.","pt-BR":"Compare a próxima publicação com o site ativo atual.","ru":"Сравните следующую публикацию с текущим действующим сайтом.","ur":"موجودہ لائیو سائٹ سے اگلی اشاعت کا موازنہ کریں۔","zh-CN":"将下一个发布与当前的实时站点进行比较。"};

export function publish_reviewsubtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
