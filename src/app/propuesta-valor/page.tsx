'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, UsersIcon, ClockIcon, CurrencyDollarIcon } from '@heroicons/react/24/outline'
import { allDepartmentInsights } from '@/data/insights'

export default function PropuestaValorPage() {
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
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold cordesa-text">Propuesta de Valor</h1>
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
            Propuesta de <span className="cordesa-text">Valor</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Análisis detallado de ROI por departamento, cuellos de botella y oportunidades de mejora
          </p>
        </div>

        {/* Department Analysis */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Department Metrics */}
          <div className="roi-card">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <UsersIcon className="h-6 w-6 text-cordesa-yellow mr-2" />
              Análisis por Departamento
            </h4>
            <div className="space-y-3">
              {Object.entries(allDepartmentInsights)
                .filter(([, insight]) => insight.priority === 'alta')
                .slice(0, 4)
                .map(([departmentName, insight], index) => (
                  <div key={index} className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                    <span className="text-white/80 text-sm">
                      {departmentName.charAt(0).toUpperCase() + departmentName.slice(1)}
                    </span>
                    <span className="text-cordesa-yellow font-bold">
                      {insight.estimatedROI}% ROI
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* Key Bottlenecks */}
          <div className="roi-card">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <ClockIcon className="h-6 w-6 text-cordesa-yellow mr-2" />
              Cuellos de Botella Principales
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-white/80 text-sm mb-2">Dependencia excesiva en Excel y WhatsApp</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cordesa-yellow h-2 rounded-full" style={{width: '90%'}}></div>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-white/80 text-sm mb-2">Softland infrautilizado (solo 20% de capacidades)</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cordesa-yellow h-2 rounded-full" style={{width: '85%'}}></div>
                </div>
              </div>
              <div className="p-3 bg-white/5 rounded-lg">
                <p className="text-white/80 text-sm mb-2">Procesos manuales sin trazabilidad</p>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div className="bg-cordesa-yellow h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Pain Points vs Solutions Mapping */}
        <div className="roi-card bg-gradient-to-r from-red-900/30 to-green-900/30 border border-red-500/30 mb-8">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Problemas → Soluciones Directas</h3>
            <p className="text-white/80 text-lg">
              Cada pain point identificado tiene una solución específica con ROI medible
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Pain Points */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-red-400 mb-4">🚨 Problemas Actuales</h4>
              
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Dependencia Excesiva en Excel y WhatsApp</div>
                <div className="text-red-300 text-xs">7 departamentos usando Excel = pérdida de tiempo y errores</div>
              </div>
              
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Softland Infrautilizado (solo 20%)</div>
                <div className="text-red-300 text-xs">ERP costoso sin aprovechar = desperdicio de inversión</div>
              </div>
              
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Procesos Manuales Sin Trazabilidad</div>
                <div className="text-red-300 text-xs">Viáticos, leads, órdenes de trabajo = pérdida de control</div>
              </div>
              
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Falta de Integración Entre Departamentos</div>
                <div className="text-red-300 text-xs">Ventas desconectada de Contabilidad = errores y retrasos</div>
              </div>
              
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Comunicación Informal y No Estructurada</div>
                <div className="text-red-300 text-xs">WhatsApp para todo = pérdida de información importante</div>
              </div>
            </div>

            {/* Solutions */}
            <div className="space-y-4">
              <h4 className="text-lg font-semibold text-green-400 mb-4">✅ Soluciones Neural</h4>
              
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">ERP Odoo Empresarial Centralizado</div>
                <div className="text-green-300 text-xs">→ Elimina Excel + WhatsApp para procesos críticos</div>
              </div>
              
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Reemplazo de Softland con Odoo ERP</div>
                <div className="text-green-300 text-xs">→ ERP moderno + migración completa de datos + capacitación</div>
              </div>
              
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Automatización de Procesos Críticos</div>
                <div className="text-green-300 text-xs">→ Viáticos, leads, órdenes de trabajo digitalizados</div>
              </div>
              
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Integración Completa Entre Departamentos</div>
                <div className="text-green-300 text-xs">→ Ventas ↔ Contabilidad ↔ Bodega ↔ Postventa</div>
              </div>
              
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Comunicación Estructurada y Trazable</div>
                <div className="text-green-300 text-xs">→ Sistema unificado + WhatsApp para clientes únicamente</div>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <div className="text-center">
              <h4 className="text-lg font-semibold text-white mb-2">ROI Inmediato por Solución</h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                <div>
                  <div className="text-white/60 mb-1">Eliminación de Excel</div>
                  <div className="text-cordesa-yellow font-bold">$500/mes</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Migración a Odoo ERP</div>
                  <div className="text-cordesa-yellow font-bold">$600/mes</div>
                </div>
                <div>
                  <div className="text-white/60 mb-1">Automatización Procesos</div>
                  <div className="text-cordesa-yellow font-bold">$600/mes</div>
                </div>
              </div>
              <div className="mt-3 text-lg font-semibold text-white">
                Total Ahorro Mensual: <span className="text-cordesa-yellow">$1,700/mes</span>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed ROI Analysis */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Análisis Detallado de <span className="cordesa-text">ROI</span>
          </h3>
          
          <div className="text-center mb-8">
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Desglose de ingresos recuperados, ahorros y beneficios mensuales por departamento
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
            <div className="roi-card">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-cordesa-yellow/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-cordesa-yellow text-sm font-bold">1</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Contabilidad</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60 mb-1">Situación Actual:</p>
                  <p className="text-white/80 text-sm">Dependencia total en una sola persona + Excel intensivo</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Mejora Propuesta:</p>
                  <p className="text-cordesa-yellow text-sm">Automatización facturas electrónicas + cobros automáticos</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Valor Mensual:</p>
                  <p className="text-cordesa-yellow font-bold">$680/mes</p>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-cordesa-yellow/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-cordesa-yellow text-sm font-bold">2</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Ventas</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60 mb-1">Situación Actual:</p>
                  <p className="text-white/80 text-sm">Falta visibilidad importaciones + aprobaciones manuales</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Mejora Propuesta:</p>
                  <p className="text-cordesa-yellow text-sm">Dashboard tiempo real + workflow digital</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Valor Mensual:</p>
                  <p className="text-cordesa-yellow font-bold">$930/mes</p>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-cordesa-yellow/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-cordesa-yellow text-sm font-bold">3</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Recepción</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60 mb-1">Situación Actual:</p>
                  <p className="text-white/80 text-sm">Viáticos 100% manual + leads no estructurados</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Mejora Propuesta:</p>
                  <p className="text-cordesa-yellow text-sm">App viáticos + CRM estructurado</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Valor Mensual:</p>
                  <p className="text-cordesa-yellow font-bold">$450/mes</p>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-cordesa-yellow/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-cordesa-yellow text-sm font-bold">4</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Postventa</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60 mb-1">Situación Actual:</p>
                  <p className="text-white/80 text-sm">No hay sistema órdenes trabajo + expedientes desorganizados</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Mejora Propuesta:</p>
                  <p className="text-cordesa-yellow text-sm">Sistema digital + repositorio único</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Valor Mensual:</p>
                  <p className="text-cordesa-yellow font-bold">$640/mes</p>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-cordesa-yellow/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-cordesa-yellow text-sm font-bold">5</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Bodega</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60 mb-1">Situación Actual:</p>
                  <p className="text-white/80 text-sm">Control manual stock + Excel para inventario</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Mejora Propuesta:</p>
                  <p className="text-cordesa-yellow text-sm">Lector códigos barras + alertas automáticas</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Valor Mensual:</p>
                  <p className="text-cordesa-yellow font-bold">$360/mes</p>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <div className="flex items-center mb-4">
                <div className="w-8 h-8 bg-cordesa-yellow/20 rounded-full flex items-center justify-center mr-3">
                  <span className="text-cordesa-yellow text-sm font-bold">6</span>
                </div>
                <h3 className="text-lg font-semibold text-white">Gerencia</h3>
              </div>
              
              <div className="space-y-3">
                <div>
                  <p className="text-sm text-white/60 mb-1">Situación Actual:</p>
                  <p className="text-white/80 text-sm">No hay trazabilidad tareas + órdenes no se cumplen</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Mejora Propuesta:</p>
                  <p className="text-cordesa-yellow text-sm">Sistema gestión centralizado + scorecard eficiencia</p>
                </div>
                <div>
                  <p className="text-sm text-white/60 mb-1">Valor Mensual:</p>
                  <p className="text-cordesa-yellow font-bold">$950/mes</p>
                </div>
              </div>
            </div>
          </div>

          {/* ROI Summary */}
          <div className="roi-card">
            <h3 className="text-xl font-bold text-white mb-6 text-center">Resumen de ROI Mensual</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Ingresos Recuperados/Nuevos</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Optimización Contabilidad:</span>
                    <span className="text-cordesa-yellow font-semibold">$680/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Eficiencia Ventas:</span>
                    <span className="text-cordesa-yellow font-semibold">$930/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Automatización Postventa:</span>
                    <span className="text-cordesa-yellow font-semibold">$640/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Gestión Gerencia:</span>
                    <span className="text-cordesa-yellow font-semibold">$950/mes</span>
                  </div>
                  <div className="border-t border-white/20 pt-2">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">Subtotal:</span>
                      <span className="text-cordesa-yellow font-bold">$3,200/mes</span>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Ahorros Administrativos</h4>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-white/80">Automatización Recepción:</span>
                    <span className="text-cordesa-yellow font-semibold">$450/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Control Inventario:</span>
                    <span className="text-cordesa-yellow font-semibold">$360/mes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/80">Eliminación Excel:</span>
                    <span className="text-cordesa-yellow font-semibold">$500/mes</span>
                  </div>
                  <div className="border-t border-white/20 pt-2">
                    <div className="flex justify-between">
                      <span className="text-white font-semibold">Subtotal:</span>
                      <span className="text-cordesa-yellow font-bold">$1,310/mes</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t border-white/20 pt-6 mt-6">
              <div className="text-center">
                <div className="text-lg text-white/80 mb-2">ROI Combinado Total</div>
                <div className="text-3xl font-bold text-cordesa-yellow mb-2">$4,510/mes</div>
                <div className="text-white/60">vs Inversión Neural $1,495/mes</div>
                <div className="text-xl font-bold text-cordesa-yellow mt-2">ROI Neto: 3X mensual</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
