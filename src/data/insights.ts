export interface DepartmentInsights {
  bottlenecks: string[];
  automationSuggestions: string[];
  aiRecommendations: string[];
  centralizationFixes: string[];
  softwareImprovements: string[];
  priority: 'alta' | 'media' | 'baja';
  estimatedROI: number; // Percentage
  estimatedEffort: number; // 1-10 scale
}

export interface ProcessMetrics {
  department: string;
  processName: string;
  currentTime: number; // Hours
  optimizedTime: number; // Hours
  errorRate: number; // Percentage
  automationPotential: number; // Percentage
}

// Contabilidad Insights
export const contabilidadInsights: DepartmentInsights = {
  bottlenecks: [
    "Dependencia total en una sola persona",
    "Uso intensivo de Excel por falta de adopción de Softland",
    "Falta de automatización en lectura de facturas electrónicas",
    "Carga duplicada de trabajo (manual → Softland)",
    "Cobros y comunicación con clientes son 100% manuales",
    "Conciliaciones bancarias fuera del sistema"
  ],
  automationSuggestions: [
    "Implementar GTI o lector XML para facturas electrónicas",
    "Sistema de cobros automatizados con links de pago",
    "Automatizar importación de facturas desde correo al sistema",
    "Generación automática de auxiliares desde Softland",
    "Panel de cobranza con recordatorios automáticos"
  ],
  aiRecommendations: [
    "OCR para lectura automática de facturas físicas",
    "Clasificación automática de gastos por categoría",
    "Predicción de flujo de caja basado en patrones históricos",
    "Detección automática de anomalías en conciliaciones",
    "Chatbot para consultas básicas de clientes sobre pagos"
  ],
  centralizationFixes: [
    "Usar Softland al 100% para todo el flujo contable",
    "Centralizar cobros en un solo sistema con trazabilidad",
    "Integrar bancos vía API para conciliaciones automáticas",
    "Unificar auxiliares y reportes en Softland"
  ],
  softwareImprovements: [
    "Aprovechar módulo bancario de Softland",
    "Implementar GTI para lectura de XML",
    "Configurar links de pago integrados",
    "Activar reportes automáticos de Softland"
  ],
  priority: 'alta',
  estimatedROI: 85,
  estimatedEffort: 7
};

// Recepción Insights
export const recepcionInsights: DepartmentInsights = {
  bottlenecks: [
    "Proceso de viáticos 100% manual",
    "Colaboradores no siguen reglas de facturación o montos",
    "Leads no se registran de forma estructurada (no CRM)",
    "Demoras en feedback semanal, reportes por WhatsApp",
    "Validación manual línea por línea de gastos"
  ],
  automationSuggestions: [
    "App de viáticos con validación de horarios, montos, reglas",
    "CRM para leads con formulario digital",
    "Automatización de reportes en PDF",
    "Integración de Facebook/WhatsApp con formularios",
    "Validación automática de datos fiscales"
  ],
  aiRecommendations: [
    "OCR para validación automática de facturas",
    "Clasificación automática de gastos por categoría",
    "Predicción de patrones de gasto por colaborador",
    "Análisis de sentimiento en leads de redes sociales",
    "Recomendaciones automáticas de contenido para redes"
  ],
  centralizationFixes: [
    "Unificar control de viáticos en plataforma digital",
    "Centralizar leads en CRM estructurado",
    "Integrar redes sociales con sistema de leads",
    "Automatizar flujo de reportes semanales"
  ],
  softwareImprovements: [
    "Implementar Google Forms o app interna para viáticos",
    "Usar Notion, Airtable o HubSpot para CRM",
    "Integrar Facebook Leads API y WhatsApp Business API",
    "Automatizar Excel → PDF con scripts"
  ],
  priority: 'alta',
  estimatedROI: 75,
  estimatedEffort: 6
};

