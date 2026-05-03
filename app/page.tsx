export default function Home() {
  const checkoutUrl = process.env.NEXT_PUBLIC_LS_CHECKOUT_URL || '#'

  return (
    <main className="min-h-screen bg-[#0d1117] text-[#c9d1d9]">
      {/* Hero */}
      <section className="max-w-3xl mx-auto px-6 pt-24 pb-16 text-center">
        <span className="inline-block bg-[#161b22] border border-[#30363d] text-[#58a6ff] text-xs font-semibold px-3 py-1 rounded-full mb-6 uppercase tracking-widest">
          Customer Success
        </span>
        <h1 className="text-4xl sm:text-5xl font-bold text-white leading-tight mb-5">
          Route Feedback to the Right Team,{' '}
          <span className="text-[#58a6ff]">Instantly</span>
        </h1>
        <p className="text-lg text-[#8b949e] mb-8 max-w-xl mx-auto">
          FeedbackRouter uses AI to categorize urgency and automatically dispatch customer feedback to the right team via email or Slack — before issues escalate.
        </p>
        <a
          href={checkoutUrl}
          className="inline-block bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold px-8 py-3 rounded-lg text-base transition-colors"
        >
          Get Started — $18/mo
        </a>
        <p className="mt-4 text-sm text-[#8b949e]">No setup fees. Cancel anytime.</p>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6 text-left">
          {[
            { title: 'AI Triage', desc: 'Classifies feedback by urgency in milliseconds using LLM analysis.' },
            { title: 'Smart Routing', desc: 'Sends critical issues to on-call engineers, feature requests to product.' },
            { title: 'Live Dashboard', desc: 'Monitor feedback flow, response times, and team SLA compliance.' }
          ].map((f) => (
            <div key={f.title} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <h3 className="text-white font-semibold mb-2">{f.title}</h3>
              <p className="text-sm text-[#8b949e]">{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing */}
      <section className="max-w-sm mx-auto px-6 pb-20">
        <h2 className="text-2xl font-bold text-white text-center mb-8">Simple Pricing</h2>
        <div className="bg-[#161b22] border border-[#58a6ff] rounded-2xl p-8 text-center">
          <p className="text-[#58a6ff] font-semibold text-sm uppercase tracking-widest mb-2">Pro</p>
          <p className="text-5xl font-bold text-white mb-1">$18</p>
          <p className="text-[#8b949e] text-sm mb-6">/month</p>
          <ul className="text-sm text-[#c9d1d9] space-y-3 mb-8 text-left">
            {[
              'Unlimited feedback ingestion',
              'AI urgency classification',
              'Email + Slack routing',
              'Response time analytics',
              'Webhook & REST API access',
              'Priority support'
            ].map((item) => (
              <li key={item} className="flex items-center gap-2">
                <span className="text-[#58a6ff] font-bold">✓</span> {item}
              </li>
            ))}
          </ul>
          <a
            href={checkoutUrl}
            className="block w-full bg-[#58a6ff] hover:bg-[#79b8ff] text-[#0d1117] font-bold py-3 rounded-lg transition-colors"
          >
            Start Now
          </a>
        </div>
      </section>

      {/* FAQ */}
      <section className="max-w-2xl mx-auto px-6 pb-24">
        <h2 className="text-2xl font-bold text-white text-center mb-8">FAQ</h2>
        <div className="space-y-4">
          {[
            {
              q: 'How does the AI decide urgency?',
              a: 'Our model analyzes sentiment, keywords, and context to assign a priority score (critical, high, medium, low) and routes accordingly.'
            },
            {
              q: 'Which channels can receive routed feedback?',
              a: 'Currently email and Slack. Webhook forwarding to any HTTP endpoint is also supported out of the box.'
            },
            {
              q: 'Can I customize routing rules?',
              a: 'Yes. You can define custom rules based on keywords, product area, or customer tier to override or supplement AI routing.'
            }
          ].map((item) => (
            <div key={item.q} className="bg-[#161b22] border border-[#30363d] rounded-xl p-5">
              <p className="text-white font-semibold mb-2">{item.q}</p>
              <p className="text-sm text-[#8b949e]">{item.a}</p>
            </div>
          ))}
        </div>
      </section>

      <footer className="text-center text-xs text-[#8b949e] pb-8">
        &copy; {new Date().getFullYear()} FeedbackRouter. All rights reserved.
      </footer>
    </main>
  )
}
