import React, { useEffect, useState } from "react";
import { openingHours } from "@/config/business";
import { Clock } from "lucide-react";

// Londrina/PR está em America/Sao_Paulo (UTC-3, sem horário de verão atual).
function getLondrinaNow() {
  // "now" no fuso de São Paulo via Intl com formato que preserva o offset local
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const map = {};
  parts.forEach((p) => (map[p.type] = p.value));

  const weekdayMap = {
    Sun: 6, Mon: 0, Tue: 1, Wed: 2, Thu: 3, Fri: 4, Sat: 5,
  };
  const dayIndex = weekdayMap[map.weekday.replace(",", "")];
  const minutes = parseInt(map.hour, 10) * 60 + parseInt(map.minute, 10);
  return { dayIndex, minutes };
}

function parseTime(t) {
  const [h, m] = t.split(":").map(Number);
  return h * 60 + m;
}

export default function BusinessHours() {
  const [status, setStatus] = useState({ loading: true });

  useEffect(() => {
    const compute = () => {
      const { dayIndex, minutes } = getLondrinaNow();
      const today = openingHours[dayIndex];
      if (!today || !today.open) {
        setStatus({ open: false, label: "Fechado agora" });
        return;
      }
      const open = parseTime(today.open);
      const close = parseTime(today.close);
      setStatus({
        open: minutes >= open && minutes < close,
        label: minutes >= open && minutes < close ? "Aberto agora" : "Fechado agora",
      });
    };
    compute();
    const t = setInterval(compute, 60000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="rounded-3xl border border-border/60 bg-card p-7">
      <div className="mb-5 flex items-center justify-between">
        <h3 className="font-heading text-xl font-semibold text-primary">Horários de atendimento</h3>
        <Clock className="h-5 w-5 text-complementary" strokeWidth={1.5} aria-hidden="true" />
      </div>

      {!status.loading && (
        <div className="mb-5 inline-flex items-center gap-2 rounded-full bg-secondary/30 px-3 py-1.5 text-xs font-semibold">
          <span
            className={`h-2 w-2 rounded-full ${status.open ? "bg-green-600" : "bg-complementary"}`}
            aria-hidden="true"
          />
          <span className={status.open ? "text-green-700" : "text-primary/70"}>{status.label}</span>
        </div>
      )}

      <ul className="divide-y divide-border/50">
        {openingHours.map((d) => {
          const isToday = !status.loading && openingHours.indexOf(d) === getLondrinaNow().dayIndex;
          return (
            <li
              key={d.day}
              className={`flex items-center justify-between py-2.5 text-sm ${
                isToday ? "font-semibold text-primary" : "text-primary/75"
              }`}
            >
              <span>{d.day}</span>
              <span className="tabular-nums">
                {d.open ? `${d.open} — ${d.close}` : "Fechado"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}