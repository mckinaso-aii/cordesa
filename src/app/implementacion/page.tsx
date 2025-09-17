'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, ClockIcon, ArrowRightIcon, CogIcon, ChartBarIcon, BuildingOfficeIcon } from '@heroicons/react/24/outline'

export default function ImplementacionPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)

  useEffect(() => {
    const savedAuth = localStorage.getItem('cordesa-auth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
  }, [])

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-cordesa-yellow flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-white mb-4">Acceso Restringido</h1>
          <p className="text-white/80 mb-6">Necesitas autenticarte para acceder a esta página</p>
          <Link href="/" className="text-cordesa-yellow hover:text-cordesa-yellow/80 transition-colors">
            ← Volver al inicio
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-cordesa-yellow">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="mr-4 text-white/60 hover:text-white transition-colors">
                <ArrowLeftIcon className="h-6 w-6" />
              </Link>
              <div>
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold cordesa-text">Mapa de Implementación</h1>
                <p className="text-white/80 text-xs sm:text-sm">Cordesa S.A.</p>
              </div>
            </div>
            <button
              onClick={() => {
                setIsAuthenticated(false)
                localStorage.removeItem('cordesa-auth')
              }}
              className="text-white/60 hover:text-white transition-colors text-sm sm:text-base ml-2 flex-shrink-0"
            >
              <span className="hidden sm:inline">Cerrar Sesión</span>
              <span className="sm:hidden">Salir</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="text-center mb-8 sm:mb-12 px-4">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
            Mapa de <span className="cordesa-text">Implementación</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Roadmap estratégico por fases con cronograma, hitos y tecnología utilizada
          </p>
        </div>

        {/* Implementation Phases */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 sm:mb-12">
          <div className="roi-card">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-cordesa-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black font-bold text-xl">1</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Fase 1: Fundación</h4>
              <p className="text-white/60 text-sm">Meses 1-2</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Migración de Softland a Odoo ERP</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Automatización de Contabilidad</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Sistema de cobros automatizados</span>
              </li>
            </ul>
          </div>

          <div className="roi-card">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-cordesa-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black font-bold text-xl">2</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Fase 2: Expansión</h4>
              <p className="text-white/60 text-sm">Meses 3-4</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Automatización de Ventas</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Gestión de leads y CRM</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Integración con WhatsApp Business API</span>
              </li>
            </ul>
          </div>

          <div className="roi-card">
            <div className="text-center mb-4">
              <div className="w-12 h-12 bg-cordesa-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black font-bold text-xl">3</span>
              </div>
              <h4 className="text-xl font-semibold text-white">Fase 3: Optimización</h4>
              <p className="text-white/60 text-sm">Meses 5-6</p>
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Automatización de Postventa</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Control de inventario avanzado</span>
              </li>
              <li className="flex items-start">
                <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                <span className="text-white/80 text-sm">Análisis predictivo</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Detailed Timeline */}
        <div className="roi-card mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Cronograma Detallado</h3>
          
          <div className="space-y-6">
            {/* Month 1 */}
            <div className="border-l-4 border-cordesa-yellow pl-6">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-cordesa-yellow mr-2" />
                <h4 className="text-lg font-semibold text-white">Mes 1: Preparación y Migración</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <BuildingOfficeIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Análisis de datos Softland</div>
                      <div className="text-white/60 text-xs">Inventario completo de información existente</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CogIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Configuración inicial Odoo</div>
                      <div className="text-white/60 text-xs">Setup básico del ERP empresarial</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChartBarIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Migración de datos críticos</div>
                      <div className="text-white/60 text-xs">Clientes, productos, facturas históricas</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Capacitación inicial equipo</div>
                      <div className="text-white/60 text-xs">Training básico en Odoo ERP</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-green-500 mr-2" />
                <h4 className="text-lg font-semibold text-white">Mes 2: Automatización Contabilidad</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <BuildingOfficeIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Integración GTI Facturación</div>
                      <div className="text-white/60 text-xs">Lectura automática facturas electrónicas</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CogIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Automatización cobros</div>
                      <div className="text-white/60 text-xs">Sistema de recordatorios automáticos</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChartBarIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Dashboard Contabilidad</div>
                      <div className="text-white/60 text-xs">KPIs tiempo real para contabilidad</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-green-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Testing y optimización</div>
                      <div className="text-white/60 text-xs">Ajustes finos del sistema</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 3 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-blue-500 mr-2" />
                <h4 className="text-lg font-semibold text-white">Mes 3: Expansión Ventas</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <BuildingOfficeIcon className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">CRM Ventas integrado</div>
                      <div className="text-white/60 text-xs">Gestión completa de leads y oportunidades</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CogIcon className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Workflow cotizaciones</div>
                      <div className="text-white/60 text-xs">Proceso digital de aprobaciones</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChartBarIcon className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Dashboard Ventas</div>
                      <div className="text-white/60 text-xs">Métricas de rendimiento en tiempo real</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-blue-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Integración WhatsApp Business</div>
                      <div className="text-white/60 text-xs">Comunicación automatizada con clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 4 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-purple-500 mr-2" />
                <h4 className="text-lg font-semibold text-white">Mes 4: Optimización Procesos</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <BuildingOfficeIcon className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Automatización Recepción</div>
                      <div className="text-white/60 text-xs">App móvil para viáticos y leads</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CogIcon className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Control Inventario</div>
                      <div className="text-white/60 text-xs">Lector códigos barras + alertas</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChartBarIcon className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Dashboard Ejecutivo</div>
                      <div className="text-white/60 text-xs">Vista consolidada de toda la operación</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-purple-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Sitio Web Profesional</div>
                      <div className="text-white/60 text-xs">Presencia online con IA integrada</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Month 5-6 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex items-center mb-2">
                <ClockIcon className="h-5 w-5 text-orange-500 mr-2" />
                <h4 className="text-lg font-semibold text-white">Meses 5-6: Optimización Avanzada</h4>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <div className="flex items-start">
                    <BuildingOfficeIcon className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Automatización Postventa</div>
                      <div className="text-white/60 text-xs">Sistema digital de órdenes de trabajo</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <CogIcon className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Análisis Predictivo</div>
                      <div className="text-white/60 text-xs">IA para forecasting y optimización</div>
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <ChartBarIcon className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Scorecard Eficiencia</div>
                      <div className="text-white/60 text-xs">Métricas de rendimiento por departamento</div>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <ArrowRightIcon className="h-4 w-4 text-orange-500 mr-2 mt-1 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Optimización Continua</div>
                      <div className="text-white/60 text-xs">Ajustes basados en datos reales</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technology Stack */}
        <div className="roi-card mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Stack Tecnológico</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Sistemas Principales</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Odoo ERP</span>
                  <span className="text-cordesa-yellow text-sm">Plan Empresarial</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">GTI Facturación</span>
                  <span className="text-cordesa-yellow text-sm">Integración API</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">WhatsApp Business API</span>
                  <span className="text-cordesa-yellow text-sm">Comunicación automatizada</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Tecnologías de Desarrollo</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Next.js</span>
                  <span className="text-cordesa-yellow text-sm">Frontend</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Tailwind CSS</span>
                  <span className="text-cordesa-yellow text-sm">Styling</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Chart.js</span>
                  <span className="text-cordesa-yellow text-sm">Visualización</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="roi-card">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Métricas de Éxito</h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-cordesa-yellow mb-2">90%</div>
              <div className="text-white/80 text-sm">Reducción procesos manuales</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-cordesa-yellow mb-2">75%</div>
              <div className="text-white/80 text-sm">Mejora tiempo respuesta</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-cordesa-yellow mb-2">60%</div>
              <div className="text-white/80 text-sm">Reducción errores</div>
            </div>
            <div className="text-center p-4 bg-white/5 rounded-lg">
              <div className="text-2xl font-bold text-cordesa-yellow mb-2">3X</div>
              <div className="text-white/80 text-sm">ROI mensual</div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
