# @upinn/upinn-secrets

Nativescript library for consuming protected secrets from the [Upinn](https://upinn.tech) Platform. It offers secure on-device authentication and retrieval of encrypted secrets.

# 🛠 Installation

### 1. Add ns
```javascript
npm install @upinn/upinn-secrets
```

### 2. Add gradle dependency on `Your_project/App_Resources/Android/app.gradle`
```gradle
repositories {
    mavenCentral()
    maven {
        url = uri("https://maven.pkg.github.com/upinn29/upinnsecretsandroid")
        credentials {
            username = "GITHUB_USER"
            password = "GITHUB_TOKEN"
        }
    }
}
```

### 3. Add SPM dependency on `your_project/nativescript.config.ts`
```typescript
ios: {
        SPMPackages: [
            {
                name: 'UpinnSecretsiOSLib',
                libs: ['UpinnSecretsiOSLib'],
                repositoryURL: 'https://github.com/upinn29/upinnsecretsios.git',
                version: 'Version',
            },
        ]
    }
```

## 🚀 Usage
### 1. Prepare your file `.bin`
- Place the `filename.bin` file in the directory:
    - `Android`: `App_Resources/Android/src/main/res/raw/filename.bin`
    - `iOS`: `App_Resources/iOS`

**_NOTE:_**  ⚠️ Do not rename the file. It must match the name you configure in the code.

### 2. Initialize
```typescript
import { UpinnSecrets } from '@upinn/upinn-secrets';
const secrets = new UpinnSecrets(
    true,
    ".bin"
);

this.secrets.login() //login ok res 200; 

const resSecret=this.secrets.get_secret("Secret_naem","version").toString(); //return string secret_value or number for error
```

- 🧰 Requirements
    - Android 5.0 (API 21) or higher.
    - iOS 16 or higher.


## License
This software is exclusively licensed for commercial use under contract with [upinn.tech](https://upinn.tech).

Its use, modification, or redistribution is not permitted without express authorization.

🔒 To obtain a license, contact: [support@upinn.tech](mailto:contacto@upinn.tech)
