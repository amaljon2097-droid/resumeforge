'use client';
import { useState } from 'react';

interface Result {
  bullets: string[];
  coverLetter: string;
  skills: string[];
}

export default function GeneratePage() {
  const [experience, setExperience] = useState('');
  const [jobTitle, setJobTitle] = useState('');
  const [jobDescription, setJobDescription] = useState('');
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState<Result | null>(null);
  const [error, setError] = useState('');
  const [copied, setCopied] = useState('');

  const copy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopied(label);
    setTimeout(() => setCopied(''), 2000);
  };

  const handleGenerate = async () => {
    if (!experience || !jobTitle || !jobDescription) {
      setError('Please fill in all 3 fields!');
      return;
    }
    const uses = parseInt(localStorage.getItem('rf_uses') || '0');
    if (uses >= 2) {
      window.location.href = 'https://digital-start-ups.lemonsqueezy.com/checkout/buy/8060dd98-ce3c-4e9e-842b-ef43acf490b2';
      return;
    }
    setLoading(true);
    setError('');
    setResult(null);
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ experience, jobTitle, jobDescription }),
      });
      if (!res.ok) throw new Error('Failed');
      const data = await res.json();
      setResult(data);
      localStorage.setItem('rf_uses', String(uses + 1));
      setTimeout(() => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth' }), 100);
    } catch {
      setError('Something went wrong. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="border-b border-slate-800 px-6 py-4 flex items-center justify-between">
        <a href="/" className="text-xl font-bold">⚡ ResumeForge</a>
        <a href="/pricing" className="text-sm text-slate-400 hover:text-white">Pricing</a>
      </div>

      <div className="max-w-2xl mx-auto px-6 py-10">
        <h1 className="text-3xl font-bold mb-1">Generate Your Resume</h1>
        <p className="text-slate-400 mb-8 text-sm">Fill in the 3 fields below → get tailored bullets + cover letter in 30 seconds.</p>

        <div className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Your Experience & Skills *</label>
            <textarea
              value={experience}
              onChange={e => setExperience(e.target.value)}
              placeholder="e.g. 2 years Python, built 3 web apps, React and Node.js, internship at local startup..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder:text-slate-500 text-sm min-h-[100px] resize-none focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Job Title You Want *</label>
            <input
              value={jobTitle}
              onChange={e => setJobTitle(e.target.value)}
              placeholder="e.g. Software Engineering Intern"
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder:text-slate-500 text-sm focus:outline-none focus:border-blue-500"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-300 mb-1.5">Paste Job Description *</label>
            <textarea
              value={jobDescription}
              onChange={e => setJobDescription(e.target.value)}
              placeholder="Paste the full job description from LinkedIn, Indeed, etc..."
              className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-white placeholder:text-slate-500 text-sm min-h-[140px] resize-none focus:outline-none focus:border-blue-500"
            />
          </div>

          {error && (
            <div className="bg-red-950 border border-red-500/30 rounded-lg p-3 text-red-400 text-sm">{error}</div>
          )}

          <button
            onClick={handleGenerate}
            disabled={loading}
            className="w-full bg-blue-600 hover:bg-blue-500 disabled:opacity-50 text-white font-semibold py-3.5 rounded-lg text-base transition-colors flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"/>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                </svg>
                AI is generating your resume...
              </>
            ) : '⚡ Generate My Resume'}
          </button>
          <p className="text-center text-xs text-slate-500">2 free generations · No signup required</p>
        </div>

        {result && (
          <div id="results" className="mt-10 space-y-5">
            <h2 className="text-2xl font-bold">Your Results ✨</h2>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-green-400">📋 Resume Bullet Points</h3>
                <button onClick={() => copy(result.bullets.join('\n'), 'bullets')}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors">
                  {copied === 'bullets' ? '✓ Copied!' : 'Copy All'}
                </button>
              </div>
              <ul className="space-y-2">
                {result.bullets.map((b, i) => (
                  <li key={i} className="flex gap-2 text-sm text-slate-300">
                    <span className="text-green-400 shrink-0">•</span>
                    {b.replace(/^[•\-]\s*/, '')}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold text-blue-400">✉️ Cover Letter</h3>
                <button onClick={() => copy(result.coverLetter, 'cover')}
                  className="text-xs bg-slate-800 hover:bg-slate-700 text-slate-300 px-3 py-1.5 rounded-lg transition-colors">
                  {copied === 'cover' ? '✓ Copied!' : 'Copy'}
                </button>
              </div>
              <p className="text-sm text-slate-300 whitespace-pre-wrap leading-relaxed">{result.coverLetter}</p>
            </div>

            <div className="bg-slate-900 border border-slate-700 rounded-xl p-5">
              <h3 className="font-semibold text-purple-400 mb-3">🎯 Key Skills to Highlight</h3>
              <div className="flex gap-2 flex-wrap">
                {result.skills.map((s, i) => (
                  <span key={i} className="bg-purple-900/30 border border-purple-500/30 text-purple-300 px-4 py-1.5 rounded-full text-sm">
                    {s}
                  </span>
                ))}
              </div>
            </div>

            <button onClick={handleGenerate}
              className="w-full py-3 border border-slate-700 text-slate-400 rounded-xl hover:bg-slate-900 transition-colors text-sm">
              🔄 Regenerate
            </button>
          </div>
        )}
      </div>
    </div>
  );
}