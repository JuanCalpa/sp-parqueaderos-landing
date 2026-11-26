"use client";

import type { ComponentType, SVGProps } from "react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import * as LucideIcons from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/pricing-4-utils/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/siteData";

interface IconPlaceholderProps extends SVGProps<SVGSVGElement> {
  lucide: string;
  tabler?: string;
  hugeicons?: string;
  phosphor?: string;
  remixicon?: string;
}

function IconPlaceholder({
  lucide,
  tabler,
  hugeicons,
  phosphor,
  remixicon,
  ...props
}: IconPlaceholderProps) {
  const Icon = (
    LucideIcons as unknown as Record<
      string,
      ComponentType<SVGProps<SVGSVGElement>>
    >
  )[lucide];
  if (!Icon) return null;
  return <Icon {...props} />;
}

interface TierFeature {
  text: string;
  bold?: boolean;
}

interface Tier {
  category: string;
  name: string;
  monthly: string;
  annual: string;
  description: string;
  features: TierFeature[];
  cta: string;
  featured: boolean;
}

const tiers: Tier[] = [
  {
    category: "PEQUEÑO PARQUEADERO",
    name: "Plan Básico",
    monthly: "59.000",
    annual: "49.000",
    description:
      "Para parqueaderos de hasta 30 celdas con operación de un solo turno.",
    features: [
      { text: "Hasta 30 celdas de parqueo" },
      { text: "2 usuarios (1 Admin + 1 Cajero)" },
      { text: "Impresión Térmica 80mm / 58mm" },
      { text: "Arqueo de caja básico diario" },
    ],
    cta: "Iniciar con Básico",
    featured: false,
  },
  {
    category: "OPERACIÓN CONTINUA",
    name: "Plan Profesional",
    monthly: "119.000",
    annual: "99.000",
    description:
      "Para estacionamientos comerciales de alto flujo con WhatsApp y múltiples cajeros.",
    features: [
      { text: "Celdas ilimitadas de carros y motos" },
      { text: "Usuarios ilimitados y roles asignables" },
      { text: "Ticket Oficial por WhatsApp Meta API", bold: true },
      { text: "Tablero de llaves y casilleros de cascos" },
      { text: "Gestión de mensualidades con cobro a $0" },
      { text: "App Móvil para operadores en patio" },
    ],
    cta: "Probar 15 Días Gratis",
    featured: true,
  },
  {
    category: "MULTI-SEDE / FRANQUICIAS",
    name: "Plan Enterprise",
    monthly: "249.000",
    annual: "207.000",
    description:
      "Para operadoras con múltiples sucursales que exigen reportería centralizada.",
    features: [
      { text: "Hasta 5 sedes independientes" },
      { text: "Panel unificado de control para Propietario" },
      { text: "Auditoría forense completa y exportación CSV" },
      { text: "Soporte prioritario 24/7 y SLA 99.98%" },
    ],
    cta: "Contactar Ventas",
    featured: false,
  },
];

export default function PricingBlock() {
  const sectionRef = useRef<HTMLElement>(null);
  const whatsappNumber = siteConfig.phone.replace(/[^0-9]/g, "");

  useEffect(() => {
    if (typeof window === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".pricing-header > *",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 95%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".pricing-card",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.65,
          stagger: 0.14,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 92%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        ".popular-badge",
        { scale: 0.75, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          delay: 0.25,
          ease: "back.out(2)",
          clearProps: "all",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 92%",
            once: true,
          },
        },
      );

      ScrollTrigger.refresh();
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="tarifas"
      className="flex w-full items-center justify-center bg-[#F8FAFC] px-4 py-20 text-slate-900 sm:px-6 lg:px-8"
    >
      <div className="mx-auto w-full max-w-6xl">
        <div className="pricing-header mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#B80D14]">
            TARIFAS TRANSPARENTES
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Elige el plan ideal para tu parqueadero
          </h2>
          <p className="mt-3 text-base text-[#6B5B57]">
            Sin cláusulas de permanencia. Configuración en la nube lista para
            operar en minutos.
          </p>
        </div>

        <div className="pricing-grid mt-14 grid grid-cols-1 gap-8 md:grid-cols-3 items-stretch">
          {tiers.map((tier) => {
            const price = tier.monthly;
            const waUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
              `Hola Sistemas Palacios, me interesa el ${tier.name} ($${price} / mes COP) de SP Parqueaderos.`,
            )}`;

            return (
              <div key={tier.name} className="pricing-card flex">
                <Card
                  className={cn(
                    "relative flex w-full flex-col justify-between transition-shadow duration-200 hover:shadow-lg",
                    tier.featured
                      ? "border-2 border-[#B80D14] shadow-xl shadow-[#B80D14]/10"
                      : "border border-slate-200/90 shadow-sm",
                  )}
                >
                  {tier.featured && (
                    <div className="popular-badge absolute -top-3.5 left-1/2 -translate-x-1/2">
                    <Badge className="bg-[#B80D14] px-4 py-1 text-[11px] font-extrabold uppercase tracking-wider text-white shadow-sm hover:bg-[#B80D14]">
                      MÁS POPULAR
                    </Badge>
                  </div>
                )}

                <CardHeader className="pb-4">
                  <p
                    className={cn(
                      "text-[11px] font-bold uppercase tracking-[0.14em]",
                      tier.featured ? "text-[#B80D14]" : "text-slate-500",
                    )}
                  >
                    {tier.category}
                  </p>
                  <CardTitle className="mt-1 text-2xl font-extrabold text-slate-900">
                    {tier.name}
                  </CardTitle>
                  <CardDescription className="mt-2 text-xs leading-relaxed text-[#6B5B57] sm:min-h-10">
                    {tier.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="flex flex-1 flex-col gap-6">
                  <div>
                    <p className="flex items-baseline gap-1.5">
                      <span
                        className={cn(
                          "text-4xl font-extrabold tracking-tight tabular-nums",
                          tier.featured ? "text-[#B80D14]" : "text-slate-900",
                        )}
                      >
                        ${price}
                      </span>
                      <span className="text-xs font-medium text-slate-500">
                        / mes COP
                      </span>
                    </p>
                  </div>

                  <ul className="flex flex-1 flex-col gap-3 text-xs sm:text-sm text-slate-700">
                    {tier.features.map((feature) => (
                      <li
                        key={feature.text}
                        className="flex items-start gap-2.5"
                      >
                        <IconPlaceholder
                          lucide="Check"
                          tabler="IconCheck"
                          hugeicons="Tick02Icon"
                          phosphor="Check"
                          remixicon="RiCheckLine"
                          className="mt-0.5 size-4 shrink-0 text-emerald-600 stroke-[2.5]"
                          aria-hidden="true"
                        />
                        <span
                          className={cn(
                            feature.bold
                              ? "font-bold text-slate-900"
                              : "text-slate-600",
                          )}
                        >
                          {feature.text}
                        </span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                  <CardFooter className="pt-4">
                    <Button
                      nativeButton={false}
                      variant={tier.featured ? "default" : "outline"}
                      size="lg"
                      className="w-full"
                      render={
                        <a
                          href={waUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                        />
                      }
                    >
                      {tier.cta}
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
