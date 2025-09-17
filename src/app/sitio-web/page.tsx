'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, GlobeAltIcon, ChatBubbleLeftRightIcon, CogIcon } from '@heroicons/react/24/outline'

export default function SitioWebPage() {
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
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold cordesa-text">Sitio Web Profesional</h1>
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
            Transformación de <span className="cordesa-text">cordesacr.com</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            De sitio web básico a plataforma inteligente con IA integrada, WhatsApp Business y automatización completa
          </p>
        </div>

        {/* Current vs Proposed */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Current Website */}
          <div className="roi-card">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <GlobeAltIcon className="h-6 w-6 text-red-400 mr-2" />
              Sitio Actual (cordesacr.com)
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Páginas Estáticas</div>
                <div className="text-red-300 text-xs">Solo información básica de productos y contacto</div>
              </div>
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Sin Interactividad</div>
                <div className="text-red-300 text-xs">No hay formas de contacto dinámicas</div>
              </div>
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Sin Integración</div>
                <div className="text-red-300 text-xs">Desconectado de sistemas internos</div>
              </div>
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Sin Automatización</div>
                <div className="text-red-300 text-xs">Procesos manuales para cada consulta</div>
              </div>
            </div>
          </div>

          {/* Proposed Website */}
          <div className="roi-card border-2 border-cordesa-yellow">
            <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
              <GlobeAltIcon className="h-6 w-6 text-cordesa-yellow mr-2" />
              Sitio Propuesto (Inteligente)
            </h4>
            <div className="space-y-3">
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">IA Conversacional</div>
                <div className="text-green-300 text-xs">Chatbot que entiende consultas en lenguaje natural</div>
              </div>
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">WhatsApp Business Integrado</div>
                <div className="text-green-300 text-xs">Comunicación directa con clientes</div>
              </div>
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Automatización Completa</div>
                <div className="text-green-300 text-xs">Cotizaciones, facturación y citas automáticas</div>
              </div>
              <div className="p-3 bg-green-500/10 border border-green-500/30 rounded-lg">
                <div className="text-white font-medium text-sm mb-1">Integración ERP</div>
                <div className="text-green-300 text-xs">Conectado directamente con Odoo</div>
              </div>
            </div>
          </div>
        </div>

        {/* Key Features */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Funcionalidades <span className="cordesa-text">Inteligentes</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* NLP Chatbot */}
            <div className="roi-card">
              <div className="flex items-center mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-cordesa-yellow mr-3" />
                <h4 className="text-xl font-semibold text-white">Chatbot IA Conversacional</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Procesamiento de Lenguaje Natural</div>
                  <div className="text-white/60 text-xs">Entiende consultas complejas en español</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Integración con Facturación</div>
                  <div className="text-white/60 text-xs">Puede consultar estados de cuenta y facturas</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Cotizaciones Automáticas</div>
                  <div className="text-white/60 text-xs">Genera cotizaciones basadas en inventario real</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Agendamiento Inteligente</div>
                  <div className="text-white/60 text-xs">Coordina citas con representantes de ventas</div>
                </div>
              </div>
            </div>

            {/* WhatsApp Integration */}
            <div className="roi-card">
              <div className="flex items-center mb-4">
                <ChatBubbleLeftRightIcon className="h-8 w-8 text-green-500 mr-3" />
                <h4 className="text-xl font-semibold text-white">WhatsApp Business API</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Comunicación Directa</div>
                  <div className="text-white/60 text-xs">Clientes pueden contactar directamente</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Notificaciones Automáticas</div>
                  <div className="text-white/60 text-xs">Estados de órdenes, facturas, citas</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Respuestas Inteligentes</div>
                  <div className="text-white/60 text-xs">IA responde consultas comunes automáticamente</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Escalamiento Humano</div>
                  <div className="text-white/60 text-xs">Deriva consultas complejas al equipo</div>
                </div>
              </div>
            </div>

            {/* Automated Processes */}
            <div className="roi-card">
              <div className="flex items-center mb-4">
                <CogIcon className="h-8 w-8 text-blue-500 mr-3" />
                <h4 className="text-xl font-semibold text-white">Procesos Automatizados</h4>
              </div>
              <div className="space-y-3">
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Cotizaciones Instantáneas</div>
                  <div className="text-white/60 text-xs">Genera cotizaciones en tiempo real</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Gestión de Leads</div>
                  <div className="text-white/60 text-xs">Captura y califica leads automáticamente</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Facturación Integrada</div>
                  <div className="text-white/60 text-xs">Conecta con GTI para facturación electrónica</div>
                </div>
                <div className="p-3 bg-white/5 rounded-lg">
                  <div className="text-white font-medium text-sm mb-1">Seguimiento Automático</div>
                  <div className="text-white/60 text-xs">Recordatorios y seguimiento de ventas</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* User Journey */}
        <div className="roi-card mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Experiencia del Cliente</h3>
          
          <div className="space-y-6">
            {/* Step 1 */}
            <div className="border-l-4 border-cordesa-yellow pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-cordesa-yellow rounded-full flex items-center justify-center mr-3">
                  <span className="text-black font-bold text-sm">1</span>
                </div>
                <h4 className="text-lg font-semibold text-white">Cliente visita cordesacr.com</h4>
              </div>
              <p className="text-white/80 text-sm ml-11">
                Ve productos, servicios y puede interactuar con el chatbot inteligente desde el primer momento
              </p>
            </div>

            {/* Step 2 */}
            <div className="border-l-4 border-green-500 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <h4 className="text-lg font-semibold text-white">Consulta por WhatsApp o Chat</h4>
              </div>
              <p className="text-white/80 text-sm ml-11">
                &ldquo;Necesito cotizar un equipo para mi empresa&rdquo; → IA entiende y genera cotización automática
              </p>
            </div>

            {/* Step 3 */}
            <div className="border-l-4 border-blue-500 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">3</span>
                </div>
                <h4 className="text-lg font-semibold text-white">Cotización Automática</h4>
              </div>
              <p className="text-white/80 text-sm ml-11">
                Sistema consulta inventario real, genera cotización con precios actualizados y la envía por WhatsApp
              </p>
            </div>

            {/* Step 4 */}
            <div className="border-l-4 border-purple-500 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">4</span>
                </div>
                <h4 className="text-lg font-semibold text-white">Agendamiento Inteligente</h4>
              </div>
              <p className="text-white/80 text-sm ml-11">
                Si cliente acepta, IA agenda cita con representante de ventas y envía confirmación automática
              </p>
            </div>

            {/* Step 5 */}
            <div className="border-l-4 border-orange-500 pl-6">
              <div className="flex items-center mb-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center mr-3">
                  <span className="text-white font-bold text-sm">5</span>
                </div>
                <h4 className="text-lg font-semibold text-white">Seguimiento Automático</h4>
              </div>
              <p className="text-white/80 text-sm ml-11">
                Sistema hace seguimiento de la venta, envía recordatorios y actualiza estado en CRM
              </p>
            </div>
          </div>
        </div>

        {/* ROI Analysis */}
        <div className="roi-card mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">ROI del Sitio Web Inteligente</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Beneficios Inmediatos</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Reducción tiempo respuesta</span>
                  <span className="text-cordesa-yellow font-semibold">80%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Aumento conversiones</span>
                  <span className="text-cordesa-yellow font-semibold">150%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Automatización consultas</span>
                  <span className="text-cordesa-yellow font-semibold">70%</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Mejora experiencia cliente</span>
                  <span className="text-cordesa-yellow font-semibold">90%</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Valor Mensual Estimado</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Nuevos leads automatizados</span>
                  <span className="text-cordesa-yellow font-semibold">$800/mes</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Reducción tiempo ventas</span>
                  <span className="text-cordesa-yellow font-semibold">$600/mes</span>
                </div>
                <div className="flex justify-between items-center p-3 bg-white/5 rounded-lg">
                  <span className="text-white/80">Mejora imagen corporativa</span>
                  <span className="text-cordesa-yellow font-semibold">$400/mes</span>
                </div>
                <div className="border-t border-white/20 pt-2">
                  <div className="flex justify-between items-center">
                    <span className="text-white font-semibold">Total Valor Mensual</span>
                    <span className="text-cordesa-yellow font-bold">$1,800/mes</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Technical Implementation */}
        <div className="roi-card">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Implementación Técnica</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Frontend</h4>
              <div className="space-y-2">
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">Next.js con diseño responsive</span>
                </div>
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">Tailwind CSS para styling</span>
                </div>
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">Componentes interactivos</span>
                </div>
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">Optimización SEO</span>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg font-semibold text-white mb-4">Backend & Integraciones</h4>
              <div className="space-y-2">
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">API REST para comunicaciones</span>
                </div>
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">Integración WhatsApp Business API</span>
                </div>
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">Conexión directa con Odoo ERP</span>
                </div>
                <div className="flex items-center p-2 bg-white/5 rounded">
                  <span className="text-cordesa-yellow mr-2">•</span>
                  <span className="text-white/80 text-sm">IA para procesamiento de lenguaje natural</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
