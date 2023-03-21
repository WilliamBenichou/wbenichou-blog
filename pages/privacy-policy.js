import fs from 'fs';
import { GetStaticProps } from 'next';
import { join } from 'path';

import Layout from '../components/Layout';
import SEO from '../components/SEO';

export default function PrivacyPolicy({ privacyPolicy }) {
  return (
    <Layout>
      <SEO title="Privacy Policy" />
      <div className="w-full px-4 md:px-6 lg:px-8 py-16 text-gray-900 dark:text-white">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl lg:text-5xl text-center mb-12">
            Privacy Policy
          </h1>
          <div dangerouslySetInnerHTML={{ __html: privacyPolicy }} />
        </div>
      </div>
    </Layout>
  );
}

export const getStaticProps = async () => {
    const filePath = path.join(process.cwd(), 'pages/privacy-policy.mdx');
    const privacyPolicy = fs.readFileSync(filePath, 'utf8');
  
    return {
      props: {
        privacyPolicy,
      },
  };
};