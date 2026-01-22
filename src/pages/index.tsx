import type {ReactNode} from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import Layout from '@theme/Layout';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import Heading from '@theme/Heading';

import styles from './index.module.css';

function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx(styles.heroBanner)}>
      <div className="container">
        <div className={styles.heroContent}>
          <p className={styles.heroEyebrow}>Portal para Desarrolladores</p>
          <Heading as="h1" className={styles.heroTitle}>
            Terpa Solutions Developers
          </Heading>
          <p className={styles.heroSubtitle}>{siteConfig.tagline}</p>
          <div className={styles.buttons}>
            <Link className="button button--primary button--lg" to="/docs/intro">
              Comenzar
            </Link>
            <Link
              className={clsx('button button--outline button--lg', styles.secondaryButton)}
              href="https://app.terpasolutions.com/profile/api-keys">
              Obtener API Key
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default function Home(): ReactNode {
  const {siteConfig} = useDocusaurusContext();
  return (
      <Layout
        title={siteConfig.title}
        description="API REST para equipos, máquinas, ventas, inventario y suscripciones.">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
        <section className={styles.apiSection}>
          <div className="container">
            <div className="row">
              <div className="col col--5">
                <Heading as="h2">Ejemplo rápido</Heading>
                <p className={styles.sectionLead}>
                  Tu equipo puede empezar con un request sencillo para leer los
                  equipos a los que tiene acceso la API Key.
                </p>
                <div className={styles.apiHighlights}>
                  <p>Todos los servicios están en formato Rest / JSON.</p>
                </div>
              </div>
              <div className="col col--7">
                <div className={styles.codeCard}>
                  <p className={styles.codeLabel}>GET /api/v1/teams</p>
                  <pre className={styles.codeBlock}>
                    <code>{`curl https://app.terpasolutions.com/api/v1/teams \\
  -H "Authorization: Bearer <API_KEY>"`}</code>
                  </pre>
                  <pre className={styles.codeBlock}>
                    <code>{`{
  "teams": [
    {
      "id": "6f7e2c9b-3b6a-4a1e-9e2f-8f87b8d0f4a1",
      "name": "Equipo Monterrey",
      "slug": "equipo-monterrey-92nFw"
    }
  ]
}`}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </Layout>
  );
}