// Postventa Insights
export const postventaInsights: DepartmentInsights = {
  bottlenecks: [
    "No hay sistema de órdenes de trabajo",
    "Reportes manuales, dispersos y no trazables",
    "Expedientes incompletos o desorganizados",
    "Comunicación con fábrica es lenta y no estructurada",
    "Falta de registro histórico de mantenimientos"
  ],
  automationSuggestions: [
    "Sistema de órdenes de trabajo digital",
    "Repositorio único de expedientes",
    "Archivo digital con seguimiento por horas de uso",
    "Canal estructurado con fábrica (SLA de respuesta)",
    "Automatización de reportes técnicos"
  ],
  aiRecommendations: [
    "Predicción de mantenimientos basada en horas de uso",
    "Análisis de patrones de fallas por equipo",
    "Recomendaciones automáticas de repuestos",
    "Clasificación automática de reportes técnicos",
    "Detección temprana de problemas por análisis de datos"
  ],
  centralizationFixes: [
    "Unificar expedientes digitales por cliente",
    "Centralizar órdenes de trabajo en sistema único",
    "Integrar comunicación con fábrica en plataforma",
    "Crear repositorio central de documentación técnica"
  ],
  softwareImprovements: [
    "Implementar Odoo, Bitrix24 o Google Forms + Sheets",
    "Usar Notion o Airtable para expedientes",
    "Crear módulo de trazabilidad por horas de equipo",
    "Establecer canal dedicado con fábrica (Slack/Teams)"
  ],
  priority: 'alta',
  estimatedROI: 80,
  estimatedEffort: 8
};

// Ventas Insights
export const ventasInsights: DepartmentInsights = {
  bottlenecks: [
    "Falta de visibilidad en tiempo real de las importaciones en curso",
    "Errores frecuentes por artículos no creados en base de datos al momento de generar OCs",
    "Aprobaciones manuales vía correo que retrasan compras urgentes",
    "Desconexión entre cotizaciones, órdenes de compra y seguimiento en bodega",
    "Duplicidad de pagos o desalineación entre facturas y entregas reportadas"
  ],
  automationSuggestions: [
    "Automatizar el registro de nuevas importaciones desde archivos cargados o APIs de agentes aduanales",
    "Sistema automático de creación de artículos desde solicitudes con validación SKU",
    "Workflow digital para aprobaciones de compras con validación en línea (Softland u Odoo)",
    "Alertas de discrepancia entre facturas y entregas detectadas por IA",
    "Dashboard de seguimiento de cuentas por pagar integrando importaciones, facturación y pagos",
    "Generación automática de cotizaciones con formato homologado, validación de SKU y cálculo dinámico de impuestos y primas"
  ],
  aiRecommendations: [
    "Detección de tendencias de costos por proveedor y SKU para compras óptimas",
    "Predicción de tiempos de entrega con IA basada en histórico de aduanas",
    "Recomendación de punto de reorden automático por SKU en base a frecuencia de compra",
    "Validación automática de facturas con IA basada en OCR e historial de importaciones",
    "Predicción de precios ideales y márgenes basados en histórico de cotizaciones exitosas"
  ],
  centralizationFixes: [
    "Integrar módulos de compras, importaciones y contabilidad bajo una sola vista financiera-operativa",
    "Unificar proceso de cotización, compra y seguimiento en una app interna",
    "Eliminar el uso de hojas Excel para cuentas por pagar mediante integración con ERP",
    "Visor central de costos por proveedor y línea de producto para decisiones rápidas"
  ],
  softwareImprovements: [
    "Capacitación técnica en Softland (crear ítems, inventario)",
    "Implementar CRM (Notion, Airtable o similar)",
    "Crear formularios digitales para captura de datos",
    "Desarrollar plantillas de licitación automatizadas"
  ],
  estimatedROI: 93,
  estimatedEffort: 7,
  priority: "alta"
};

