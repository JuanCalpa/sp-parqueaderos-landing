import { Icons } from "@/components/ui/icons"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"

function StackedCircularFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14 text-slate-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center">
          <div className="mb-6 flex flex-col items-center gap-3">
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
            className="mb-8 flex flex-wrap justify-center gap-6 text-sm font-medium text-[#6B5B57]"
          >
            <a href="#inicio" className="transition-colors hover:text-[#B80D14] cursor-pointer">
              Inicio
            </a>
            <a href="#servicios" className="transition-colors hover:text-[#B80D14] cursor-pointer">
              Módulos
            </a>
            <a href="#beneficios" className="transition-colors hover:text-[#B80D14] cursor-pointer">
              Solución Web & Móvil
            </a>
            <a href="#whatsapp-pos" className="transition-colors hover:text-[#B80D14] cursor-pointer">
              WhatsApp & POS
            </a>
            <a href="#tarifas" className="transition-colors hover:text-[#B80D14] cursor-pointer">
              Planes
            </a>
          </nav>

          <div className="mb-8 flex space-x-4">
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

          <div className="mb-8 w-full max-w-md">
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

          <div className="text-center">
            <p className="text-sm text-slate-500">
              © {new Date().getFullYear()} SP Parqueaderos — Sistemas Palacios. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export { StackedCircularFooter }
