import type { ReactNode } from 'react';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  description: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Equipos',
    description: 'Administra usuarios, roles y permisos de tu equipo.',
  },
  {
    title: 'Máquinas',
    description: 'Estado de conexión y niveles de inventario.',
  },
  {
    title: 'Ventas',
    description: 'Transacciones, métodos de pago, productos vendidos.',
  },
  {
    title: 'Inventario',
    description: 'Niveles por espiral/posición de tus puntos de venta.',
  },
];

function Feature({ title, description }: FeatureItem) {
  return (
    <article className={styles.featureCard}>
      <Heading as="h3" className={styles.featureTitle}>
        {title}
      </Heading>
      <p className={styles.featureDescription}>{description}</p>
    </article>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className={styles.featuresIntro}>
          <Heading as="h2">Todo lo que necesitas para operar</Heading>
        </div>
        <div className={styles.featuresGrid}>
          {FeatureList.map((feature) => (
            <Feature key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
}
