'use client';
import { useState } from 'react';
import SiteHeader from '@/components/SiteHeader';
import Footer from '@/components/Footer';

const modes = [
  {id:'agro', icon:'✦', label:'Agricultura', sub:'Vegetación · suelo · lluvia'},
  {id:'agua', icon:'≋', label:'Hidrología', sub:'Ríos · caudal · precipitación'},
  {id:'fuego', icon:'△', label:'Incendios', sub:'Focos · viento · exposición'}
];
const metrics = [
  ['Precipitación 7 días','42 mm','Acumulado demostrativo','↗ 12%'],
  ['Humedad del suelo','61 %','Condición superficial','NORMAL'],
  ['Vegetación / NDVI','0,72','Vigor vegetal','FAVORABLE'],
  ['Temperatura','28,4 °C','Promedio demostrativo','+1,2°']
];
export default function DemoPage(){
 const [mode,setMode]=useState('agro'); const [range,setRange]=useState('30 días');
 return <div className="demoPage"><SiteHeader/>
  <section className="demoHero">
   <div><span className="demoEyebrow">SAT-AGRO · DEMOSTRACIÓN PÚBLICA</span><h1>Probá SAT-AGRO<br/><em>sobre el territorio.</em></h1><p>Una experiencia limitada para explorar cómo convertimos observación satelital y datos ambientales en señales útiles para la decisión.</p></div>
   <div className="demoStatus"><i></i> DEMO · DATOS ILUSTRATIVOS</div>
  </section>
  <section className="demoWorkspace">
   <aside className="demoRail"><span className="railTitle">ELEGÍ UN ANÁLISIS</span>{modes.map(m=><button key={m.id} className={mode===m.id?'railMode active':'railMode'} onClick={()=>setMode(m.id)}><b>{m.icon}</b><span><strong>{m.label}</strong><small>{m.sub}</small></span></button>)}<div className="railDivider"/><span className="railTitle">TERRITORIO DEMO</span><div className="place"><span>⌖</span><div><b>Colonia Progreso</b><small>Corrientes · Argentina</small></div></div><button className="outlineBtn">Analizar otro lugar →</button><p className="railNote">La versión pública limita variables, período e informes. AgroClima PRO amplía fuentes, históricos y alertas.</p></aside>
   <main className="demoMap">
    <div className="mapGrid"></div><div className="continent">AMÉRICA<br/><span>DEL SUR</span></div><div className="river rA"></div><div className="river rB"></div><div className="mapPulse"><i></i><i></i><b></b></div>
    <div className="mapTop"><span>MAPA TERRITORIAL</span><div><button>Satélite</button><button>Terreno</button><button>Capas +</button></div></div>
    <div className="mapLegend"><span><i className="lg1"></i>Vegetación</span><span><i className="lg2"></i>Humedad</span><span><i className="lg3"></i>Precipitación</span></div>
    <div className="mapCoords">28.2° S · 58.7° O<br/><small>Área demostrativa</small></div>
   </main>
   <aside className="demoMetrics"><div className="metricHead"><div><span>COLONIA PROGRESO</span><h2>Condición territorial</h2></div><b>● NORMAL</b></div>{metrics.map((m,i)=><article className="metricCard" key={m[0]}><span>{m[0]}</span><strong>{m[1]}</strong><small>{m[2]}</small><em className={i===0?'up':''}>{m[3]}</em></article>)}</aside>
  </section>
  <section className="demoAnalysis">
   <div className="chartPanel"><div className="panelHead"><div><span>SERIE TEMPORAL</span><h2>Precipitación y condición del suelo</h2></div><div className="ranges">{['7 días','30 días','90 días','1 año'].map(r=><button className={range===r?'on':''} onClick={()=>setRange(r)} key={r}>{r}</button>)}</div></div><div className="chart"><div className="axis"><span>80</span><span>60</span><span>40</span><span>20</span><span>0</span></div><svg viewBox="0 0 900 250" preserveAspectRatio="none"><defs><linearGradient id="fill" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="#00c6ee" stopOpacity=".35"/><stop offset="1" stopColor="#00c6ee" stopOpacity="0"/></linearGradient></defs><path d="M0 190 C70 185 90 150 145 165 S220 210 270 145 S350 105 410 130 S500 190 555 120 S640 70 700 105 S790 165 900 80 L900 250 L0 250Z" fill="url(#fill)"/><path d="M0 190 C70 185 90 150 145 165 S220 210 270 145 S350 105 410 130 S500 190 555 120 S640 70 700 105 S790 165 900 80" fill="none" stroke="#00c6ee" strokeWidth="3"/><path d="M0 150 C110 140 170 160 260 148 S410 130 500 140 S650 115 760 120 S840 110 900 105" fill="none" stroke="#6fdd9e" strokeWidth="2" strokeDasharray="6 5"/></svg><div className="chartLabels"><span>01 SEP</span><span>08 SEP</span><span>15 SEP</span><span>22 SEP</span><span>HOY</span></div></div></div>
   <aside className="insight"><span className="demoEyebrow">ANÁLISIS SAT-AGRO</span><div className="insightState"><i></i><b>NIVEL DE ATENCIÓN</b><strong>NORMAL</strong></div><p>Las precipitaciones recientes muestran una recuperación de la disponibilidad superficial de humedad. La señal de vegetación se mantiene en condición favorable dentro de esta demostración.</p><div className="trace"><span>FUENTES DE LA DEMO</span><b>Satélite · clima · suelo</b><small>Los valores actuales son ilustrativos. Las fuentes operativas se habilitarán sólo después de validar cada API y su trazabilidad.</small></div><button className="reportBtn">Ver informe territorial <b>→</b></button></aside>
  </section>
  <section className="demoGate"><span>AGROCLIMA PRO</span><h2>La demo muestra una señal.<br/>PRO construye la decisión.</h2><p>Históricos extensos, análisis multifuente, alertas configurables, polígonos propios, comparación temporal e informes profesionales.</p><div><a href="/plataforma" className="button">Conocer AgroClima PRO →</a><a href="/contacto" className="gateLink">Solicitar una demostración</a></div></section>
  <Footer/>
 </div>
}
