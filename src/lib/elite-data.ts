export const programs = [
 {name:'Entry',balance:5000,fee:50}, {name:'Starter',balance:10000,fee:100},
 {name:'Popular',balance:25000,fee:250}, {name:'Pro',balance:50000,fee:500}, {name:'Advanced',balance:100000,fee:1000},
];
export const usd = (amount:number) => new Intl.NumberFormat('en-US',{style:'currency',currency:'USD',maximumFractionDigits:0}).format(amount);
export const faqItems = [
 ['What is Elite Fund?','Elite Fund presents trading account programs alongside its proprietary workspace for Forex, metals and digital assets. Review the account agreement to confirm the exact capital and execution model.'],
 ['Which account sizes are available?','Published programs range from $5,000 to $100,000, with one-time fees from $50 to $1,000. The program page compares all five tiers. Confirm current pricing before purchase.'],
 ['What are the drawdown limits?','The official site publishes a 2% maximum daily drawdown and a 2% maximum overall drawdown. Confirm the reference balance, reset time and breach calculations in your account agreement.'],
 ['How much profit can I receive?','The published offer is up to 90% profit share for eligible participants. Eligibility and account review apply; profit and payouts are not guaranteed.'],
 ['How are payouts made?','The official site lists USDT payouts. Confirm the supported blockchain network, wallet requirements, minimum amount, fees and processing schedule before requesting a payout.'],
 ['Who can participate?','Participants must be at least 18 and satisfy identity and compliance checks. Country eligibility and any additional restrictions must be confirmed with Elite Fund.'],
 ['Is the data on this website live?','No. The supplied terminal screenshot and homepage market figures are snapshots. They are not executable quotes or a live market feed.'],
 ['Can I use automated strategies?','The official terms prohibit unauthorized automation, coordinated trading, price manipulation and exploitation of technical errors. Obtain written confirmation before using automated tools.'],
 ['Does this website process program payments?','No. Purchases, trading account access, verification and payout execution remain on the official Elite Fund platform. This website stores support inquiries only.'],
 ['Where can I read the full terms?','Use the official terms and privacy links on the legal pages. Summaries on this website are informational and do not replace your program agreement.'],
];
