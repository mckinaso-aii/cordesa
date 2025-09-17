'use client'

import { useState, useEffect } from 'react'
import { 
  ChartBarIcon, 
  CogIcon, 
  DocumentChartBarIcon,
  BuildingOfficeIcon,
  CurrencyDollarIcon,
  GlobeAltIcon,
  ArrowRightIcon,
  CheckCircleIcon,
  ClockIcon,
  UsersIcon
} from '@heroicons/react/24/outline'
import { calculateTotalROI, getHighPriorityInsights, getRecommendedPlan, allDepartmentInsights } from '@/data/insights'
import MermaidChart from '@/components/MermaidChart'

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isCheckingAuth, setIsCheckingAuth] = useState(true)

  // Check for existing authentication on component mount
  useEffect(() => {
    const savedAuth = localStorage.getItem('cordesa-auth')
    if (savedAuth === 'true') {
      setIsAuthenticated(true)
    }
    setIsCheckingAuth(false)
  }, [])

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    
    try {
      const response = await fetch('/api/auth', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ password }),
      })

      if (response.ok) {
        setIsAuthenticated(true)
        localStorage.setItem('cordesa-auth', 'true')
      } else {
        alert('Contraseña incorrecta')
      }
    } catch (error) {
      alert('Error de conexión')
    } finally {
      setIsLoading(false)
    }
  }

  if (isCheckingAuth) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-cordesa-yellow">
        <div className="glass-effect rounded-2xl p-8 w-full max-w-md mx-4">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-cordesa-yellow mx-auto mb-4"></div>
            <p className="text-white/80">Verificando autenticación...</p>
          </div>
        </div>
      </div>
    )
  }

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-black via-gray-800 to-cordesa-yellow p-4">
        <div className="glass-effect rounded-2xl p-6 sm:p-8 w-full max-w-md">
          <div className="text-center mb-6 sm:mb-8">
            <h1 className="text-2xl sm:text-3xl font-bold cordesa-text mb-2">Cordesa S.A.</h1>
            <p className="text-white/80 text-sm sm:text-base">Propuesta de Inteligencia de Negocio</p>
          </div>
          
          <form onSubmit={handleLogin} className="space-y-4 sm:space-y-6">
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-white mb-2">
                Contraseña de Acceso
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-cordesa-yellow focus:border-transparent text-sm sm:text-base"
                placeholder="Ingrese la contraseña"
                autoComplete="current-password"
                required
              />
            </div>
            
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-cordesa-yellow to-cordesa-yellow-dark hover:from-cordesa-yellow-dark hover:to-cordesa-yellow text-black font-semibold py-2 sm:py-3 px-4 rounded-lg transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
            >
              {isLoading ? 'Verificando...' : 'Acceder a la Propuesta'}
            </button>
          </form>
          
          <div className="mt-4 sm:mt-6 text-center text-xs sm:text-sm text-white/60">
            <p>Desarrollado por <span className="text-cordesa-yellow">aii.cr</span></p>
          </div>
        </div>
      </div>
    )
  }

  const totalROI = calculateTotalROI()
  const highPriorityInsights = getHighPriorityInsights()
  const recommendedPlan = getRecommendedPlan()

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-800 to-cordesa-yellow">
      {/* Header */}
      <header className="glass-effect border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 sm:py-4">
          <div className="flex items-center justify-between">
            <div className="min-w-0 flex-1">
              <h1 className="text-lg sm:text-xl md:text-2xl font-bold cordesa-text truncate">Cordesa S.A.</h1>
              <p className="text-white/80 text-xs sm:text-sm truncate">Propuesta de Inteligencia de Negocio</p>
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
            Diagnóstico de <span className="cordesa-text">Inteligencia de Negocio</span>
          </h2>
          <p className="text-lg sm:text-xl text-white/80 max-w-3xl mx-auto">
            Análisis integral de Cordesa S.A. con enfoque en optimización de procesos, 
            automatización y transformación digital para maximizar eficiencia operativa
          </p>
        </div>

        {/* Overview Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 mb-8 sm:mb-12">
          <div className="roi-card">
            <div className="flex items-center mb-4">
              <BuildingOfficeIcon className="h-8 w-8 text-cordesa-yellow mr-3" />
              <h3 className="text-xl font-semibold text-white">Empresa Industrial</h3>
            </div>
            <p className="text-white/70">
              Cordesa S.A. - Importación, exportación, alquiler de equipos y servicios técnicos especializados
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <ChartBarIcon className="h-8 w-8 text-cordesa-yellow mr-3" />
              <h3 className="text-xl font-semibold text-white">ROI Promedio</h3>
            </div>
            <p className="text-white/70">
              <span className="text-cordesa-yellow font-bold text-2xl">{totalROI.toFixed(1)}%</span> de retorno de inversión potencial identificado
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <CogIcon className="h-8 w-8 text-cordesa-yellow mr-3" />
              <h3 className="text-xl font-semibold text-white">Departamentos Analizados</h3>
            </div>
            <p className="text-white/70">
              <span className="text-cordesa-yellow font-bold text-2xl">7</span> áreas operativas con prioridad alta identificada
            </p>
          </div>

          <div className="roi-card">
            <div className="flex items-center mb-4">
              <CheckCircleIcon className="h-8 w-8 text-cordesa-yellow mr-3" />
              <h3 className="text-xl font-semibold text-white">Automatizaciones Sugeridas</h3>
            </div>
            <p className="text-white/70">
              <span className="text-cordesa-yellow font-bold text-2xl">25+</span> oportunidades de automatización identificadas
            </p>
          </div>
        </div>

        {/* Value Proposition Section */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Propuesta de <span className="cordesa-text">Valor</span>
          </h3>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
            {/* Department Metrics */}
            <div className="roi-card">
              <h4 className="text-xl font-semibold text-white mb-4 flex items-center">
                <UsersIcon className="h-6 w-6 text-cordesa-yellow mr-2" />
                Análisis por Departamento
              </h4>
              <div className="space-y-3">
                {Object.entries(allDepartmentInsights)
                  .filter(([_, insight]) => insight.priority === 'alta')
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
        </div>

        {/* Plan Comparison */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Comparativo de <span className="cordesa-text">Planes</span>
          </h3>
          
          <div className="text-center mb-8">
            <p className="text-xl text-white/80 max-w-4xl mx-auto">
              Cortex: Automatización básica para comenzar | Neural: Procesos conectados y decisiones guiadas por datos
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
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
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Dashboard estático con hasta 5 KPIs clave para 1 departamento</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Visibilidad básica de Contabilidad</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">1 automatización práctica</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Lectura automática de facturas electrónicas (ahorro $400/mes)</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Sitio web simple (3 páginas) con asistente de IA básico</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Presencia online básica + chatbot para consultas</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Análisis inicial con hasta 3 documentos</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Optimización básica de procesos</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Odoo gratuito (ERP) con 1 módulo personalizado</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Reemplaza Softland con ERP moderno</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">DNS + Dominio + Email Hosting</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Infraestructura técnica completa</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
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
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-white/80 text-sm">Solo 1 departamento (Contabilidad únicamente)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-white/80 text-sm">No escalable a Ventas, Bodega, Postventa</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-white/80 text-sm">KPIs estáticos, no adaptativos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
                    <span className="text-white/80 text-sm">No resuelve integración entre departamentos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-red-400 mr-2">✗</span>
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
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Dashboard adaptativo con hasta 12 KPIs para 2 departamentos</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Visibilidad completa de Contabilidad + Ventas</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">2-3 automatizaciones conectando procesos internos/externos</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Facturas electrónicas + Cobros automáticos + Gestión de leads (ahorro $800/mes)</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Sitio web profesional (5 secciones) con asistente IA contextual</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Presencia profesional + captura de leads + chatbot avanzado</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Análisis inicial con hasta 10 documentos</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Optimización profunda de procesos</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">Odoo empresarial (ERP) con 15 usuarios, 10 apps, 5 módulos personalizados</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Reemplaza Softland con ERP moderno + escalabilidad completa</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">WhatsApp Business API completo</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Comunicación automatizada + chatbot conversacional</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
                      <div>
                        <div className="text-white font-medium text-sm">DNS + Dominio + Email Hosting profesional</div>
                        <div className="text-white/60 text-xs">→ Resuelve: Infraestructura técnica completa + correos @cordesa.cr</div>
                      </div>
                    </div>
                  </div>
                  <div className="p-3 bg-white/10 rounded-lg">
                    <div className="flex items-start">
                      <span className="text-cordesa-yellow mr-2">✓</span>
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
                    <span className="text-cordesa-yellow mr-2">✓</span>
                    <span className="text-white/80 text-sm">Elimina dependencia excesiva en Excel y WhatsApp</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cordesa-yellow mr-2">✓</span>
                    <span className="text-white/80 text-sm">Maximiza uso de Softland (de 20% a 100%)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cordesa-yellow mr-2">✓</span>
                    <span className="text-white/80 text-sm">Automatiza procesos manuales sin trazabilidad</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cordesa-yellow mr-2">✓</span>
                    <span className="text-white/80 text-sm">Integra comunicación entre departamentos</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-cordesa-yellow mr-2">✓</span>
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
          <div className="roi-card mt-8">
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

          {/* Pain Points vs Solutions Mapping */}
          <div className="roi-card bg-gradient-to-r from-red-900/30 to-green-900/30 border border-red-500/30 mt-8">
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
                  Total Ahorro Mensual: <span className="text-cordesa-yellow">$1,500/mes</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Implementation Roadmap */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Mapa de <span className="cordesa-text">Implementación</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
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
                  <span className="text-white/80 text-sm">Sistema de gestión de leads</span>
                </li>
                <li className="flex items-start">
                  <ArrowRightIcon className="h-4 w-4 text-cordesa-yellow mr-2 mt-1 flex-shrink-0" />
                  <span className="text-white/80 text-sm">Dashboard ejecutivo</span>
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
        </div>

        {/* Workflow Diagrams */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Diagramas de <span className="cordesa-text">Flujo de Trabajo</span>
          </h3>
          
          <div className="text-center mb-8">
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Visualización de procesos actuales vs propuestos por departamento
            </p>
          </div>

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

          {/* Commitment Terms Section */}
          <div className="roi-card bg-gradient-to-r from-orange-900/30 to-cordesa-yellow/30 border border-orange-500/30 mt-8">
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
        </div>

        {/* Technology Stack */}
        <div className="mb-8 sm:mb-12">
          <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6 text-center">
            Stack <span className="cordesa-text">Tecnológico</span>
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="roi-card">
              <h4 className="text-xl font-semibold text-white mb-4">Sistemas Principales</h4>
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
                  <span className="text-white/80">Odoo ERP</span>
                  <span className="text-cordesa-yellow text-sm">Reemplazo completo</span>
                </div>
              </div>
            </div>

            <div className="roi-card">
              <h4 className="text-xl font-semibold text-white mb-4">Tecnologías de Desarrollo</h4>
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

        {/* Contact Section */}
        <div className="text-center">
          <div className="roi-card max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              ¿Listo para <span className="cordesa-text">Transformar</span> su Operación?
            </h3>
            <p className="text-white/80 mb-6">
              Contacte con nuestro equipo para discutir la implementación de esta propuesta 
              y comenzar su transformación digital.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:contacto@aii.cr"
                className="bg-gradient-to-r from-cordesa-yellow to-cordesa-yellow-dark hover:from-cordesa-yellow-dark hover:to-cordesa-yellow text-black font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center"
              >
                Contactar Ahora
              </a>
              <a
                href="https://aii.cr"
                target="_blank"
                rel="noopener noreferrer"
                className="glass-effect hover:glass-hover text-white font-semibold py-3 px-6 rounded-lg transition-all duration-200 text-center"
              >
                Ver Más Proyectos
              </a>
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="mt-16 text-center text-white/60">
          <p>© 2024 aii.cr - Artificial Intelligence Integration</p>
          <p className="text-sm mt-2">Desarrollado para Cordesa S.A.</p>
        </footer>
      </main>
    </div>
  )
}
