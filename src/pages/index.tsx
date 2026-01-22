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
                  Tu equipo puede empezar con un request sencillo para leer el
                  estado de las máquinas en tiempo real.
                </p>
                <div className={styles.apiHighlights}>
                  <p>
                    Autenticacion por API key, filtros por ubicacion y datos en
                    formato JSON.
                  </p>
                </div>
              </div>
              <div className="col col--7">
                <div className={styles.codeCard}>
                  <p className={styles.codeLabel}>GET /v1/machines</p>
                  <pre className={styles.codeBlock}>
                    <code>{`curl https://api.terpasolutions.com/v1/machines \\
  -H "Authorization: Bearer <API_KEY>"`}</code>
                  </pre>
                  <pre className={styles.codeBlock}>
                    <code>{`{
  "data": [
    {
      "id": "maq_2491",
      "status": "en_linea",
      "ultima_venta": "2026-01-21T16:24:00Z",
      "ingresos_hoy": 2540
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
