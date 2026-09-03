import { getLocale } from '../runtime.js';

const translations = {"ar":"اختر المستودع والفروع","bn":"সংগ্রহস্থল এবং শাখা নির্বাচন করুন","de":"Wählen Sie Repository und Zweige","en":"Choose repository and branches","es":"Elija repositorio y sucursales","fr":"Choisissez le référentiel et les branches","hi":"भंडार और शाखाएँ चुनें","id":"Pilih repositori dan cabang","pt-BR":"Escolha o repositório e as ramificações","ru":"Выберите репозиторий и ветки","ur":"ذخیرہ اور شاخوں کا انتخاب کریں۔","zh-CN":"选择存储库和分支"};

export function settings_git_workflow_choosetitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
