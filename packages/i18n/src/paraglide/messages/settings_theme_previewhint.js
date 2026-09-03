import { getLocale } from '../runtime.js';

const translations = {"ar":"افحص التنقل والبحث والمحتوى ثنائي الاتجاه والتنبيهات والشيفرة والبطاقات قبل الحفظ.","bn":"সংরক্ষণ করার আগে প্রতিনিধি নেভিগেশন, অনুসন্ধান, মিশ্র-দিকনির্দেশ সামগ্রী, কলআউট, কোড এবং কার্ডগুলি পরিদর্শন করুন।","de":"Überprüfen Sie vor dem Speichern repräsentative Navigation, Suche, Inhalte mit gemischten Richtungen, Beschriftungen, Code und Karten.","en":"Inspect representative navigation, search, mixed-direction content, callouts, code, and cards before saving.","es":"Revise la navegación, la búsqueda, el contenido bidireccional, los avisos, el código y las tarjetas antes de guardar.","fr":"Vérifiez la navigation, la recherche, le contenu bidirectionnel, les encadrés, le code et les cartes avant d'enregistrer.","hi":"सहेजने से पहले प्रतिनिधि नेविगेशन, खोज, मिश्रित-दिशा सामग्री, कॉलआउट, कोड और कार्ड का निरीक्षण करें।","id":"Periksa perwakilan navigasi, penelusuran, konten arah campuran, info, kode, dan kartu sebelum menyimpan.","pt-BR":"Inspecione a navegação representativa, a pesquisa, o conteúdo de direção mista, as legendas, o código e os cartões antes de salvar.","ru":"Перед сохранением проверьте репрезентативную навигацию, поиск, контент смешанного направления, выноски, код и карточки.","ur":"محفوظ کرنے سے پہلے نمائندہ نیویگیشن، تلاش، مخلوط سمت والے مواد، کال آؤٹس، کوڈ اور کارڈز کا معائنہ کریں۔","zh-CN":"保存前检查代表性导航、搜索、混合方向内容、标注、代码和卡片。"};

export function settings_theme_previewhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
