import { getLocale } from '../runtime.js';

const translations = {"ar":"الرابط الذي يُفتح عند النقر على الشعار. الافتراضي هو الصفحة الرئيسية.","bn":"লোগোতে ক্লিক করলে যে URLটি খুলতে হবে। হোমপেজে ডিফল্ট।","de":"Die URL, die geöffnet werden soll, wenn auf das Logo geklickt wird. Standardmäßig wird die Startseite angezeigt.","en":"The URL to open when the logo is clicked. Defaults to the homepage.","es":"La URL que se abrirá cuando se haga clic en el logotipo. El valor predeterminado es la página de inicio.","fr":"L'URL à ouvrir lorsque l'on clique sur le logo. Par défaut, la page d'accueil.","hi":"लोगो पर क्लिक करने पर खुलने वाला यूआरएल। मुखपृष्ठ पर डिफ़ॉल्ट.","id":"URL yang akan dibuka ketika logo diklik. Defaultnya adalah beranda.","pt-BR":"O URL a ser aberto quando o logotipo é clicado. O padrão é a página inicial.","ru":"URL-адрес, который открывается при нажатии на логотип. По умолчанию главная страница.","ur":"لوگو پر کلک کرنے پر کھولنے والا URL۔ ہوم پیج پر پہلے سے طے شدہ۔","zh-CN":"单击徽标时要打开的 URL。默认为主页。"};

export function settings_branding_logohref_hint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
