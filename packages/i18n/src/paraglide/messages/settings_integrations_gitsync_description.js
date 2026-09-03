import { getLocale } from '../runtime.js';

const translations = {"ar":"استيراد المحتوى من GitHub أو GitLab أو مستودع Git عام.","bn":"GitHub, GitLab বা পাবলিক Git রিপোজিটরি থেকে কনটেন্ট আমদানি করুন।","de":"Importieren Sie Inhalte aus einem GitHub-, GitLab- oder öffentlichen Git-Repository.","en":"Import content from a GitHub, GitLab, or public Git repository.","es":"Importa contenido de un repositorio de GitHub, GitLab o Git público.","fr":"Importer le contenu d'un dépôt GitHub, GitLab ou Git public.","hi":"GitHub, GitLab, या सार्वजनिक Git भंडार से सामग्री आयात करें।","id":"Impor konten dari repositori GitHub, GitLab, atau Git publik.","pt-BR":"Importar conteúdo de um repositório GitHub, GitLab ou Git público.","ru":"Импорт контента из GitHub, GitLab или публичного хранилища Git.","ur":"GitHub، GitLab، یا عوامی Git مخزن سے مواد درآمد کریں ۔","zh-CN":"从 GitHub, GitLab 或公共 Git 仓库导入内容 。"};

export function settings_integrations_gitsync_description(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