// Alquileres Insights
export const alquileresInsights: DepartmentInsights = {
  bottlenecks: [
    "Órdenes de entrega no se generan formalmente",
    "Se pierde trazabilidad de contratos",
    "Facturación se atrasa por falta de inventario validado",
    "Comunicación poco clara entre ventas → logística → servicio",
    "Proceso manual de control de entregas y devoluciones"
  ],
  automationSuggestions: [
    "Flujo unificado de entrega/retorno en Softland o formulario",
    "Generador de contratos automatizado",
    "Registro de entregas y garantías en sistema",
    "Validación previa de inventario antes de facturar",
    "Sistema de tracking de equipos en tiempo real"
  ],
  aiRecommendations: [
    "Predicción de demanda por tipo de equipo",
    "Optimización automática de programación de entregas",
    "Detección automática de equipos con mantenimiento pendiente",
    "Análisis de patrones de uso por cliente",
    "Recomendaciones de precios dinámicos"
  ],
  centralizationFixes: [
    "Unificar solicitudes, entregas y devoluciones en un solo sistema",
    "Centralizar contratos y garantías digitalmente",
    "Integrar inventario con sistema de alquileres",
    "Automatizar flujo de comunicación entre departamentos"
  ],
  softwareImprovements: [
    "Uso completo de Softland para contratos y pagos",
    "Implementar formularios digitales para entregas",
    "Crear sistema de tracking de equipos",
    "Desarrollar dashboard de disponibilidad en tiempo real"
  ],
  priority: 'media',
  estimatedROI: 70,
  estimatedEffort: 6
};

// Bodega Insights
export const bodegaInsights: DepartmentInsights = {
  bottlenecks: [
    "Falta de integración automatizada entre ingresos de mercadería y sistema de inventario",
    "Control manual de stock mínimo/máximo que genera errores y faltantes",
    "Dependencia excesiva de archivos Excel y controles físicos para seguimiento de inventario",
    "Seguimiento no digitalizado de la flota vehicular y mantenimientos por horómetro",
    "Procesos de compras nacionales con validación manual y sin sistema unificado"
  ],
  automationSuggestions: [
    "Implementar lector de códigos de barras para actualizar inventario automáticamente",
    "Sistema de alertas automáticas para niveles de stock mínimo",
    "Digitalizar flujos de mantenimiento preventivo por horómetro vía dashboard",
    "Automatizar la creación de órdenes de compra desde solicitudes internas",
    "Incorporar panel de control de flota con estado, mantenimientos y documentos por vehículo"
  ],
  aiRecommendations: [
    "Predecir niveles de reabastecimiento con IA usando datos históricos y consumo promedio",
    "Detectar patrones de desabastecimiento en el inventario de repuestos",
    "Optimizar rutas logísticas de flota con algoritmos de eficiencia",
    "Clustering de artículos para definir mejores categorías de almacenamiento y reordenamiento"
  ],
  centralizationFixes: [
    "Unificar compras locales e internacionales en un solo sistema con seguimiento integrado",
    "Centralizar el registro y control de entradas/salidas de bodega desde una sola app interna",
    "Integrar control de flota y mantenimiento con los módulos de servicio técnico",
    "Digitalizar el expediente de proveedor nacional con seguimiento de entregas"
  ],
  softwareImprovements: [
    "Configurar Softland para control completo de inventario",
    "Implementar sistema de códigos automáticos",
    "Crear dashboard de inventario en tiempo real",
    "Desarrollar app móvil para consultas rápidas"
  ],
  priority: 'media',
  estimatedROI: 72,
  estimatedEffort: 6
};

