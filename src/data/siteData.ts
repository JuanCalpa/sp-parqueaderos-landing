export const siteConfig = {
  name: 'SP Parqueaderos',
  description: 'Soluciones modernas, seguras y eficientes de estacionamiento y gestión de parqueaderos.',
  phone: '+57 300 000 0000',
  email: 'contacto@spparqueaderos.com',
  address: 'Bogotá, Colombia',
};

export const navLinks = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Beneficios', href: '#beneficios' },
  { label: 'Tarifas', href: '#tarifas' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contacto', href: '#contacto' },
];

export const services = [
  {
    title: 'Estacionamiento por Horas y Días',
    description: 'Espacios amplios y vigilados 24/7 para vehículos, motos y bicicletas con tarifas competitivas.',
    badge: '24/7',
  },
  {
    title: 'Mensualidades Corporativas y Personales',
    description: 'Planes mensuales con acceso preferencial, cupo garantizado y facturación electrónica.',
    badge: 'Popular',
  },
  {
    title: 'Administración de Parqueaderos',
    description: 'Operación integral, control de acceso automatizado y optimización de ingresos para tu propiedad.',
    badge: 'B2B',
  },
];

export const features = [
  {
    title: 'Seguridad 24/7',
    description: 'Circuito cerrado de televisión (CCTV), personal de vigilancia capacitado y póliza de responsabilidad.',
  },
  {
    title: 'Control Automatizado',
    description: 'Ingreso y salida ágil mediante lectura de placas y tickets digitales sin filas.',
  },
  {
    title: 'Múltiples Medios de Pago',
    description: 'Pagos en efectivo, tarjetas débito/crédito, PSE y billeteras digitales.',
  },
  {
    title: 'Ubicaciones Estratégicas',
    description: 'Puntos de fácil acceso cerca de centros empresariales, comerciales y zonas clave.',
  },
];

export const pricingPlans = [
  {
    name: 'Por Hora / Fracción',
    price: 'Desde $4.500',
    period: 'por hora',
    description: 'Ideal para visitas rápidas, diligencias y reuniones.',
    features: ['Autos, motos y bicicletas', 'Vigilancia permanente', 'Pago rápido sin contacto'],
    highlighted: false,
  },
  {
    name: 'Mensualidad Individual',
    price: '$220.000',
    period: 'al mes',
    description: 'Cupo fijo garantizado con acceso ilimitado 24/7.',
    features: ['Acceso sin filas', 'Cupo garantizado 24/7', 'Facturación electrónica', 'Soporte prioritario'],
    highlighted: true,
  },
  {
    name: 'Plan Corporativo',
    price: 'A medida',
    period: 'convenio',
    description: 'Para empresas que requieren múltiples cupos para colaboradores o clientes.',
    features: ['Tarifas preferenciales por volumen', 'Panel de control de cupos', 'Facturación unificada'],
    highlighted: false,
  },
];

export const faqs = [
  {
    question: '¿Cuáles son los horarios de atención?',
    answer: 'Nuestros parqueaderos principales operan las 24 horas del día, los 7 días de la semana, incluyendo festivos.',
  },
  {
    question: '¿Cómo puedo adquirir una mensualidad?',
    answer: 'Puedes solicitarla directamente desde nuestro formulario de contacto o acercándote a cualquiera de nuestras sedes.',
  },
  {
    question: '¿Cuentan con convenio para empresas o comercios?',
    answer: 'Sí, ofrecemos planes corporativos y validación de tickets para comercios aliados con tarifas especiales.',
  },
];
