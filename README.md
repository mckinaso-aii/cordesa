# Cordesa S.A. - Propuesta de Inteligencia de Negocio

## Descripción del Proyecto

Este proyecto presenta una propuesta profesional y modernizada para Cordesa S.A. basada en inteligencia de negocios, sin incluir la estructura de precios previa. La propuesta se alinea con los nuevos tiers comerciales, seleccionando automáticamente el que más se ajusta a los datos actuales del proyecto.

## Características Principales

- **Framework**: Next.js (versión igual a la del proyecto mora-real)
- **Hosting**: Vercel
- **Autenticación**: Protegida con contraseña (NEXT_PUBLIC_APP_PASSWORD) desde las variables de entorno de Vercel
- **Tema Visual**: Moderno, con duotono industrial:
  - Negro (#000000)
  - Amarillo Cordesa (#FFD500)
  - Blanco (#FFFFFF)
- **Layout**: Igual al de mora-real con hero simplificado y página única tipo propuesta comercial
- **Secciones**: Anidadas con navegación por scroll y efectos hover
- **Optimización**: Mobile-first en todas las páginas, tabs y referencias

## Estructura del Proyecto

### Secciones Incluidas

1. **Hero & Introducción**
   - Breve resumen del diagnóstico BI de Cordesa
   - Datos de ROI global, esfuerzo, y cuellos de botella clave

2. **Propuesta de Valor**
   - Visualización adaptada de métricas y oportunidades por departamento
   - Listado de automatizaciones sugeridas (según insights)
   - Casos de uso aplicables (extraer de insights de ventas, bodega, gerencia, etc.)

3. **Plan Recomendado**
   - Selección automática del plan que mejor se ajusta entre:
     - **Cortex** ($795/mes) si hay solo 1 departamento analizado, pocas automatizaciones y pocos documentos
     - **Neural** ($1495/mes) si hay al menos 2 departamentos, más de 5 automatizaciones sugeridas, y análisis en profundidad
     - **Singularity** ($2895/mes) si hay integración de múltiples áreas (ventas, logística, finanzas, postventa), más de 15 recomendaciones y análisis predictivo
   - Incluye solo ese plan, sin mostrar los otros como opciones

4. **Mapa de Implementación**
   - Divide la solución en fases (como ya lo tienes en el dashboard actual)
   - Muestra qué departamentos se cubrirían en qué etapa
   - Añade tiempos estimados

5. **Tecnología**
   - Menciona uso de Odoo (plan gratuito o empresarial según fit)
   - Integración con GTI para facturación electrónica
   - Stack técnico usado (Next.js, Tailwind, Chart.js, Mermaid, etc.)

6. **Contacto**
   - Sección con datos para continuar conversación
   - Opción para acceder con contraseña si deseas restringir contenido

## Datos de Referencia

Utiliza los insights, visualizaciones, y recomendaciones existentes en cordesa-bi-project, pero:
- Excluye por completo la tabla de precios anterior
- Usa los datos del análisis para determinar a qué nivel de plan se ajusta mejor Cordesa S.A. con base en el volumen de procesos, número de departamentos analizados, cantidad de insights y automatizaciones recomendadas

## Instalación y Desarrollo

```bash
# Instalar dependencias
npm install

# Ejecutar en modo desarrollo
npm run dev

# Construir para producción
npm run build

# Ejecutar en producción
npm start
```

## Variables de Entorno

Crear un archivo `.env.local` con:

```
NEXT_PUBLIC_APP_PASSWORD=tu_contraseña_aqui
```

## Despliegue en Vercel

1. Conectar el repositorio con Vercel
2. Configurar la variable de entorno `NEXT_PUBLIC_APP_PASSWORD` en el dashboard de Vercel
3. Desplegar automáticamente

## Tecnologías Utilizadas

- **Next.js 14**: Framework de React
- **TypeScript**: Tipado estático
- **Tailwind CSS**: Estilos utilitarios
- **Heroicons**: Iconografía
- **Chart.js**: Visualización de datos
- **Mermaid**: Diagramas de flujo

## Consideraciones Finales

- No usa emojis
- Idioma: 100% en español
- Incluye ejemplos visuales si el layout lo permite
- Reutiliza código y estilos ya existentes en mora-real
- Asegura que el componente visual y de navegación sea fluido
- Respeta contraste y paleta de color Cordesa
- Usa efectos hover y glass en toda la página
- Optimizado para móviles en todas las páginas, tabs y referencias

## Desarrollado por

**aii.cr** - Artificial Intelligence Integration

Para Cordesa S.A.