import { useState } from 'react';
import { Link } from '@tanstack/react-router';
import { ArrowRight, ArrowUpRight, Check, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { programs, usd } from '@/lib/elite-data';
export function ProgramComparison({compact=false}:{compact?:boolean}) {
 const [selected,setSelected]=useState(2);const program=programs[selected];if(!program)return null;
 return <div className="comparison">
  <div className="tier-grid" aria-label="Account size">{programs.map((p,i)=>
   <button type="button" className={selected===i?'tier-card selected':'tier-card'} aria-pressed={selected===i} onClick={()=>setSelected(i)} key={p.name}>
    {'badge' in p && p.badge && <span className="tier-badge"><Sparkles size={10}/>{p.badge}</span>}
    <small>{p.name}</small>
    <strong>{usd(p.balance)}</strong>
    <em>{p.tagline}</em>
    <span className="tier-fee">{usd(p.fee)} <small>one-time fee</small></span>
    <ul>{p.features.map(f=><li key={f}><Check size={11}/>{f}</li>)}</ul>
    <span className="tier-cta">{selected===i?'Selected':'View account'}</span>
   </button>)}
  </div>
  <div className="account-summary"><div><div className="eyebrow">{program.name.toUpperCase()} / TRADING CAPACITY</div><div className="balance-display">{usd(program.balance)}</div><p className="page-intro">{program.tagline} A defined account. A disciplined approach.</p></div><dl className="program-metrics"><div><dt>One-time program fee</dt><dd>{usd(program.fee)}</dd></div><div><dt>Maximum daily drawdown</dt><dd>2% <small>{usd(program.balance*.02)} illustrative</small></dd></div><div><dt>Maximum overall drawdown</dt><dd>2% <small>{usd(program.balance*.02)} illustrative</small></dd></div><div><dt>Eligible profit share</dt><dd>Up to 90%</dd></div></dl></div>
  <div className="comparison-bottom"><p>Published on the official Elite Fund site. USD pricing. Confirm current terms before purchase. Illustrative limits use the initial balance, not a confirmed breach calculation.</p>{compact?<Button asChild><Link to="/programs">Compare programs <ArrowRight/></Link></Button>:<Button asChild size="lg"><a href="https://www.elitefund.sbs" target="_blank" rel="noopener noreferrer">Continue to official platform <ArrowUpRight/></a></Button>}</div>
 </div>
}
