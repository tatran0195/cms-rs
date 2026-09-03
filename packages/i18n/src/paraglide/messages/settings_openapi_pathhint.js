import { getLocale } from '../runtime.js';

const translations = {"ar":"مقطع URL واحد مثل api-reference، ولا يمكن أن يتعارض مع صفحة توثيق.","bn":"একটি ইউআরএল সেগমেন্ট, যেমন api-রেফারেন্স। এটি একটি ডকুমেন্টেশন পৃষ্ঠা ওভারল্যাপ করতে পারে না।","de":"Ein URL-Segment, z. B. API-Referenz. Es darf keine Dokumentationsseite überlappen.","en":"One URL segment, such as api-reference. It cannot overlap a documentation page.","es":"Un segmento de URL, como api-reference. No puede superponerse a una página de documentación.","fr":"Un segment d'URL, tel que référence api. Il ne peut pas chevaucher une page de documentation.","hi":"एक यूआरएल खंड, जैसे एपीआई-संदर्भ। यह दस्तावेज़ीकरण पृष्ठ को ओवरलैप नहीं कर सकता.","id":"Satu segmen URL, seperti api-reference. Itu tidak boleh tumpang tindih dengan halaman dokumentasi.","pt-BR":"Um segmento de URL, como referência de API. Não pode sobrepor uma página de documentação.","ru":"Один сегмент URL-адреса, например ссылка на API. Он не может перекрывать страницу документации.","ur":"ایک URL سیگمنٹ، جیسے api-reference۔ یہ کسی دستاویزی صفحہ کو اوورلیپ نہیں کر سکتا۔","zh-CN":"一个 URL 段，例如 api-reference。它不能与文档页面重叠。"};

export function settings_openapi_pathhint(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
