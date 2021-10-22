import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: 'Web API',
    description: (
      <>
        Annictでは作品データや利用者の記録情報などを取得することができるWeb APIを提供しています。
      </>
    ),
  },
  {
    title: 'Userland',
    description: (
      <>
        AnnictのWeb APIを使用してアプリケーションを作成したら<a href="https://annict.com/userland" target="_blank">Userland</a>に公開しよう！
      </>
    ),
  },
  {
    title: 'コミュニティ',
    description: (
      <>
        Annictには開発者向けにコミュニケーションの場がいくつか設けられています。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
