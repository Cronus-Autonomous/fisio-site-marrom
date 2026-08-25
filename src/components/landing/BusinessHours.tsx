import { useEffect, useState } from "react";
import { Clock } from "lucide-react";
import { business } from "@/config/business";
import { cn } from "@/lib/utils";

function londrinaNow() {
  const parts = new Intl.DateTimeFormat("pt-BR", {
    timeZone: "America/Sao_Paulo",
    weekday: "short",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(new Date());

  const get = (t: string) => parts.find((p) => p.type === t)?.value ?? "";
  const weekdayMap: Record<string, number> = {
    dom: 0,
    seg: 1,
    ter: 2,
    qua: 3,
    qui: 4,
    sex: 5,
    sáb: 6,
    sab: 6,
  };
  const key = get("weekday").toLowerCase().replace(".", "").slice(0, 3);
  return {
    day: weekdayMap[key] ?? 0,
    minutes: Number(get("hour")) * 60 + Number(get("minute")),
  };
}

function toMinutes(hhmm: string) {
  const [h, m] = hhmm.split(":");
  return Number(h) * 60 + Number(m);
}

export function BusinessHours() {
  const [now, setNow] = useState<{ day: number; minutes: number } | null>(null);

  useEffect(() => {
    setNow(londrinaNow());
    const id = window.setInterval(() => setNow(londrinaNow()), 60_000);
    return () => window.clearInterval(id);
  }, []);

  const today = now ? business.hours[now.day] : undefined;
  const isOpen =
    now && today && today.open && today.close
      ? now.minutes >= toMinutes(today.open) && now.minutes < toMinutes(today.close)
      : false;

  return (
    <div className="rounded-2xl border border-clay/40 bg-card p-7 shadow-soft">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <h3 className="flex items-center gap-2 font-display text-xl text-cocoa">
          <Clock className="h-5 w-5 text-terracotta" strokeWidth={1.5} aria-hidden="true" />
          Horários de atendimento
        </h3>
        {now ? (
          <span
            className={cn(
              "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium",
              isOpen ? "bg-sand text-terracotta" : "bg-muted text-muted-foreground",
            )}
          >
            <span
              aria-hidden="true"
              className={cn(
                "h-1.5 w-1.5 rounded-full",
                isOpen ? "bg-terracotta" : "bg-muted-foreground",
              )}
            />
            {isOpen ? "Aberto agora" : "Fechado agora"}
          </span>
        ) : null}
      </div>

      <ul className="mt-5 divide-y divide-border text-sm">
        {business.hours.map((h, index) => {
          const current = now?.day === index;
          return (
            <li
              key={h.label}
              className={cn(
                "flex items-center justify-between gap-4 py-2.5",
                current && "font-medium text-cocoa",
              )}
            >
              <span className={cn(!current && "text-muted-foreground")}>
                {h.label}
                {current ? (
                  <span className="ml-2 text-xs uppercase tracking-wider text-terracotta">hoje</span>
                ) : null}
              </span>
              <span className={cn(!current && "text-muted-foreground")}>
                {h.open && h.close ? `${h.open} às ${h.close}` : "Fechado"}
              </span>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
