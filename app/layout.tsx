import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'FeedbackRouter — Routes feedback to teams based on urgency',
  description: 'Automatically categorizes and routes customer feedback to appropriate teams via AI-powered priority detection.'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="32087f10-8c5e-4940-8d74-0edf4ce68807"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  )
}
