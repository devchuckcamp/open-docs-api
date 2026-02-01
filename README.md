# SnoreMD API - Swagger UI

Interactive API documentation for the SnoreMD Medical Notes API.

## Quick Start

```bash
cd docs/swagger
npm install
npm start
```

Open http://localhost:3030 in your browser.

## How to Use

### 1. Get a Token

1. Expand **POST /auth/login**
2. Click **Try it out**
3. Select an example (e.g., "Dr. Smith")
4. Click **Execute**
5. Copy the `idToken` from the response

### 2. Authorize

1. Click the **Authorize** button (top right, lock icon)
2. Paste your token in the "Value" field
3. Click **Authorize**
4. Click **Close**

### 3. Test Endpoints

Now you can test any endpoint! Try these:

- **GET /patients** - List patients for your clinic
- **GET /patients/{patientId}/notes** - List notes
- **POST /patients/{patientId}/notes** - Create a note

## Test Credentials

| Username | Password | Clinic | Patients |
|----------|----------|--------|----------|
| dr-smith | SecurePass123! | Metro Sleep LA | pat-20001 to pat-20010 |
| dr-wilson | SecurePass123! | Advanced Sleep Chicago | pat-30001 to pat-30010 |
| dr-chen | SecurePass123! | Sleep Wellness NYC | pat-10001 to pat-10010 |

## API Environments

Use the **server dropdown** at the top of Swagger UI to switch between:

| Environment | URL |
|-------------|-----|
| Local Development | `http://localhost:3000` |
| AWS DEV | `https://gksonzdd9g.execute-api.us-east-1.amazonaws.com/dev` |

## Files

| File | Description |
|------|-------------|
| `openapi.yaml` | OpenAPI 3.0 specification |
| `server.js` | Express server for Swagger UI |
| `package.json` | Node.js dependencies |

## Customization

### Change Port

```bash
PORT=8080 npm start
```

### Add or Update API Environments

Edit the `servers` section in `openapi.yaml`:

```yaml
servers:
  - url: http://localhost:3000
    description: Local Development
  - url: https://gksonzdd9g.execute-api.us-east-1.amazonaws.com/dev
    description: AWS DEV
  - url: https://your-api.example.com/prod
    description: Production
```

Each server entry requires:
- `url` - The base URL for API requests
- `description` - Label shown in the Swagger UI dropdown

After editing, restart the server to apply changes.

### Edit API Spec

Modify `openapi.yaml` and restart the server.
