// src/app/certifications/page.tsx

import {
  Column,
  Flex,
  Heading,
  Media,
  Text,
  Meta,
  Schema,
} from "@once-ui-system/core";
import { baseURL, certification, person } from "@/resources";
import React from "react";

export async function generateMetadata() {
  return Meta.generate({
    title: certification.title,
    description: certification.description,
    baseURL: baseURL,
    image: `/api/og/generate?title=${encodeURIComponent(certification.title)}`,
    path: certification.path,
  });
}

export default function Certification() {
  return (
    <Column maxWidth="m">
      <Schema
        as="webPage"
        baseURL={baseURL}
        title={certification.title}
        description={certification.description}
        path={certification.path}
        image={`/api/og/generate?title=${encodeURIComponent(certification.title)}`}
        author={{
          name: person.name,
          url: `${baseURL}${certification.path}`,
          image: `${baseURL}${person.avatar}`,
        }}
      />

      <Heading as="h1" variant="display-strong-l" marginBottom="xl">
        {certification.title}
      </Heading>

      <Column fillWidth gap="xl">
        {certification.items.map((cert, index) => (
          <Flex
            key={index}
            fillWidth
            padding="l"
            radius="l"
            border="neutral-medium"
            gap="24"
            wrap
          >
            {cert.image && (
              <Media
                src={cert.image.src}
                alt={cert.image.alt}
                radius="m"
                width={120}
                height={120}
              />
            )}

            <Column flex={1} gap="8">
              <Text variant="heading-strong-m">{cert.title}</Text>
              <Text variant="body-default-m" onBackground="neutral-weak">
                {cert.issuer} • {cert.date}
              </Text>
              {cert.credentialId && (
                <Text variant="body-default-s" onBackground="neutral-medium">
                  Credential ID: {cert.credentialId}
                </Text>
              )}
              {cert.link && (
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline"
                >
                  View Certificate
                </a>
              )}
            </Column>
          </Flex>
        ))}
      </Column>
    </Column>
  );
}
