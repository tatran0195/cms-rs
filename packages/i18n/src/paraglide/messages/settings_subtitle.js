import { getLocale } from '../runtime.js';

const translations = {"ar":"إدارة حسابك ومساحة العمل والتكاملات والفوترة.","bn":"আপনার অ্যাকাউন্ট, ওয়ার্কস্পেস, ইন্টিগ্রেশন এবং বিলিং পরিচালনা করুন।","de":"Verwalten Sie Ihr Konto, Ihren Arbeitsbereich, Ihre Integrationen und Ihre Abrechnung.","en":"Manage your account, workspace, integrations, and billing.","es":"Administre su cuenta, espacio de trabajo, integraciones y facturación.","fr":"Gérez votre compte, votre espace de travail, vos intégrations et votre facturation.","hi":"अपना खाता, कार्यक्षेत्र, एकीकरण और बिलिंग प्रबंधित करें।","id":"Kelola akun, ruang kerja, integrasi, dan penagihan Anda.","pt-BR":"Gerencie sua conta, espaço de trabalho, integrações e faturamento.","ru":"Управляйте своей учетной записью, рабочим пространством, интеграциями и выставлением счетов.","ur":"اپنے اکاؤنٹ، ورک اسپیس، انضمام اور بلنگ کا نظم کریں۔","zh-CN":"管理您的帐户、工作区、集成和计费。"};

export function settings_subtitle(params, options) {
  const locale = options?.locale || getLocale();
  const template = translations[locale] ?? translations["en"] ?? "";
  if (!params) return template;
  return template.replace(/\{(\w+)\}/g, (_, k) => params[k] !== undefined ? String(params[k]) : `{${k}}`);
}
