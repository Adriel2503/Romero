# Centro de Monitoreo Médico 👨‍⚕️

Sistema de monitoreo y visualización de datos médicos para el control de hipertensión arterial y diabetes, desarrollado para la Universidad Nacional de Ingeniería.

## 🏥 Descripción

Este proyecto es una aplicación web desarrollada con **Astro** que permite visualizar y monitorear datos médicos en tiempo real. Incluye gráficas interactivas para el seguimiento de pacientes con hipertensión arterial y diabetes.

## ✨ Características

### 📊 Monitoreo de Hipertensión Arterial
- **Frecuencia Cardíaca**: Visualización con alertas de bradicardia
- **Intervalo RR**: Monitoreo de variabilidad cardíaca
- **Amplitud del Pico**: Control de calidad de señal con alertas
- **Índice de Calidad de Señal (SQI)**: Evaluación de la calidad de los datos

### 🩺 Monitoreo de Diabetes
- **Nivel de Glucosa**: Seguimiento con alertas de valores anómalos
- **Frecuencia Cardíaca**: Monitoreo complementario
- **Visualización de últimos 1000 registros**

### 🎯 Alertas Visuales
- Puntos rojos para identificar anomalías
- Detección automática de bradicardia
- Alertas de calidad de señal
- Indicadores de valores fuera de rango

## 🛠️ Tecnologías Utilizadas

- **[Astro](https://astro.build/)** - Framework web moderno
- **[Chart.js](https://www.chartjs.org/)** - Gráficas interactivas
- **[Supabase](https://supabase.com/)** - Base de datos y backend
- **TypeScript** - Tipado estático
- **CSS3** - Estilos responsivos

## 📦 Instalación

1. **Clonar el repositorio**
```bash
git clone [URL_DEL_REPOSITORIO]
cd control
```

2. **Instalar dependencias**
```bash
npm install
```

3. **Configurar variables de entorno**
```bash
# Crear archivo .env
SUPABASE_URL=tu_url_de_supabase
SUPABASE_ANON_KEY=tu_clave_anonima
```

4. **Ejecutar en desarrollo**
```bash
npm run dev
```

## 🚀 Comandos Disponibles

| Comando | Descripción |
|---------|-------------|
| `npm run dev` | Inicia servidor de desarrollo |
| `npm run build` | Construye la aplicación para producción |
| `npm run preview` | Previsualiza la build local |
| `npm run upload-data` | Carga datos de diabetes desde CSV |

## 📁 Estructura del Proyecto

```
src/
├── components/
│   ├── DiabetesCharts.astro      # Gráficas de diabetes
│   ├── HipertensionCharts.astro  # Gráficas de hipertensión
│   ├── Tabs.astro                # Sistema de pestañas
│   └── Footer.astro              # Pie de página
├── layouts/
│   └── Layout.astro              # Layout principal
├── lib/
│   ├── supabase.ts               # Configuración de Supabase
│   ├── uploadData.ts             # Script para cargar datos de diabetes
│   └── uploadHipertensionData.ts # Script para cargar datos de hipertensión
├── pages/
│   └── index.astro               # Página principal
└── assets/
    └── [archivos estáticos]
```

## 📊 Base de Datos

### Tabla: `diabetes`
- `patient_id`: ID del paciente
- `ts_utc`: Timestamp UTC
- `glucose_mg_dl`: Nivel de glucosa (mg/dL)
- `heart_rate_bpm`: Frecuencia cardíaca (BPM)
- `alarm`: Indicador de alarma (0/1)

### Tabla: `hipertension`
- `timestamp`: Marca de tiempo
- `hr_bpm`: Frecuencia cardíaca (BPM)
- `rr_ms`: Intervalo RR (ms)
- `a_pico_v`: Amplitud del pico (V)
- `sqi`: Índice de calidad de señal
- `hr_status`: Estado de frecuencia cardíaca
- `a_alert`: Alerta de amplitud (boolean)
- `sqi_alert`: Alerta de calidad (boolean)

## 🎨 Características de Visualización

### Gráficas Interactivas
- **Responsive**: Adaptables a diferentes tamaños de pantalla
- **Tooltips**: Información detallada al pasar el mouse
- **Zoom**: Navegación por los datos
- **Alertas visuales**: Puntos rojos para anomalías

### Rangos de Visualización
- **Glucosa**: 30-140 mg/dL
- **Frecuencia Cardíaca (Diabetes)**: 50-100 BPM
- **Frecuencia Cardíaca (Hipertensión)**: 30-120 BPM
- **Amplitud del Pico**: 0.6-1.6 V
- **SQI**: mínimo 0.3

## 🔧 Configuración de Datos

Para cargar datos nuevos:

1. **Datos de Diabetes**:
```bash
# Colocar archivo CSV en public/diabetes.csv
npm run upload-data
```

2. **Datos de Hipertensión**:
```bash
# Colocar archivo CSV como hipertension_output_100.csv
npx tsx src/lib/uploadHipertensionData.ts
```

## 🎯 Casos de Uso

- **Monitoreo hospitalario**: Seguimiento de pacientes en tiempo real
- **Investigación médica**: Análisis de patrones en datos biométricos
- **Educación médica**: Visualización de casos clínicos
- **Telemedicina**: Monitoreo remoto de pacientes

## 🏫 Información Académica

**Universidad Nacional de Ingeniería, Lima-Perú**
- Facultad de Ingeniería Eléctrica y Electrónica
- Curso: Introducción a la Ingeniería Biomédica - EE449N

## 🤝 Contribuciones

Las contribuciones son bienvenidas. Para contribuir:

1. Fork el proyecto
2. Crea una rama para tu feature (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Add some AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre un Pull Request

## 📝 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo `LICENSE` para más detalles.

## 📞 Contacto

Para preguntas o soporte relacionado con este proyecto, contacta a través de los canales oficiales de la Universidad Nacional de Ingeniería.

---

**Desarrollado con ❤️ para el monitoreo médico y la educación en ingeniería biomédica**
