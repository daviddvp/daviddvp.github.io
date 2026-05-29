/**
 * CERTIFICACIONES
 * ---------------
 * `status: "obtenida" | "en-curso"` cambia la etiqueta visual.
 * `credentialUrl` (opcional) enlaza al badge/credencial oficial.
 */

export interface Certification {
  name: string;
  issuer: string;
  year: string;
  status: "obtenida" | "en-curso";
  credentialUrl?: string;
}

export const certifications: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    year: "2024",
    status: "obtenida",
    credentialUrl: "https://www.credly.com/badges/ff78611e-354d-41dc-999f-fa0d53bc4913",
  },
  {
    name: "GitHub Actions",
    issuer: "Udemy",
    year: "2024",
    status: "obtenida",
    credentialUrl: "https://www.udemy.com/certificate/UC-46344d01-bada-4432-86ae-798043c1093a/",
  },
  {
    name: "Kubernetes Application Developer: Application Deployment",
    issuer: "Pluralsight",
    year: "2024",
    status: "obtenida",
    credentialUrl: "https://app.pluralsight.com/achievements/share/606af6c9-e1f1-4ae2-b2a8-8a7b29c9d1ed",
  },
];
