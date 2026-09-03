import { getLocale } from '../runtime.js';

const translations = {"ar":"تأليف متعدد اللغات وجاهز للاتجاه من اليمين إلى اليسار","bn":"বহুভাষিক এবং RTL-প্রস্তুত লেখা","de":"Mehrsprachiges und RTL-fähiges Authoring","en":"Multilingual and RTL-ready authoring","es":"Creación multilingüe y lista para RTL","fr":"Création multilingue et prête pour RTL","hi":"बहुभाषी और RTL-तैयार लेखन","id":"Penulisan multibahasa dan siap pakai RTL","pt-BR":"Autoria multilíngue e pronta para RTL","ru":"Многоязычная авторская работа и поддержка RTL","ur":"کثیر لسانی اور RTL - تیار تصنیف","zh-CN":"多语言和 RTL 就绪创作"};

export function auth_brand_multilingual(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
