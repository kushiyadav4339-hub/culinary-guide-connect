import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, ShieldCheck, Wallet, Fingerprint, Compass, BadgeCheck, CandlestickChart, FileSearch, TrendingUp, Layers, Globe2, Lock, Gauge } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ProgramComparison } from '@/components/program-comparison';
import { FaqList } from '@/components/faq-list';
import { usd } from '@/lib/elite-data';
function ProfitLens(){
 const [profit,setProfit]=useState(2500);
 const share=Math.round(profit*0.9);
 return <div className="profit-lens">
  <div className="profit-lens-copy">
   <div className="eyebrow">PROFIT PERSPECTIVE / ILLUSTRATIVE</div>
   <h3>See what <em>up to 90%</em> looks like.</h3>
   <p>Move the slider to explore an illustrative profit scenario. Figures are examples only — trading results are never guaranteed, and payouts depend on eligibility, verification and program terms.</p>
   <label htmlFor="profit-range">Illustrative monthly profit</label>
   <input id="profit-range" type="range" min={100} max={20000} step={100} value={profit} onChange={e=>setProfit(Number(e.target.value))}/>
   <div className="profit-scale"><span>{usd(100)}</span><span>{usd(20000)}</span></div>
  </div>
  <div className="profit-lens-figures">
   <div><small>ILLUSTRATIVE PROFIT</small><strong>{usd(profit)}</strong></div>
   <div className="profit-share-figure"><small>YOUR SHARE · UP TO 90%</small><strong>{usd(share)}</strong><TrendingUp size={22}/></div>
   <div><small>PROGRAM PORTION</small><strong>{usd(profit-share)}</strong></div>
   <p>Illustration only. Not a promise of profit or payout. Confirm the exact split and conditions in your program agreement.</p>
  </div>
 </div>
}
export function HomeExpansion(){return <>
 <section className="editorial-section section-band"><div className="section-heading"><div><div className="eyebrow">ACCOUNT PROGRAMS / 03</div><h2>Choose your capacity.<br/>Keep your <em>discipline.</em></h2></div><p>From $5,000 to $100,000.<br/>Explore five published account tiers,<br/>with the conditions in plain sight.</p></div><ProgramComparison compact/></section>
 <section className="editorial-section"><div className="section-heading"><div><div className="eyebrow">THE PROCESS / 04</div><h2>Every move.<br/><em>Considered.</em></h2></div><Button variant="outline" asChild><Link to="/how-it-works">The complete process <ArrowUpRight/></Link></Button></div>
 <div className="process-track">{([{Icon:Compass,n:'01',title:'Explore',text:'Compare account size, fee and conditions. Know the framework before you commit.'},{Icon:BadgeCheck,n:'02',title:'Verify',text:'Confirm eligibility and complete onboarding with identity and compliance checks.'},{Icon:CandlestickChart,n:'03',title:'Trade',text:'Access your workspace across FX, metals and crypto — and manage your exposure.'},{Icon:FileSearch,n:'04',title:'Review',text:'Check profit-share and payout requirements. Understand the review before the reward.'}]).map(s=><article key={s.n}><div className="process-top"><span>{s.n}</span><s.Icon size={17}/></div><h3>{s.title}</h3><p>{s.text}</p></article>)}</div></section>
 <section className="editorial-section section-band"><div className="section-heading"><div><div className="eyebrow">RISK & REWARD / 05</div><h2>Know the limits.<br/>Understand the <em>upside.</em></h2></div><p>Published conditions, not promises.<br/>Read the full agreement before trading.</p></div><div className="risk-metrics"><Link to="/rules"><ShieldCheck/><strong>2%</strong><h3>Daily drawdown limit</h3><p>Confirm reference balance and reset time.</p><ArrowUpRight/></Link><Link to="/rules"><Fingerprint/><strong>2%</strong><h3>Overall drawdown limit</h3><p>Understand the full loss calculation.</p><ArrowUpRight/></Link><Link to="/payouts"><Wallet/><strong>90%<small>UP TO</small></strong><h3>Eligible profit share</h3><p>Subject to terms, verification and review.</p><ArrowUpRight/></Link></div><ProfitLens/></section>
 <section className="editorial-section"><div className="section-heading"><div><div className="eyebrow">INSIDE THE STANDARD / 06</div><h2>One workspace.<br/>Every <em>angle.</em></h2></div><p>Charts, instruments, account metrics<br/>and order controls — connected.</p></div>
 <div className="bento">
  <article className="bento-card wide tall"><svg className="sparkline" viewBox="0 0 400 160" preserveAspectRatio="none" aria-hidden="true"><defs><linearGradient id="spark" x1="0" y1="0" x2="0" y2="1"><stop offset="0" stopColor="oklch(.77 .139 224 / .35)"/><stop offset="1" stopColor="oklch(.77 .139 224 / 0)"/></linearGradient></defs><path d="M0 120 L40 105 L80 115 L120 85 L160 95 L200 60 L240 75 L280 45 L320 55 L360 30 L400 40 L400 160 L0 160 Z" fill="url(#spark)"/><path d="M0 120 L40 105 L80 115 L120 85 L160 95 L200 60 L240 75 L280 45 L320 55 L360 30 L400 40" fill="none" stroke="oklch(.77 .139 224)" strokeWidth="1.5"/></svg><CandlestickChart className="bento-icon" size={18}/><h3>Market perspective</h3><p>Candlestick charts and instrument watchlists keep price action in focus. Illustrative curve — not live data.</p></article>
  <article className="bento-card"><Gauge className="bento-icon" size={18}/><div className="bento-num">2%<small>DAILY DD</small></div><p>Published maximum daily drawdown across every tier.</p></article>
  <article className="bento-card"><TrendingUp className="bento-icon" size={18}/><div className="bento-num">90%<small>UP TO</small></div><p>Eligible profit share, subject to terms and review.</p></article>
  <article className="bento-card"><Globe2 className="bento-icon" size={18}/><div className="instrument-chips"><span>EUR/USD</span><span>XAU/USD</span><span>GBP/USD</span><span>BTC/USD</span><span>USD/JPY</span></div><h3>FX · Metals · Crypto</h3><p>One connected instrument view.</p></article>
  <article className="bento-card"><Lock className="bento-icon" size={18}/><span className="glow-dot"/><h3>Verified access</h3><p>Identity and compliance checks before participation. 18+ only.</p></article>
  <article className="bento-card wide"><Layers className="bento-icon" size={18}/><h3>Five tiers, one decision</h3><p>From $5,000 Entry to $100,000 Advanced — one-time fees from $50 to $1,000, conditions published in plain sight.</p><Button asChild variant="link" style={{alignSelf:'flex-start',padding:0}}><Link to="/programs">Compare all tiers <ArrowRight size={13}/></Link></Button></article>
 </div></section>
 <section className="editorial-section section-band"><div className="section-heading"><div><div className="eyebrow">ANSWERS / 07</div><h2>No question<br/>left in the <em>noise.</em></h2></div><Button variant="ghost" asChild><Link to="/faq">All questions <ArrowRight/></Link></Button></div><FaqList compact/></section>
 <section className="closing-section moire"><div className="eyebrow">YOUR NEXT MOVE / 08</div><h2>Trade with <em>intention.</em></h2><p>Start with the details. Move forward with clarity.</p><div className="hero-buttons"><Button asChild size="lg"><Link to="/programs">Explore Programs <ArrowRight/></Link></Button><Button asChild variant="outline" size="lg"><Link to="/contact">Talk to us <ArrowUpRight/></Link></Button></div></section>
</>}
