import {createFileRoute,Link} from '@tanstack/react-router';
import {EliteShell,pageHead} from '@/components/elite-shell';
import {FaqList} from '@/components/faq-list';
import {Button} from '@/components/ui/button';
export const Route=createFileRoute('/faq')({head:()=>pageHead('Frequently asked questions','Find answers about Elite Fund programs, drawdown, eligibility, payouts and the trading platform.'),component:Faq});
function Faq(){return <EliteShell><main className="content-page"><div className="eyebrow">ELITE FUND / KNOWLEDGE BASE</div><h1 className="page-title">Clarity, on demand.</h1><p className="page-intro">The questions worth asking before your next move.</p><FaqList/><div className="hero-buttons"><Button asChild variant="outline"><Link to="/contact">Still have a question?</Link></Button></div></main></EliteShell>}