// Gerencia Insights
export const gerenciaInsights: DepartmentInsights = {
  bottlenecks: [
    "No hay trazabilidad en tareas ni revisiones",
    "Órdenes de trabajo no se cumplen",
    "Falta de estructura operativa en Softland",
    "Tareas repetidas no tienen auditoría",
    "Falta supervisión directa por carga operativa"
  ],
  automationSuggestions: [
    "Centralización de procesos por sistema",
    "Estandarización de procedimientos por flujo visual",
    "Capacitación obligatoria en Softland",
    "Scorecard de eficiencia por colaborador",
    "Sistema de delegación efectiva y registro de decisiones"
  ],
  aiRecommendations: [
    "Análisis predictivo de rendimiento por departamento",
    "Detección automática de cuellos de botella",
    "Recomendaciones de optimización de procesos",
    "Análisis de productividad por colaborador",
    "Predicción de necesidades de recursos"
  ],
  centralizationFixes: [
    "Implementar sistema de gestión de tareas centralizado",
    "Unificar reportes y métricas en dashboard ejecutivo",
    "Centralizar decisiones y aprobaciones",
    "Crear flujo de comunicación estructurado"
  ],
  softwareImprovements: [
    "Implementar sistema de gestión de proyectos",
    "Configurar Softland para flujos de trabajo",
    "Crear dashboard ejecutivo con KPIs",
    "Desarrollar sistema de reportes automatizados"
  ],
  priority: 'alta',
  estimatedROI: 95,
  estimatedEffort: 9
};

// Proceso General de Empresa
export const procesoGeneralInsights: DepartmentInsights = {
  bottlenecks: [
    "Falta de integración entre departamentos",
    "Comunicación informal y no estructurada",
    "Dependencia excesiva en Excel y WhatsApp",
    "Softland infrautilizado en la mayoría de áreas",
    "Falta de trazabilidad end-to-end"
  ],
  automationSuggestions: [
    "Implementar sistema de gestión empresarial integrado",
    "Automatizar flujos de comunicación entre departamentos",
    "Centralizar datos en base de datos única",
    "Crear dashboard ejecutivo unificado",
    "Implementar sistema de notificaciones automáticas"
  ],
  aiRecommendations: [
    "Análisis predictivo de rendimiento empresarial",
    "Optimización automática de recursos",
    "Detección temprana de problemas operativos",
    "Recomendaciones estratégicas basadas en datos",
    "Análisis de eficiencia de procesos end-to-end"
  ],
  centralizationFixes: [
    "Unificar todos los sistemas en plataforma central",
    "Implementar API para integración de sistemas",
    "Centralizar comunicación y documentación",
    "Crear repositorio único de datos empresariales"
  ],
  softwareImprovements: [
    "Maximizar uso de Softland en todas las áreas",
    "Implementar sistema de gestión de documentos",
    "Crear portal de empleados unificado",
    "Desarrollar sistema de reportes empresariales"
  ],
  priority: 'alta',
  estimatedROI: 100,
  estimatedEffort: 10
};

// Métricas de Procesos
export const processMetrics: ProcessMetrics[] = [
  {
    department: "Contabilidad",
    processName: "Conciliación Bancaria",
    currentTime: 8,
    optimizedTime: 2,
    errorRate: 15,
    automationPotential: 75
  },
  {
    department: "Contabilidad",
    processName: "Auxiliar de IVA",
    currentTime: 12,
    optimizedTime: 3,
    errorRate: 20,
    automationPotential: 80
  },
  {
    department: "Recepción",
    processName: "Control de Viáticos",
    currentTime: 16,
    optimizedTime: 4,
    errorRate: 25,
    automationPotential: 85
  },
  {
    department: "Recepción",
    processName: "Gestión de Leads",
    currentTime: 6,
    optimizedTime: 1,
    errorRate: 30,
    automationPotential: 90
  },
  {
    department: "Postventa",
    processName: "Órdenes de Trabajo",
    currentTime: 10,
    optimizedTime: 2,
    errorRate: 20,
    automationPotential: 80
  },
  {
    department: "Postventa",
    processName: "Gestión de Expedientes",
    currentTime: 14,
    optimizedTime: 3,
    errorRate: 35,
    automationPotential: 85
  },
  {
    department: "Ventas",
    processName: "Aprobación de Precios",
    currentTime: 8,
    optimizedTime: 1,
    errorRate: 15,
    automationPotential: 90
  },
  {
    department: "Ventas",
    processName: "Gestión de Licitaciones",
    currentTime: 12,
    optimizedTime: 3,
    errorRate: 25,
    automationPotential: 75
  },
  {
    department: "Ventas",
    processName: "Control de Cotizaciones",
    currentTime: 6,
    optimizedTime: 1,
    errorRate: 20,
    automationPotential: 85
  },
  {
    department: "Alquileres",
    processName: "Control de Entregas",
    currentTime: 6,
    optimizedTime: 1,
    errorRate: 20,
    automationPotential: 85
  },
  {
    department: "Bodega",
    processName: "Control de Inventario",
    currentTime: 8,
    optimizedTime: 2,
    errorRate: 15,
    automationPotential: 80
  }
];

