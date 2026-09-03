import { getLocale } from '../runtime.js';

const translations = {"ar":"قارنّا ستة خيارات تخدم نوايا مختلفة: منصة توثيق مُدارة، ومساحة تحرير تعاونية، ومولدات مواقع ثابتة، ومنصة دورة حياة API. لم نعامل ظهور كلمة «العربية» في قائمة اللغات على أنه دليل كافٍ. بحثنا عن اتجاه الصفحة، وسلوك كتل المحتوى، وبنية اللغات، ووسوم hreflang، وسير التحرير، وملكية Markdown، ونموذج الاستضافة، والسعر المنشور. لم نختبر حسابًا مدفوعًا لدى كل منافس؛ عندما اعتمدنا على التوثيق الرسمي نقول ذلك صراحة.","bn":"Arabic page content","de":"Arabic page content","en":"قارنّا ستة خيارات تخدم نوايا مختلفة: منصة توثيق مُدارة، ومساحة تحرير تعاونية، ومولدات مواقع ثابتة، ومنصة دورة حياة API. لم نعامل ظهور كلمة «العربية» في قائمة اللغات على أنه دليل كافٍ. بحثنا عن اتجاه الصفحة، وسلوك كتل المحتوى، وبنية اللغات، ووسوم hreflang، وسير التحرير، وملكية Markdown، ونموذج الاستضافة، والسعر المنشور. لم نختبر حسابًا مدفوعًا لدى كل منافس؛ عندما اعتمدنا على التوثيق الرسمي نقول ذلك صراحة.","es":"Arabic page content","fr":"Arabic page content","hi":"Arabic page content","id":"Arabic page content","pt-BR":"Arabic page content","ru":"Arabic page content","ur":"Arabic page content","zh-CN":"Arabic page content"};

export function marketing_arabicseo_comparison_methodbody(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
