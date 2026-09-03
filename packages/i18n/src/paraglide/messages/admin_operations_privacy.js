import { getLocale } from '../runtime.js';

const translations = {"ar":"لا نعرض الأخطاء الخام أو محتوى المستندات أو مواقع المستودعات أو بيانات المزود أو بيانات الاعتماد.","bn":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","de":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","en":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","es":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","fr":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","hi":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","id":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","pt-BR":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","ru":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","ur":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed.","zh-CN":"Raw errors, document content, repository locations, provider payloads, and credentials are not exposed."};

export function admin_operations_privacy(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
