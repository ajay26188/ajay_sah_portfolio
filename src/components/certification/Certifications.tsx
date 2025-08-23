import { Column } from "@once-ui-system/core";

interface Certification {
  title: string;
  issuer: string;
  date: string;
  credentialUrl?: string;
}

interface CertificationsProps {
  certifications: Certification[];
}

export function Certifications({ certifications }: CertificationsProps) {
  return (
    <Column fillWidth gap="xl" marginBottom="40" paddingX="l">
      {certifications.map((cert, index) => (
        <div key={index} className="cert-card">
          <h3>{cert.title}</h3>
          <p><strong>Issuer:</strong> {cert.issuer}</p>
          <p><strong>Date:</strong> {cert.date}</p>
          {cert.credentialUrl && (
            <a href={cert.credentialUrl} target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          )}
        </div>
      ))}
    </Column>
  );
}
