/** @type {import('@eventcatalog/core/bin/eventcatalog.config').Config} */

// get __dirname
import { dirname } from 'path';
import { fileURLToPath } from 'url';
import { join } from 'path';

const __dirname = dirname(fileURLToPath(import.meta.url));

export default {
  title: 'OurLogix',
  tagline: 'A comprehensive logistics and shipping management company',
  organizationName: 'OurLogix',
  homepageLink: 'https://eventcatalog.dev/',
  editUrl: 'https://github.com/boyney123/eventcatalog-demo/edit/master',
  // By default set to false, add true to get urls ending in /
  trailingSlash: false,
  // Change to make the base url of the site different, by default https://{website}.com/docs,
  // changing to /company would be https://{website}.com/company/docs,
  base: '/',
  // Customize the logo, add your logo to public/ folder
  logo: {
    alt: 'EventCatalog Logo',
    src: '/logo.png',
    text: 'OurLogix',
  },
  docs: {
    sidebar: {
      // Should the sub heading be rendered in the docs sidebar?
      showPageHeadings: true,
    },
  },
  generators: [
    [
      '@eventcatalogtest/generator-asyncapi',
      {
        path: [join(__dirname, 'asyncapi-files', 'orders-service.yml'), join(__dirname, 'asyncapi-files', 'order-fulfillment-service.yml'), join(__dirname, 'asyncapi-files', 'inventory-service.yml')],
        domain: { id: 'orders', name: 'Orders', version: '0.0.1' },
      },
    ],
    [
      '@eventcatalogtest/generator-asyncapi',
      {
        path: [join(__dirname, 'asyncapi-files', 'payment-service.yml'), join(__dirname, 'asyncapi-files', 'fraud-detection-service.yml')],
        domain: { id: 'payment', name: 'Payment', version: '0.0.1' },
      },
    ],
  ],
};