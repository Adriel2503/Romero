# 🚀 Guía de Despliegue - Centro Médico

## Opciones de Despliegue

### 1. 🌐 **Netlify (Recomendado)**
La opción más fácil y confiable.

#### Opción A: Arrastrar y Soltar
```bash
npm run build
```
- Ve a [Netlify](https://netlify.com) y crea una cuenta
- Arrastra la carpeta `dist` a la zona de despliegue
- ¡Listo! Tu sitio estará disponible en unos minutos

#### Opción B: Conectar con GitHub
1. Sube tu código a GitHub
2. Conecta tu repositorio en Netlify
3. Configura estas variables de entorno:
   - `VITE_SUPABASE_URL`: Tu URL de Supabase
   - `VITE_SUPABASE_ANON_KEY`: Tu clave anónima de Supabase

### 2. ⚡ **Vercel**
```bash
# Instalar Vercel CLI
npm i -g vercel

# Desplegar
vercel
```

### 3. 📄 **GitHub Pages**
Ya configuré todo para ti. Solo necesitas:

1. **Configurar Secrets en GitHub:**
   - Ve a tu repositorio → Settings → Secrets and variables → Actions
   - Agrega estos secrets:
     - `VITE_SUPABASE_URL`: [Tu URL de Supabase]
     - `VITE_SUPABASE_ANON_KEY`: [Tu clave anónima]

2. **Habilitar GitHub Pages:**
   - Ve a Settings → Pages
   - Source: "GitHub Actions"

3. **Actualizar la configuración:**
   - En `astro.config.mjs` cambia `tu-usuario` por tu nombre de usuario
   - Cambia `/control` por el nombre de tu repositorio

4. **Hacer push:**
   ```bash
   git add .
   git commit -m "Configurar despliegue automático"
   git push origin main
   ```

### 4. 🔧 **Cloudflare Pages**
```bash
npm run build
```
- Ve a [Cloudflare Pages](https://pages.cloudflare.com)
- Conecta tu repositorio
- Comando de build: `npm run build`
- Carpeta de salida: `dist`

### 5. 🐳 **Docker (Avanzado)**
```bash
# Crear Dockerfile
echo "FROM node:18-alpine
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build
EXPOSE 3000
CMD [\"npm\", \"run\", \"preview\"]" > Dockerfile

# Construir y ejecutar
docker build -t centro-medico .
docker run -p 3000:3000 centro-medico
```

## 📋 Antes del Despliegue

### Verificar que todo funciona localmente:
```bash
# Instalar dependencias
npm install

# Construir el proyecto
npm run build

# Probar la build
npm run preview
```

### Variables de Entorno Necesarias:
```
VITE_SUPABASE_URL=tu-url-de-supabase
VITE_SUPABASE_ANON_KEY=tu-clave-anonima
```

## 🎯 Recomendaciones

1. **Para principiantes:** Usa Netlify (opción A)
2. **Para desarrolladores:** Usa Vercel o GitHub Pages
3. **Para empresas:** Usa Cloudflare Pages o AWS

## 🔧 Solución de Problemas

### Error: "Failed to load data"
- Verifica que las variables de entorno estén configuradas
- Asegúrate de que Supabase esté accessible desde tu dominio

### Error: "404 Not Found"
- Verifica la configuración de `base` en `astro.config.mjs`
- Asegúrate de que la ruta sea correcta

### Las gráficas no se muestran
- Verifica que Chart.js esté cargando correctamente
- Revisa la consola del navegador para errores

## 🆘 Ayuda

Si tienes problemas, revisa:
1. La consola del navegador (F12)
2. Los logs de despliegue
3. La configuración de variables de entorno

¡Tu aplicación con las 6 gráficas de insuficiencia renal está lista para desplegar! 🎉 