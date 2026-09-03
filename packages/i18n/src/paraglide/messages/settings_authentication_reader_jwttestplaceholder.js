import { getLocale } from '../runtime.js';

const translations = {"ar":"الصق JWT اختبارًا موقّعًا؛ يُتحقّق منه ولا يُحفظ","bn":"একটি স্বাক্ষরিত পরীক্ষা আটকান JWT; এটা যাচাই করা হয় কিন্তু সংরক্ষণ করা হয় না","de":"Fügen Sie einen signierten Test ein JWT; Es wird validiert, aber nie gespeichert","en":"Paste a signed test JWT; it is validated but never stored","es":"Pegue una prueba firmada JWT; se valida pero nunca se almacena","fr":"Collez un test signé JWT ; il est validé mais jamais stocké","hi":"एक हस्ताक्षरित परीक्षण चिपकाएँ JWT; यह मान्य है लेकिन कभी संग्रहीत नहीं किया गया है","id":"Tempelkan tes yang ditandatangani JWT; itu divalidasi tetapi tidak pernah disimpan","pt-BR":"Cole um teste assinado JWT; é validado, mas nunca armazenado","ru":"Вставьте подписанный тест JWT; он проверяется, но никогда не сохраняется","ur":"ایک دستخط شدہ ٹیسٹ پیسٹ کریں JWT; یہ توثیق شدہ ہے لیکن کبھی ذخیرہ نہیں کیا جاتا ہے۔","zh-CN":"粘贴签名测试 JWT；它已被验证但从未存储"};

export function settings_authentication_reader_jwttestplaceholder(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
