'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { ArrowLeftIcon, CheckCircleIcon, XMarkIcon } from '@heroicons/react/24/outline'

export default function PlanesPage() {
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
                <h1 className="text-lg sm:text-xl md:text-2xl font-bold cordesa-text">Planes y Servicios</h1>
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
            Comparativo de <span className="cordesa-text">Planes</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-4xl mx-auto">
            Cortex: Automatización básica para comenzar | Neural: Procesos conectados y decisiones guiadas por datos
          </p>
        </div>

        {/* Plan Comparison */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
          {/* Cortex Plan */}
          <div className="roi-card">
            <div className="text-center mb-6">
              <h3 className="text-2xl font-bold text-white mb-2">Plan Cortex</h3>
              <div className="text-3xl font-bold text-cordesa-yellow mb-2">$795/mes</div>
              <div className="text-white/60">+ IVA</div>
              <div className="mt-2 px-3 py-1 bg-orange-500/20 border border-orange-500/50 rounded-full">
                <span className="text-orange-400 text-sm font-medium">Compromiso mínimo: 3 meses</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Visibilidad y Automatización Básica:</h4>
              <div className="space-y-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Dashboard estático con hasta 5 KPIs clave para 1 departamento</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Visibilidad básica de Contabilidad</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">1 automatización práctica</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Lectura automática de facturas electrónicas (ahorro $400/mes)</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Sitio web simple (3 páginas) con asistente de IA básico</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Presencia online básica + chatbot para consultas</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Análisis inicial con hasta 3 documentos</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Optimización básica de procesos</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Odoo gratuito (ERP) con 1 módulo personalizado</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Reemplaza Softland con ERP moderno</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">DNS + Dominio + Email Hosting</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Infraestructura técnica completa</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">WhatsApp Business API básico</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Comunicación automatizada con clientes</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Limitaciones:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <XMarkIcon className="h-4 w-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Solo 1 departamento (Contabilidad únicamente)</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="h-4 w-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">No escalable a Ventas, Bodega, Postventa</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="h-4 w-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">KPIs estáticos, no adaptativos</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="h-4 w-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">No resuelve integración entre departamentos</span>
                </li>
                <li className="flex items-start">
                  <XMarkIcon className="h-4 w-4 text-red-400 mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Soporte por correo electrónico únicamente</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-1">ROI Estimado</div>
                <div className="text-xl font-bold text-cordesa-yellow">$400/mes neto</div>
                <div className="text-sm text-white/60">($1,195 ingresos - $795 costo)</div>
              </div>
            </div>
          </div>

          {/* Neural Plan */}
          <div className="roi-card border-2 border-cordesa-yellow">
            <div className="text-center mb-6">
              <div className="inline-block bg-cordesa-yellow text-black px-3 py-1 rounded-full text-sm font-medium mb-2">
                RECOMENDADO
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">Plan Neural</h3>
              <div className="text-3xl font-bold text-cordesa-yellow mb-2">$1,495/mes</div>
              <div className="text-white/60">+ IVA</div>
              <div className="mt-2 px-3 py-1 bg-cordesa-yellow/20 border border-cordesa-yellow/50 rounded-full">
                <span className="text-cordesa-yellow text-sm font-medium">Compromiso mínimo: 6 meses</span>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Procesos Conectados y Decisiones Guiadas por Datos:</h4>
              <div className="space-y-3">
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Dashboard adaptativo con hasta 12 KPIs para 2 departamentos</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Visibilidad completa de Contabilidad + Ventas</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">2-3 automatizaciones conectando procesos internos/externos</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Facturas electrónicas + Cobros automáticos + Gestión de leads (ahorro $800/mes)</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Sitio web profesional (5 secciones) con asistente IA contextual</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Presencia profesional + captura de leads + chatbot avanzado</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Análisis inicial con hasta 10 documentos</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Optimización profunda de procesos</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Odoo empresarial (ERP) con 15 usuarios, 10 apps, 5 módulos personalizados</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Reemplaza Softland con ERP moderno + escalabilidad completa</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">WhatsApp Business API completo</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Comunicación automatizada + chatbot conversacional</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">DNS + Dominio + Email Hosting profesional</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Infraestructura técnica completa + correos @cordesa.cr</div>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-white/10 rounded-lg">
                  <div className="flex items-start">
                    <CheckCircleIcon className="h-5 w-5 text-cordesa-yellow mr-2 mt-0.5 flex-shrink-0" />
                    <div>
                      <div className="text-white font-medium text-sm">Soporte prioritario (&lt;4h respuesta)</div>
                      <div className="text-white/60 text-xs">→ Resuelve: Soporte técnico especializado + retraining de IA</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-lg font-semibold text-white mb-3">Resuelve Pain Points Críticos:</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Elimina dependencia excesiva en Excel y WhatsApp</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Reemplaza Softland con Odoo ERP</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Automatiza procesos manuales sin trazabilidad</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Integra comunicación entre departamentos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircleIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Escalabilidad completa a todos los departamentos</span>
                </li>
              </ul>
            </div>

            <div className="border-t border-white/20 pt-4">
              <div className="text-center">
                <div className="text-sm text-white/60 mb-1">ROI Estimado</div>
                <div className="text-xl font-bold text-cordesa-yellow">$1,200/mes neto</div>
                <div className="text-sm text-white/60">($2,695 ingresos - $1,495 costo)</div>
              </div>
            </div>
          </div>
        </div>

        {/* Comparison Summary */}
        <div className="roi-card mb-8">
          <h3 className="text-xl font-bold text-white mb-6 text-center">Resumen Comparativo</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="text-center">
              <div className="text-2xl font-bold text-cordesa-yellow mb-2">Cortex</div>
              <div className="text-white/80 mb-2">Automatización Básica</div>
              <div className="text-sm text-white/60">Para empresas pequeñas que quieren comenzar con inteligencia sin complicaciones</div>
            </div>
            <div className="text-center">
              <div className="text-2xl font-bold text-cordesa-yellow mb-2">Neural</div>
              <div className="text-white/80 mb-2">Procesos Conectados</div>
              <div className="text-sm text-white/60">Ideal para empresas que quieren visualizar, automatizar y optimizar</div>
            </div>
          </div>
        </div>

        {/* Commitment Terms Section */}
        <div className="roi-card bg-gradient-to-r from-orange-900/30 to-cordesa-yellow/30 border border-orange-500/30">
          <div className="text-center mb-6">
            <h3 className="text-2xl font-bold text-white mb-4">Términos de Compromiso</h3>
            <p className="text-white/80 text-lg">
              Los compromisos mínimos son importantes para garantizar el ROI y la estabilidad del proyecto
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="text-center p-4 bg-orange-500/10 rounded-lg border border-orange-500/30">
              <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white text-xl font-bold">3</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Plan Cortex</h4>
              <p className="text-white/70 text-sm mb-3">Compromiso mínimo: 3 meses</p>
              <div className="text-xs text-white/60">
                <p className="mb-1">• Inversión total: $2,385</p>
                <p className="mb-1">• ROI esperado: $1,200</p>
                <p className="mb-1">• Tiempo de recuperación: 2.0 meses</p>
                <p>• Soporte por correo electrónico</p>
              </div>
            </div>

            <div className="text-center p-4 bg-cordesa-yellow/10 rounded-lg border border-cordesa-yellow/30">
              <div className="w-12 h-12 bg-cordesa-yellow rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-black text-xl font-bold">6</span>
              </div>
              <h4 className="text-lg font-semibold text-white mb-2">Plan Neural</h4>
              <p className="text-white/70 text-sm mb-3">Compromiso mínimo: 6 meses</p>
              <div className="text-xs text-white/60">
                <p className="mb-1">• Inversión total: $8,970</p>
                <p className="mb-1">• ROI esperado: $27,060</p>
                <p className="mb-1">• Tiempo de recuperación: 2.0 meses</p>
                <p>• Soporte prioritario (&lt;4h respuesta)</p>
              </div>
            </div>
          </div>

          <div className="mt-6 p-4 bg-white/10 rounded-lg">
            <h4 className="text-lg font-semibold text-white mb-3">¿Por qué estos compromisos?</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
              <div className="flex items-start">
                <span className="text-cordesa-yellow mr-2">•</span>
                <span className="text-white/80">Garantiza tiempo suficiente para implementar y optimizar</span>
              </div>
              <div className="flex items-start">
                <span className="text-cordesa-yellow mr-2">•</span>
                <span className="text-white/80">Permite recuperar la inversión inicial en desarrollo</span>
              </div>
              <div className="flex items-start">
                <span className="text-cordesa-yellow mr-2">•</span>
                <span className="text-white/80">Asegura estabilidad para el equipo de desarrollo</span>
              </div>
              <div className="flex items-start">
                <span className="text-cordesa-yellow mr-2">•</span>
                <span className="text-white/80">Facilita la escalabilidad a todos los departamentos</span>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
