const markets = [
  { name: 'EUR / USD', value: '1.12279', change: '+0.06%', label: 'EURO / US DOLLAR' },
  { name: 'XAU / USD', value: '4,175.400', change: '+0.58%', label: 'GOLD / US DOLLAR' },
  { name: 'GBP / USD', value: '1.32989', change: '+0.19%', label: 'BRITISH POUND' },
  { name: 'USD / JPY', value: '157.885', change: '−0.05%', label: 'JAPANESE YEN' },
  { name: 'BTC / USD', value: '82,089.7', change: '−0.05%', label: 'BITCOIN' },
];

export function MarketSnapshot() {
  return <section className="market-strip" aria-label="Illustrative market snapshot">
    <div className="market-label"><span>MARKET SNAPSHOT</span><br />ILLUSTRATIVE DATA</div>
    <div className="market-viewport"><div className="market-track">
      {[0, 1].map(copy => <div className="market-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
        {markets.map(m => <div className="market-item" key={m.name}><strong>{m.name}</strong><span className={`change ${m.change.startsWith('−') ? 'negative' : ''}`}>{m.change}</span><small>{m.label}</small><span>{m.value}</span></div>)}
      </div>)}
    </div></div>
  </section>;
}