// Exportar todos los insights
export const allDepartmentInsights = {
  contabilidad: contabilidadInsights,
  recepcion: recepcionInsights,
  postventa: postventaInsights,
  ventas: ventasInsights,
  alquileres: alquileresInsights,
  bodega: bodegaInsights,
  gerencia: gerenciaInsights,
  general: procesoGeneralInsights
};

// Función para obtener insights por departamento
export const getInsightsByDepartment = (department: string): DepartmentInsights | null => {
  return allDepartmentInsights[department as keyof typeof allDepartmentInsights] || null;
};

// Función para obtener métricas por departamento
export const getMetricsByDepartment = (department: string): ProcessMetrics[] => {
  return processMetrics.filter(metric => metric.department === department);
};

// Función para calcular ROI total
export const calculateTotalROI = (): number => {
  const insights = Object.values(allDepartmentInsights);
  const totalROI = insights.reduce((sum, insight) => sum + insight.estimatedROI, 0);
  return totalROI / insights.length;
};

// Función para obtener prioridades
export const getHighPriorityInsights = (): DepartmentInsights[] => {
  return Object.values(allDepartmentInsights).filter(insight => insight.priority === 'alta');
};

// Función para determinar el plan recomendado
export const getRecommendedPlan = () => {
  const insights = Object.values(allDepartmentInsights);
  const highPriorityCount = insights.filter(insight => insight.priority === 'alta').length;
  const totalAutomationSuggestions = insights.reduce((sum, insight) => sum + insight.automationSuggestions.length, 0);
  const averageROI = calculateTotalROI();
  
  // Lógica de selección de plan basada en los datos
  if (highPriorityCount >= 5 && totalAutomationSuggestions >= 15 && averageROI >= 85) {
    return {
      name: "Singularity",
      price: 2895,
      description: "Transformación completa con integración de múltiples áreas",
      features: [
        "Integración completa de ventas, logística, finanzas y postventa",
        "Más de 15 automatizaciones recomendadas",
        "Análisis predictivo avanzado",
        "Dashboard ejecutivo unificado",
        "Soporte prioritario con IA"
      ],
      justification: `Análisis de ${highPriorityCount} departamentos con prioridad alta, ${totalAutomationSuggestions} automatizaciones sugeridas y ROI promedio del ${averageROI.toFixed(1)}%`
    };
  } else if (highPriorityCount >= 2 && totalAutomationSuggestions >= 5 && averageROI >= 75) {
    return {
      name: "Neural",
      price: 1495,
      description: "Automatización avanzada para departamentos clave",
      features: [
        "Automatización de al menos 2 departamentos principales",
        "Más de 5 automatizaciones implementadas",
        "Análisis en profundidad de procesos",
        "Integración con sistemas existentes",
        "Soporte técnico especializado"
      ],
      justification: `Análisis de ${highPriorityCount} departamentos con prioridad alta, ${totalAutomationSuggestions} automatizaciones sugeridas y ROI promedio del ${averageROI.toFixed(1)}%`
    };
  } else {
    return {
      name: "Cortex",
      price: 795,
      description: "Solución básica para optimización inicial",
      features: [
        "Automatización de 1 departamento principal",
        "Automatizaciones básicas implementadas",
        "Análisis de procesos fundamentales",
        "Integración básica con Softland",
        "Soporte estándar"
      ],
      justification: `Análisis inicial con ${highPriorityCount} departamentos prioritarios, ${totalAutomationSuggestions} automatizaciones sugeridas y ROI promedio del ${averageROI.toFixed(1)}%`
    };
  }
};
