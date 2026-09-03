import { getLocale } from '../runtime.js';

const translations = {"ar":"يحتفظ هذا المزوّد بشاشة الإعداد ودورة الحياة الحالية.","bn":"এই প্রদানকারী তার বিদ্যমান কনফিগারেশন স্ক্রিন এবং জীবনচক্র রাখে ।","de":"Dieser Anbieter behält seinen bestehenden Konfigurationsbildschirm und Lebenszyklus bei.","en":"This provider keeps its existing configuration screen and lifecycle.","es":"Este proveedor mantiene su pantalla de configuración y ciclo de vida existentes.","fr":"Ce fournisseur conserve son écran de configuration et son cycle de vie existants.","hi":"यह प्रदाता अपने मौजूदा कॉन्फ़िगरेशन स्क्रीन और लाइफसाइकिल को रखता है।","id":"Penyedia ini tetap menggunakan layar konfigurasi dan siklus hidup yang sudah ada.","pt-BR":"Este provedor mantém sua tela de configuração existente e ciclo de vida.","ru":"Этот провайдер сохраняет существующий экран конфигурации и жизненный цикл.","ur":"یہ فراہم کنندہ اپنی موجودہ کنفیگریشن اسکرین اور لائف سائیکل کو برقرار رکھتا ہے ۔","zh-CN":"此提供者保留其现有的配置屏幕和生命周期."};

export function settings_integrations_adapterowned(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
