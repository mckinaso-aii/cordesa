'use client'

import { useEffect, useRef } from 'react'
import mermaid from 'mermaid'

interface MermaidChartProps {
  chart: string
  className?: string
}

export default function MermaidChart({ chart, className = '' }: MermaidChartProps) {
  const chartRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (chartRef.current && chart) {
      // Clear previous content
      chartRef.current.innerHTML = ''
      
      // Initialize mermaid with Cordesa theme
      mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
        themeVariables: {
          primaryColor: '#FFD500', // Cordesa Yellow
          primaryTextColor: '#FFFFFF',
          primaryBorderColor: '#FFD500',
          lineColor: '#FFFFFF',
          sectionBkgColor: '#1F2937',
          altSectionBkgColor: '#374151',
          gridColor: '#4B5563',
          secondaryColor: '#000000', // Cordesa Black
          tertiaryColor: '#FFD500',
          background: '#000000',
          mainBkg: '#1F2937',
          secondBkg: '#374151',
          tertiaryBkg: '#4B5563'
        }
      })
      
      // Render the chart
      const chartId = 'mermaid-chart-' + Date.now()
      mermaid.render(chartId, chart).then(({ svg }) => {
        if (chartRef.current) {
          chartRef.current.innerHTML = svg
        }
      }).catch((error) => {
        console.error('Mermaid rendering error:', error)
        if (chartRef.current) {
          chartRef.current.innerHTML = `<div class="text-red-400 p-4 text-center">Error rendering chart: ${error.message}</div>`
        }
      })
    }
  }, [chart])

  return (
    <div 
      ref={chartRef} 
      className={`mermaid ${className}`}
      style={{ 
        backgroundColor: 'transparent',
        borderRadius: '8px',
        padding: '0.5rem',
        overflow: 'auto',
        fontSize: '12px'
      }}
    />
  )
}
