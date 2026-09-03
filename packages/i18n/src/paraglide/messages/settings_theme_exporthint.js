import { getLocale } from '../runtime.js';

const translations = {"ar":"ينزّل JSON حتميًا يضم السمة والرموز والخطوط والمظهر ومراجع الأصول الآمنة.","bn":"থিম, টোকেন, টাইপোগ্রাফি, চেহারা এবং নিরাপদ সম্পদের উল্লেখ সহ নির্ধারক JSON ডাউনলোড করে।","de":"Lädt deterministische JSON mit Thema, Token, Typografie, Erscheinungsbild und sicheren Asset-Referenzen herunter.","en":"Downloads deterministic JSON with the theme, tokens, typography, appearance, and safe asset references.","es":"Descargas deterministas JSON con el tema, tokens, tipografía, apariencia y referencias de activos seguros.","fr":"Télécharge le JSON déterministe avec le thème, les jetons, la typographie, l'apparence et les références d'actifs sûrs.","hi":"थीम, टोकन, टाइपोग्राफी, उपस्थिति और सुरक्षित संपत्ति संदर्भों के साथ नियतात्मक JSON डाउनलोड करता है।","id":"Unduh JSON deterministik dengan tema, token, tipografi, tampilan, dan referensi aset aman.","pt-BR":"Faz download de JSON determinístico com tema, tokens, tipografia, aparência e referências de ativos seguros.","ru":"Загружает детерминированный JSON с темой, токенами, типографикой, внешним видом и ссылками на безопасные активы.","ur":"تھیم، ٹوکنز، نوع ٹائپ، ظاہری شکل، اور محفوظ اثاثہ کے حوالہ جات کے ساتھ فیصلہ کن JSON ڈاؤن لوڈ کرتا ہے۔","zh-CN":"下载具有主题、令牌、排版、外观和安全资产引用的确定性 JSON。"};

export function settings_theme_exporthint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
