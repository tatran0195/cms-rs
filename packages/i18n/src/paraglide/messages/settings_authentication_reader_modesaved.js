import { getLocale } from '../runtime.js';

const translations = {"ar":"تم تحديث وضع الوصول.","bn":"অ্যাক্সেস মোড আপডেট করা হয়েছে।","de":"Zugriffsmodus aktualisiert.","en":"Access mode updated.","es":"Modo de acceso actualizado.","fr":"Mode d'accès mis à jour.","hi":"एक्सेस मोड अपडेट किया गया.","id":"Mode akses diperbarui.","pt-BR":"Modo de acesso atualizado.","ru":"Режим доступа обновлен.","ur":"رسائی موڈ کو اپ ڈیٹ کر دیا گیا۔","zh-CN":"访问模式已更新。"};

export function settings_authentication_reader_modesaved(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
