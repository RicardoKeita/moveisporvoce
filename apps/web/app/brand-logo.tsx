export function BrandLogo({ variant }: { variant: "hero" | "modal" }) {
  return (
    <div className={`replica-brand replica-brand-${variant}`}>
      <img
        src="/brand/logo-branco.svg"
        alt="Método Móveis Por Você"
        width={512}
        height={512}
        loading="eager"
        fetchPriority={variant === "hero" ? "high" : undefined}
      />
    </div>
  );
}
