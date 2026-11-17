import React, { useState } from "react";
import { Mic, Volume2, CheckCircle2, RotateCcw, AlertTriangle } from "lucide-react";

export interface SpeakingItem {
  text: string; // English sentence or word to say
  translation: string; // Indonesian meaning
}

interface SpeakingPracticeProps {
  items: SpeakingItem[];
  moduleTitle: string;
}

const normalizeWords = (s: string): string[] =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9\s']/g, " ")
    .split(/\s+/)
    .filter(Boolean);

// Simple word-overlap score: how many of the target words the browser heard.
const scoreSentence = (target: string, heard: string): number => {
  const t = normalizeWords(target);
  if (t.length === 0) return 0;
  const heardSet = new Set(normalizeWords(heard));
  const matched = t.filter((w) => heardSet.has(w)).length;
  return Math.round((matched / t.length) * 100);
};

const feedbackFor = (score: number): { label: string; color: string } => {
  if (score >= 90) return { label: "Luar biasa! Pengucapanmu sangat jelas.", color: "text-emerald-700" };
  if (score >= 70) return { label: "Bagus! Hampir sempurna, sedikit lagi.", color: "text-emerald-600" };
  if (score >= 50) return { label: "Lumayan! Coba dengarkan dulu, lalu ulangi.", color: "text-amber-600" };
  return { label: "Coba lagi — dengarkan dulu, lalu ucapkan perlahan.", color: "text-rose-600" };
};

