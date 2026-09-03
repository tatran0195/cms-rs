import { getLocale } from '../runtime.js';

const translations = {"ar":"التراجع إلى الإصدار v{version}؟ سيعود موقعك المباشر إلى ذلك الإصدار.","bn":"v{version} এ রোল ব্যাক করবেন? আপনার লাইভ সাইট সেই সংস্করণে ফিরে যাবে।","de":"Rollback auf v{version}? Ihre Live-Site wird auf diese Version zurückgesetzt.","en":"Roll back to v{version}? Your live site will revert to that version.","es":"¿Volver a v{version}? Su sitio en vivo volverá a esa versión.","fr":"Revenir à v{version} ? Votre site en ligne reviendra à cette version.","hi":"v{version} पर वापस रोल करें? आपकी लाइव साइट उस संस्करण पर वापस आ जाएगी।","id":"Kembalikan ke v{version}? Situs aktif Anda akan kembali ke versi itu.","pt-BR":"Reverter para v{version}? Seu site ativo será revertido para essa versão.","ru":"Откатиться к v{version}? Ваш действующий сайт вернется к этой версии.","ur":"v{version} پر واپس جائیں؟ آپ کی لائیو سائٹ اس ورژن پر واپس آجائے گی۔","zh-CN":"回滚到 v{version}？您的实时网站将恢复到该版本。"};

export function deploy_rollback_confirmdesc(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
