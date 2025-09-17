'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, DocumentChartBarIcon } from '@heroicons/react/24/outline'
import MermaidChart from '@/components/MermaidChart'

export default function AnalisisFlujoPage() {
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
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold cordesa-text">Análisis de Flujo de Trabajo</h1>
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
            Diagramas de <span className="cordesa-text">Flujo de Trabajo</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Visualización de procesos actuales vs propuestos por departamento
          </p>
        </div>

        {/* Workflow Diagrams */}
        <div className="space-y-8">
          {/* Contabilidad Workflow */}
          <div className="roi-card">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">Contabilidad - Proceso Actual vs Propuesto</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-medium text-red-400 mb-3">Proceso Actual</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Factura Electrónica] --> B[Recepción Manual]
                      B --> C[Ingreso Manual en Excel]
                      C --> D[Ingreso Manual en Softland]
                      D --> E[Conciliación Manual]
                      E --> F[Cobro Manual WhatsApp]
                      F --> G[Registro Manual Pago]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
              <div>
                <h5 className="text-lg font-medium text-green-400 mb-3">Proceso Propuesto</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Factura Electrónica] --> B[Lectura Automática GTI]
                      B --> C[Importación Automática Odoo]
                      C --> D[Conciliación Automática]
                      D --> E[Cobro Automático WhatsApp]
                      E --> F[Registro Automático Pago]
                      F --> G[Dashboard Tiempo Real]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
            </div>
          </div>

          {/* Ventas Workflow */}
          <div className="roi-card">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">Ventas - Proceso Actual vs Propuesto</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-medium text-red-400 mb-3">Proceso Actual</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Solicitud Cliente] --> B[Cotización Manual Excel]
                      B --> C[Aprobación Email]
                      C --> D[Creación Manual Artículo]
                      D --> E[OC Manual]
                      E --> F[Seguimiento Manual]
                      F --> G[Facturación Manual]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
              <div>
                <h5 className="text-lg font-medium text-green-400 mb-3">Proceso Propuesto</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Solicitud Cliente] --> B[Cotización Automática Odoo]
                      B --> C[Workflow Digital Aprobación]
                      C --> D[Creación Automática Artículo]
                      D --> E[OC Automática]
                      E --> F[Dashboard Seguimiento]
                      F --> G[Facturación Integrada]
                      G --> H[KPIs Tiempo Real]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style H fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
            </div>
          </div>

          {/* Recepción Workflow */}
          <div className="roi-card">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">Recepción - Proceso Actual vs Propuesto</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-medium text-red-400 mb-3">Proceso Actual</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Solicitud Viático] --> B[Formulario Manual Papel]
                      B --> C[Aprobación Gerencia]
                      C --> D[Pago Manual Efectivo]
                      D --> E[Comprobantes Desorganizados]
                      E --> F[Leads WhatsApp Desestructurados]
                      F --> G[Información Perdida]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
              <div>
                <h5 className="text-lg font-medium text-green-400 mb-3">Proceso Propuesto</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Solicitud Viático] --> B[App Móvil Digital]
                      B --> C[Workflow Aprobación Automática]
                      C --> D[Pago Digital Trazable]
                      D --> E[Comprobantes Digitales]
                      E --> F[CRM Leads Estructurado]
                      F --> G[Base Datos Centralizada]
                      G --> H[Dashboard Recepción]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style H fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
            </div>
          </div>

          {/* Postventa Workflow */}
          <div className="roi-card">
            <h4 className="text-xl font-semibold text-white mb-4 text-center">Postventa - Proceso Actual vs Propuesto</h4>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div>
                <h5 className="text-lg font-medium text-red-400 mb-3">Proceso Actual</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Solicitud Servicio] --> B[Orden Trabajo Papel]
                      B --> C[Asignación Manual]
                      C --> D[Seguimiento WhatsApp]
                      D --> E[Expedientes Físicos]
                      E --> F[Información Desperdigada]
                      F --> G[Sin Trazabilidad]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#EF4444,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
              <div>
                <h5 className="text-lg font-medium text-green-400 mb-3">Proceso Propuesto</h5>
                <div className="bg-white/5 rounded-lg p-4">
                  <MermaidChart chart={`
                    graph TD
                      A[Solicitud Servicio] --> B[Sistema Digital Órdenes]
                      B --> C[Asignación Automática]
                      C --> D[Seguimiento Tiempo Real]
                      D --> E[Expedientes Digitales]
                      E --> F[Repositorio Centralizado]
                      F --> G[Trazabilidad Completa]
                      G --> H[Dashboard Postventa]
                      
                      style A fill:#FFD500,stroke:#fff,stroke-width:2px,color:#000
                      style B fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style C fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style D fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style E fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style F fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style G fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                      style H fill:#10B981,stroke:#fff,stroke-width:2px,color:#fff
                    `} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