export default function SpeakingPractice({ items, moduleTitle }: SpeakingPracticeProps) {
  const [speakingIdx, setSpeakingIdx] = useState<number | null>(null);
  const [listeningIdx, setListeningIdx] = useState<number | null>(null);
  const [results, setResults] = useState<Record<number, { heard: string; score: number }>>({});
  const [error, setError] = useState<string | null>(null);

  const SpeechRecognitionCtor =
    typeof window !== "undefined"
      ? (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition
      : null;
  const recognitionSupported = !!SpeechRecognitionCtor;
  const ttsSupported = typeof window !== "undefined" && "speechSynthesis" in window;

  const speak = (text: string) => {
    if (!ttsSupported) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = "en-US";
    u.rate = 0.85;
    const voices = window.speechSynthesis.getVoices();
    const voice =
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("en-us")) ||
      voices.find((v) => v.lang && v.lang.toLowerCase().startsWith("en"));
    if (voice) u.voice = voice;
    window.speechSynthesis.speak(u);
  };

  const startListening = (idx: number, target: string) => {
    setError(null);
    if (!recognitionSupported) {
      setError("Browser ini belum mendukung pengenalan suara. Buka aplikasi di Chrome atau Edge (HP/laptop) untuk latihan speaking.");
      return;
    }
    const recognition = new SpeechRecognitionCtor();
    recognition.lang = "en-US";
    recognition.interimResults = false;
    recognition.maxAlternatives = 1;
    setListeningIdx(idx);
    recognition.onresult = (event: any) => {
      const heard = event.results[0][0].transcript as string;
      const score = scoreSentence(target, heard);
      setResults((prev) => ({ ...prev, [idx]: { heard, score } }));
      setListeningIdx(null);
    };
    recognition.onerror = (event: any) => {
      setListeningIdx(null);
      if (event.error === "not-allowed" || event.error === "service-not-allowed") {
        setError("Izin mikrofon ditolak. Izinkan akses mikrofon di browser, lalu coba lagi.");
      } else if (event.error === "no-speech") {
        setError("Tidak ada suara yang terdengar. Coba lagi dan bicara lebih jelas.");
      } else if (event.error === "network") {
        setError("Pengenalan suara butuh internet. Periksa koneksimu, lalu coba lagi.");
      } else {
        setError("Pengenalan suara gagal. Coba lagi.");
      }
    };
    recognition.onend = () => setListeningIdx(null);
    try {
      recognition.start();
    } catch (e) {
      setListeningIdx(null);
      setError("Tidak bisa memulai mikrofon. Coba lagi.");
    }
  };

  if (items.length === 0) return null;

  return (
    <div className="pt-4 border-t border-[#F1EEE6] space-y-3 font-sans">
      <div className="flex items-center gap-2">
        <span className="w-8 h-8 bg-[#5A5A40] rounded-xl flex items-center justify-center text-white">
          <Mic className="w-4 h-4" />
        </span>
        <div>
          <h4 className="font-extrabold text-[#5A5A40] font-serif text-sm leading-tight">
            Latihan Speaking &amp; Pronunciation
          </h4>
          <p className="text-[11px] text-[#8A8471]">
            Modul {moduleTitle} — dengarkan dulu, lalu ucapkan. Aplikasi menilai ucapanmu.
          </p>
        </div>
      </div>

      {!recognitionSupported && (
        <div className="p-3 bg-amber-50 border border-amber-200 rounded-xl text-[11px] text-amber-800 flex gap-2">
          <AlertTriangle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>
            Tombol dengarkan tetap bisa dipakai di semua browser. Untuk latihan bicara (mikrofon),
            buka aplikasi di <strong>Chrome atau Edge</strong> — Safari &amp; sebagian browser lain
            belum mendukung pengenalan suara.
          </span>
        </div>
      )}

      {error && (
        <div className="p-3 bg-rose-50 border border-rose-200 rounded-xl text-[11px] text-rose-700">
          {error}
        </div>
      )}

      <div className="space-y-2.5">
        {items.map((item, i) => {
          const result = results[i];
          const isListening = listeningIdx === i;
          const feedback = result ? feedbackFor(result.score) : null;
          return (
            <div key={i} className="p-3 bg-white border border-[#E8E4D9] rounded-xl space-y-2">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="font-bold text-[#3D3A33] text-sm font-serif">{item.text}</p>
                  <p className="text-[11px] text-slate-500">Artinya: {item.translation}</p>
                </div>
                <span className="text-[10px] font-bold text-[#8A8471] bg-[#F1EEE6] px-2 py-1 rounded-full whitespace-nowrap">
                  {i + 1} / {items.length}
                </span>
              </div>

              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => speak(item.text)}
                  className="flex items-center gap-1.5 px-3 py-1.5 bg-[#EBE7DC] hover:bg-[#D1CCBD] text-[#3D3A33] text-[11px] font-bold rounded-lg cursor-pointer transition-colors"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  Dengarkan
                </button>
                <button
                  onClick={() => startListening(i, item.text)}
                  disabled={isListening || !recognitionSupported}
                  className={`flex items-center gap-1.5 px-3 py-1.5 text-[11px] font-bold rounded-lg cursor-pointer transition-colors ${
                    isListening
                      ? "bg-rose-500 text-white animate-pulse"
                      : "bg-[#5A5A40] hover:bg-[#4C4C36] text-white"
                  } disabled:opacity-50 disabled:cursor-not-allowed`}
                >
                  <Mic className="w-3.5 h-3.5" />
                  {isListening ? "Mendengarkan… silakan bicara" : "Ucapkan"}
                </button>
                {result && (
                  <button
                    onClick={() => {
                      setResults((prev) => {
                        const next = { ...prev };
                        delete next[i];
                        return next;
                      });
                    }}
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 text-slate-600 text-[11px] font-bold rounded-lg cursor-pointer transition-colors"
                  >
                    <RotateCcw className="w-3.5 h-3.5" />
                    Coba Lagi
                  </button>
                )}
              </div>

              {result && (
                <div className="pt-1 space-y-1.5">
                  <p className="text-[11px] text-slate-600">
                    Kamu mengucapkan: <span className="font-semibold text-[#3D3A33]">“{result.heard}”</span>
                  </p>
                  <div className="flex items-center gap-2">
                    <div className="flex-1 h-2 bg-[#F1EEE6] rounded-full overflow-hidden">
                      <div
                        className={`h-full rounded-full transition-all ${
                          result.score >= 70 ? "bg-emerald-500" : result.score >= 50 ? "bg-amber-500" : "bg-rose-400"
                        }`}
                        style={{ width: `${result.score}%` }}
                      />
                    </div>
                    <span className="text-xs font-extrabold text-[#3D3A33]">{result.score}%</span>
                  </div>
                  <p className={`text-[11px] font-bold flex items-center gap-1 ${feedback?.color}`}>
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    {feedback?.label}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <p className="text-[10px] text-[#8A8471] leading-relaxed">
        Penilaian dihitung dari kata-kata yang dikenali browser — ini latihan, bukan ujian resmi.
        Untuk hasil terbaik, bicara di tempat yang tenang dan dekat dengan mikrofon.
      </p>
    </div>
  );
}
