import { useEffect, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { siteConfig } from "@/data/siteData"

function StackedCircularFooter() {
  const wrapperRef = useRef<HTMLDivElement>(null)
  const whatsappNumber = siteConfig.phone.replace(/[^0-9]/g, "")
  const ctaWhatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    "Hola Sistemas Palacios, quiero crear mi cuenta de propietario en SP Parqueaderos.",
  )}`

  useEffect(() => {
    if (typeof window === "undefined") return
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return

    gsap.registerPlugin(ScrollTrigger)

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cta-banner-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.6,
          stagger: 0.1,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".cta-banner-section",
            start: "top 92%",
            once: true,
          },
        },
      )

      gsap.fromTo(
        ".footer-anim-item",
        { y: 20, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.55,
          stagger: 0.08,
          ease: "power3.out",
          clearProps: "all",
          scrollTrigger: {
            trigger: ".footer-main-section",
            start: "top 95%",
            once: true,
          },
        },
      )

      ScrollTrigger.refresh()
    }, wrapperRef)

    return () => ctx.revert()
  }, [])

  return (
    <div ref={wrapperRef}>
      {/* Dark Pre-Footer CTA Banner */}
      <section className="cta-banner-section w-full bg-[#1C283A] py-12 px-4 sm:px-6 lg:px-8 text-white">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div className="cta-banner-item max-w-xl">
            <div className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-[0.14em] text-[#4ADE80]">
              <svg
                className="h-3.5 w-3.5 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8z" />
              </svg>
              <span>CONFIGURACIÓN EN MENOS DE 3 MINUTOS</span>
            </div>
            <h2 className="mt-2 text-2xl font-extrabold tracking-tight text-white sm:text-3xl">
              Moderniza hoy la gestión de tu parqueadero
            </h2>
            <p className="mt-2 text-xs sm:text-sm leading-relaxed text-slate-300">
              Crea tu cuenta de propietario ahora mismo. Recibe acceso inmediato
              al panel de administración sin contratos forzosos.
            </p>
          </div>

          <div className="cta-banner-item shrink-0">
            <a
              href={ctaWhatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#B80D14] px-6 py-3 text-sm font-bold text-white shadow-lg shadow-black/25 transition-all duration-200 hover:bg-[#990B11] hover:shadow-xl cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#B80D14]/60 focus:ring-offset-2 focus:ring-offset-[#1C283A]"
            >
              <span>Crea tu Parqueadero Gratis</span>
            </a>
          </div>
        </div>
      </section>

      {/* Stacked Circular Footer */}
      <footer className="footer-main-section border-t border-slate-200 bg-white py-14 text-slate-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col items-center">
            <div className="footer-anim-item mb-6 flex flex-col items-center gap-3">
              <img
                src="/logo-sistemas-palacios.webp"
                alt="Logo Sistemas Palacios - SP Parqueaderos"
                width={136}
                height={44}
                className="h-11 w-auto object-contain"
              />
              <div className="text-center">
                <p className="text-base font-extrabold tracking-tight text-slate-900">
                  SP PARQUEADEROS
                </p>
                <p className="text-[11px] font-bold tracking-[0.12em] text-[#B80D14] uppercase">
                  SISTEMAS PALACIOS
                </p>
              </div>
            </div>

            <nav
              aria-label="Enlaces del pie de página"
              className="footer-anim-item mb-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-[#6B5B57]"
            >
              <a href="#inicio" className="transition-colors hover:text-[#B80D14] cursor-pointer">
                Inicio
              </a>
              <a href="#modulos" className="transition-colors hover:text-[#B80D14] cursor-pointer">
                Módulos
              </a>
              <a href="#solucion" className="transition-colors hover:text-[#B80D14] cursor-pointer">
                Solución Web & Móvil
              </a>
              <a href="#whatsapp-pos" className="transition-colors hover:text-[#B80D14] cursor-pointer">
                WhatsApp & POS
              </a>
              <a href="#tarifas" className="transition-colors hover:text-[#B80D14] cursor-pointer">
                Planes
              </a>
            </nav>

            <div className="footer-anim-item mb-8 flex space-x-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border border-slate-200 bg-white text-slate-700 hover:border-[#B80D14] hover:bg-red-50 hover:text-[#B80D14]"
              >
                <Icons.facebook className="h-4 w-4" />
                <span className="sr-only">Facebook</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border border-slate-200 bg-white text-slate-700 hover:border-[#B80D14] hover:bg-red-50 hover:text-[#B80D14]"
              >
                <Icons.twitter className="h-4 w-4 fill-current" />
                <span className="sr-only">Twitter</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border border-slate-200 bg-white text-slate-700 hover:border-[#B80D14] hover:bg-red-50 hover:text-[#B80D14]"
              >
                <Icons.instagram className="h-4 w-4" />
                <span className="sr-only">Instagram</span>
              </Button>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full border border-slate-200 bg-white text-slate-700 hover:border-[#B80D14] hover:bg-red-50 hover:text-[#B80D14]"
              >
                <Icons.linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
            </div>

            <div className="footer-anim-item mb-8 w-full max-w-md">
              <form
                className="flex space-x-2"
                onSubmit={(e) => e.preventDefault()}
              >
                <div className="flex-grow">
                  <Label htmlFor="footer-email" className="sr-only">
                    Correo electrónico
                  </Label>
                  <Input
                    id="footer-email"
                    placeholder="Ingresa tu correo para solicitar demo"
                    type="email"
                    className="rounded-full"
                  />
                </div>
                <Button type="submit" className="rounded-full px-6">
                  Suscribirse
                </Button>
              </form>
            </div>

            <div className="footer-anim-item text-center">
              <p className="text-sm text-slate-500">
                © {new Date().getFullYear()} SP Parqueaderos — Sistemas Palacios. Todos los derechos reservados.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export { StackedCircularFooter }
