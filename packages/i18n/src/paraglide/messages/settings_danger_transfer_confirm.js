import { getLocale } from '../runtime.js';

const translations = {"ar":"هل تريد نقل الملكية إلى {name}؟ سيتحوّل دورك إلى مدير.","bn":"মালিকানা {name} কে হস্তান্তর করবেন? আপনার ভূমিকা অ্যাডমিনে পরিবর্তিত হবে।","de":"Eigentum an {name} übertragen? Ihre Rolle ändert sich in „Administrator“.","en":"Transfer ownership to {name}? Your role will change to admin.","es":"¿Transferir propiedad a {name}? Su rol cambiará a administrador.","fr":"Transférer la propriété à {name} ? Votre rôle deviendra administrateur.","hi":"स्वामित्व को {name} पर स्थानांतरित करें? आपकी भूमिका बदलकर व्यवस्थापक हो जाएगी.","id":"Transfer kepemilikan ke {name}? Peran Anda akan berubah menjadi admin.","pt-BR":"Transferir propriedade para {name}? Sua função mudará para administrador.","ru":"Передать право собственности на {name}? Ваша роль изменится на администратора.","ur":"ملکیت {name} کو منتقل کریں؟ آپ کا کردار ایڈمن میں بدل جائے گا۔","zh-CN":"将所有权转让给 {name}？您的角色将更改为管理员。"};

export function settings_danger_transfer_confirm(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
