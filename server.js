const express = require('express');
const swaggerUi = require('swagger-ui-express');
const YAML = require('yamljs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

// Load OpenAPI spec
const swaggerDocument = YAML.load(path.join(__dirname, 'openapi.yaml'));

// Swagger UI options
const swaggerOptions = {
  customCss: `
    .swagger-ui .topbar { display: none }
    .swagger-ui .info .title { font-size: 2em }
  `,
  customSiteTitle: 'SnoreMD API Documentation',
  swaggerOptions: {
    persistAuthorization: true,
    displayRequestDuration: true,
    filter: true,
    tryItOutEnabled: true,
  },
};

// Serve Swagger UI
app.use('/', swaggerUi.serve, swaggerUi.setup(swaggerDocument, swaggerOptions));

// Start server
app.listen(PORT, () => {
  console.log('');
  console.log('╔═══════════════════════════════════════════════════════════╗');
  console.log('║                                                           ║');
  console.log('║   SnoreMD API - Swagger UI                                ║');
  console.log('║                                                           ║');
  console.log('╠═══════════════════════════════════════════════════════════╣');
  console.log('║                                                           ║');
  console.log(`║   Swagger UI:  http://localhost:${PORT}                      ║`);
  console.log('║                                                           ║');
  console.log('╠═══════════════════════════════════════════════════════════╣');
  console.log('║                                                           ║');
  console.log('║   API Environments (use dropdown in Swagger UI):          ║');
  console.log('║   • LOCAL:   http://localhost:3000                        ║');
  console.log('║   • AWS DEV: https://gksonzdd9g.execute-api.us-east-1...  ║');
  console.log('║                                                           ║');
  console.log('║   To add/edit environments: update "servers" section      ║');
  console.log('║   in openapi.yaml and restart the server.                 ║');
  console.log('║                                                           ║');
  console.log('╠═══════════════════════════════════════════════════════════╣');
  console.log('║                                                           ║');
  console.log('║   Quick Start:                                            ║');
  console.log('║   1. Select environment from server dropdown              ║');
  console.log('║   2. Expand POST /auth/login                              ║');
  console.log('║   3. Click "Try it out"                                   ║');
  console.log('║   4. Use example: dr-smith / SecurePass123!               ║');
  console.log('║   5. Copy idToken from response                           ║');
  console.log('║   6. Click "Authorize" button (top right)                 ║');
  console.log('║   7. Paste token and click "Authorize"                    ║');
  console.log('║   8. Now you can test all other endpoints!                ║');
  console.log('║                                                           ║');
  console.log('╚═══════════════════════════════════════════════════════════╝');
  console.log('');
});
