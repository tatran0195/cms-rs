import { getLocale } from '../runtime.js';

const translations = {"ar":"شارة صغيرة تظهر بجانب هذه الصفحة في الشريط الجانبي (مثل: جديد، تجريبي).","bn":"সাইডবারে এই পৃষ্ঠার পাশে একটি ছোট ব্যাজ দেখানো হয়েছে (যেমন নতুন, বিটা)।","de":"Ein kleines Abzeichen, das neben dieser Seite in der Seitenleiste angezeigt wird (z. B. Neu, Beta).","en":"A small badge shown next to this page in the sidebar (e.g. New, Beta).","es":"Una pequeña insignia que se muestra junto a esta página en la barra lateral (por ejemplo, Nuevo, Beta).","fr":"Un petit badge affiché à côté de cette page dans la barre latérale (par exemple Nouveau, Bêta).","hi":"साइडबार में इस पृष्ठ के बगल में एक छोटा बैज दिखाया गया है (उदाहरण के लिए नया, बीटा)।","id":"Lencana kecil ditampilkan di sebelah halaman ini di sidebar (mis. Baru, Beta).","pt-BR":"Um pequeno emblema mostrado próximo a esta página na barra lateral (por exemplo, Novo, Beta).","ru":"Рядом с этой страницей на боковой панели отображается небольшой значок (например, «Новое», «Бета»).","ur":"سائڈبار میں اس صفحہ کے آگے دکھایا گیا ایک چھوٹا بیج (جیسے نیا، بیٹا)۔","zh-CN":"此页面旁边侧栏中显示的小徽章（例如新版、测试版）。"};

export function editor_pagesettings_taghint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
