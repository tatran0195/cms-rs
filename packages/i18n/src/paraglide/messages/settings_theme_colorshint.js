import { getLocale } from '../runtime.js';

const translations = {"ar":"خصّص أدوارًا موجهة للقرّاء، لا قيمًا خاصة بمكوّن واحد. يجب اجتياز تباين AA قبل الحفظ.","bn":"পাঠক-মুখী ভূমিকা কাস্টমাইজ করুন, উপাদান-নির্দিষ্ট ব্র্যান্ড মান নয়। সংরক্ষণ করার আগে AA কন্ট্রাস্ট প্রয়োজন।","de":"Passen Sie leserorientierte Rollen an, nicht komponentenspezifische Markenwerte. Vor dem Speichern ist ein AA-Kontrast erforderlich.","en":"Customize reader-facing roles, not component-specific brand values. AA contrast is required before save.","es":"Personalice los roles de cara al lector, no los valores de marca de componentes específicos. Se requiere contraste AA antes de guardar.","fr":"Personnalisez les rôles destinés aux lecteurs, et non les valeurs de marque spécifiques aux composants. Le contraste AA est requis avant la sauvegarde.","hi":"पाठक-सामना वाली भूमिकाओं को अनुकूलित करें, न कि घटक-विशिष्ट ब्रांड मूल्यों को। सहेजने से पहले AA कंट्रास्ट आवश्यक है.","id":"Sesuaikan peran yang berhubungan dengan pembaca, bukan nilai merek khusus komponen. Kontras AA diperlukan sebelum menyimpan.","pt-BR":"Personalize funções voltadas para o leitor, não valores de marca específicos de componentes. O contraste AA é necessário antes de salvar.","ru":"Настраивайте роли читателей, а не ценности бренда для конкретных компонентов. Перед сохранением требуется контраст AA.","ur":"قارئین کا سامنا کرنے والے کرداروں کو حسب ضرورت بنائیں، نہ کہ جزو کے لیے مخصوص برانڈ کی اقدار۔ محفوظ کرنے سے پہلے AA کنٹراسٹ درکار ہے۔","zh-CN":"定制面向读者的角色，而不是特定于组件的品牌价值。保存前需要AA对比度。"};

export function settings_theme_colorshint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
