import { ExternalLink, Star } from "lucide-react";
import { business, googleReviews, type GoogleReview } from "@/config/business";
import { Reveal } from "./Reveal";

function ReviewCard({ review }: { review: GoogleReview }) {
  return (
    <article className="h-full min-w-[85%] snap-center rounded-2xl border border-clay/40 bg-card p-7 shadow-soft sm:min-w-0">
      <div className="flex items-center gap-3">
        {review.avatarUrl ? (
          <img
            src={review.avatarUrl}
            alt=""
            loading="lazy"
            className="h-10 w-10 shrink-0 rounded-full object-cover"
          />
        ) : (
          <span
            aria-hidden="true"
            className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sand font-display text-terracotta"
          >
            {review.author.slice(0, 1)}
          </span>
        )}
        <div className="min-w-0">
          <p className="truncate text-sm font-medium text-cocoa">{review.author}</p>
          {review.date ? (
            <p className="text-xs text-muted-foreground">{review.date}</p>
          ) : null}
        </div>
      </div>
      <p
        className="mt-4 flex items-center gap-0.5"
        aria-label={`Avaliação: ${review.rating} de 5 estrelas`}
      >
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            aria-hidden="true"
            className={
              i < review.rating ? "h-4 w-4 fill-rose text-rose" : "h-4 w-4 text-clay"
            }
          />
        ))}
      </p>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{review.comment}</p>
    </article>
  );
}

export function TestimonialsSection() {
  const hasReviews = googleReviews.length > 0;

  return (
    <section id="depoimentos" className="bg-cream py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <Reveal className="max-w-2xl">
          <p className="text-[0.7rem] font-medium uppercase tracking-[0.28em] text-terracotta">
            Depoimentos
          </p>
          <h2 className="mt-4 text-3xl leading-tight tracking-tight text-cocoa sm:text-4xl">
            Quem passa por aqui também sente a diferença.
          </h2>
        </Reveal>

        {hasReviews ? (
          <div className="mt-12 -mx-5 flex snap-x snap-mandatory gap-5 overflow-x-auto px-5 pb-2 sm:mx-0 sm:grid sm:grid-cols-2 sm:overflow-visible sm:px-0 lg:grid-cols-3">
            {googleReviews.slice(0, 3).map((review) => (
              <ReviewCard key={review.author + review.comment} review={review} />
            ))}
          </div>
        ) : (
          <Reveal delay={0.08}>
            <div className="mt-12 rounded-2xl border border-dashed border-clay bg-background p-8 text-center">
              <p className="font-display text-xl text-cocoa">
                As avaliações do Google serão exibidas aqui.
              </p>
              <p className="mx-auto mt-3 max-w-xl text-sm leading-relaxed text-muted-foreground">
                Este espaço está preparado para receber as avaliações reais do perfil do Google Meu
                Negócio. Enquanto a integração não está conectada, nenhum depoimento é exibido — as
                avaliações reais podem ser lidas diretamente no Google.
              </p>
            </div>
          </Reveal>
        )}

        <div className="mt-8 flex justify-center">
          <a
            href={business.maps.reviewsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-clay px-6 py-3 text-sm font-medium text-cocoa transition-all duration-300 hover:-translate-y-0.5 hover:border-terracotta hover:text-terracotta focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          >
            Ver mais avaliações no Google
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
