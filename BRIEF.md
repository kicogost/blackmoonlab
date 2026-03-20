# BRIEF.md — Client Website Brief
# Fill in every field before starting a Claude Code session.
# Fields marked [REQUIRED] must be filled. Others are optional but strongly recommended.
# Lines starting with # are comments — leave them in place as guides.

# ─────────────────────────────────────────────────────────────
# SECTION 1 — IDENTITY
# ─────────────────────────────────────────────────────────────

BUSINESS_NAME: [REQUIRED]
# Trading name shown on the website.
# e.g., Travesía Legal

TAGLINE: [REQUIRED]
# Short, punchy. One line. Will appear in the hero section.
# e.g., Tu trámite, nuestra misión.

SHORT_DESCRIPTION: [REQUIRED]
# 2–3 sentences. What do they do and who for?
# e.g., Gestoría especializada en extranjería, laboral y fiscal para autónomos y empresas en Barcelona y Sabadell.

INDUSTRY: [REQUIRED]
# e.g., legal / dental / coaching / accounting / real estate / beauty / restaurant / health

SCHEMA_TYPE: [REQUIRED]
# schema.org @type for this business. Common values:
# LegalService / AccountingService / MedicalBusiness / Dentist / BeautySalon /
# Restaurant / RealEstateAgent / HealthAndBeautyBusiness / LocalBusiness / ProfessionalService

FOUNDING_YEAR:
# e.g., 2016
# Used in "X años de experiencia" copy and JSON-LD schema.

FOUNDING_STORY:
# 2–4 sentences. Why was the business started? What is the mission?
# Claude uses this for the About page hero section.
# Leave blank if you want Claude to write a generic mission statement.


# ─────────────────────────────────────────────────────────────
# SECTION 2 — SERVICES
# ─────────────────────────────────────────────────────────────
# Format: SERVICE_N: url-slug | Display Name | One-line description
# Each service gets its own page at /servicios/[url-slug]
# Add or remove lines as needed.

SERVICE_1: [slug] | [Display Name] | [Description]
SERVICE_2: [slug] | [Display Name] | [Description]
SERVICE_3: [slug] | [Display Name] | [Description]
# SERVICE_4: [slug] | [Display Name] | [Description]


# ─────────────────────────────────────────────────────────────
# SECTION 3 — AUDIENCE & POSITIONING
# ─────────────────────────────────────────────────────────────

TARGET_AUDIENCE: [REQUIRED]
# Who is the ideal client? Be specific — age range, situation, location, pain point.
# e.g., Latinoamericanos recién llegados a España que necesitan regularizar su situación,
# autónomos con dudas fiscales, y pequeñas empresas en Barcelona y Sabadell.

DIFFERENTIATORS:
# What makes this business different from competitors? List 3–5 bullet points.
# Claude uses these for the USP / "Por qué nosotros" section.
# e.g.,
# - Atención personalizada sin colas ni formularios
# - Especialistas exclusivamente en extranjería — no somos un despacho generalista
# - Respuesta en menos de 24 horas
# - Primera consulta gratuita sin compromiso

WHAT_TO_AVOID:
# Topics, claims, or content to NEVER include on the site.
# e.g., No hacer promesas de resultados garantizados. No mencionar precios.


# ─────────────────────────────────────────────────────────────
# SECTION 4 — SOCIAL PROOF
# ─────────────────────────────────────────────────────────────
# IMPORTANT: Claude will NEVER invent stats or testimonials.
# If a field is blank, that section will be omitted.

STAT_1:
# Format: value | label
# e.g., 500+ | Clientes atendidos

STAT_2:
# e.g., 8 años | De experiencia

STAT_3:
# e.g., 98% | Tasa de satisfacción

STAT_4:
# e.g., 3 | Oficinas en España

TESTIMONIAL_1:
# Format: "Exact quote text" | Full Name | Role or context
# e.g., "Gracias a Travesía Legal conseguí mi arraigo social en tiempo récord." | María G. | Cliente de arraigo social

TESTIMONIAL_2:

TESTIMONIAL_3:

CERTIFICATIONS:
# Professional associations, college memberships, ISO certifications, etc.
# e.g., Colegio de Gestores Administrativos de Cataluña, ISO 9001:2015

AWARDS:
# e.g., Premio Empresa del Año 2024 — Cámara de Comercio de Barcelona

PRESS_MENTIONS:
# e.g., Mencionados en La Vanguardia, El País, 20minutos


# ─────────────────────────────────────────────────────────────
# SECTION 5 — PROCESS / HOW IT WORKS
# ─────────────────────────────────────────────────────────────
# Used for the "Cómo trabajamos" section on the homepage or service pages.
# Format: PROCESS_STEP_N: Step title | One-sentence description

PROCESS_STEP_1:
# e.g., Consulta gratuita | Analizamos tu situación sin compromiso por teléfono o WhatsApp.

PROCESS_STEP_2:
# e.g., Documentación | Te indicamos exactamente qué necesitas — sin sorpresas.

PROCESS_STEP_3:
# e.g., Gestión | Nos encargamos de todo el papeleo y los trámites por ti.

PROCESS_STEP_4:
# e.g., Seguimiento | Te acompañamos hasta que tu expediente esté resuelto.


# ─────────────────────────────────────────────────────────────
# SECTION 6 — LOCATIONS & CONTACT
# ─────────────────────────────────────────────────────────────

NIF_CIF: [REQUIRED]
# Business fiscal ID. Used verbatim in Aviso Legal and JSON-LD schema.
# e.g., B12345678 (empresa) or 48223707K (autónomo / persona física)

LEGAL_NAME:
# Official registered name if different from trading name.
# e.g., KICOGOST SL (trading as Travesía Legal)
# Leave blank if the trading name IS the legal name.

# Format: LOCATION_N: City | Street address | Postal code | Country code | Opening hours
# Opening hours per location in schema.org format (overrides global OPENING_HOURS).
# Google Maps iframe src: paste the src="..." value from Google Maps > Share > Embed a map.
# Leave the Google Maps src blank if you don't have it yet.

LOCATION_1: [City] | [Street address] | [Postal] | [Country] | [Mo-Fr HH:MM-HH:MM] | [Google Maps iframe src]
# LOCATION_2: [City] | [Street address] | [Postal] | [Country] | [Mo-Fr HH:MM-HH:MM] | [Google Maps iframe src]

PHONE: [REQUIRED]
# Display format: +34 694 269 008

WHATSAPP_NUMBER: [REQUIRED]
# Digits only, no spaces, no +. Used in wa.me links.
# e.g., 34694269008

WHATSAPP_MESSAGE:
# Optional pre-filled message for WhatsApp links.
# e.g., Hola, me gustaría una consulta gratuita sobre mi situación.

EMAIL: [REQUIRED]
# e.g., info@travesialegal.com

OPENING_HOURS:
# Global fallback if not set per-location. schema.org format.
# e.g., Mo-Fr 09:00-18:00

GOOGLE_BUSINESS_URL:
# Full URL of the Google Maps / Google Business Profile listing.
# Used for "Ver reseñas en Google" and "Cómo llegar" buttons.
# e.g., https://maps.google.com/?cid=XXXXXXXXX

PRIMARY_CTA_ACTION: [REQUIRED]
# What do all main CTA buttons do?
# Options: whatsapp / email / phone / booking-link / contact-form

BOOKING_URL:
# Only needed if PRIMARY_CTA_ACTION is booking-link.
# e.g., TheFork, Calendly, Doctoralia, Acuity, etc.
# e.g., https://www.doctoralia.es/clinica/...


# ─────────────────────────────────────────────────────────────
# SECTION 7 — TEAM
# ─────────────────────────────────────────────────────────────
# Claude writes the About page from these bios.
# If no team is listed, the About page focuses on the business story instead.
# Format: TEAM_N: Full Name | Job Title | Bio (2–4 sentences) | Photo filename in founder_photos/

TEAM_1:
# e.g., Pau Iglesias | Especialista en Extranjería | Más de 8 años ayudando a familias latinoamericanas a regularizar su situación en España. Conoce de primera mano los retos que enfrenta cada cliente. | pau-iglesias.jpg

TEAM_2:
# TEAM_3:


# ─────────────────────────────────────────────────────────────
# SECTION 8 — SEO & CONTENT
# ─────────────────────────────────────────────────────────────

TARGET_KEYWORDS:
# Comma-separated. Primary search terms to rank for.
# e.g., arraigo social Barcelona, NIE extranjeros España, gestoría autónomos Sabadell

BLOG: false
# true → generate blog index + initial posts. false → skip entirely.

BLOG_CATEGORIES:
# Comma-separated category names in the site's LANGUAGE.
# e.g., Extranjería, Fiscal, Laboral
# Leave blank if BLOG is false.

BLOG_INITIAL_POSTS: 3
# Number of blog post pages to generate at launch. Set to 0 to create only the index.

LOCAL_SEO_CITIES:
# Comma-separated. Creates /[service-keyword]-[city] pages.
# e.g., Barcelona, Sabadell, Badalona
# Leave blank to skip local SEO pages.

FAQ_TOPICS:
# Questions clients frequently ask. One per line.
# Claude uses these verbatim for FAQ sections + FAQPage schema markup.
# e.g.,
# ¿Cuánto tarda un arraigo social?
# ¿Puedo solicitar el arraigo si tengo antecedentes?
# ¿Qué documentos necesito para el NIE?

GALLERY: false
# true → build a photo gallery section. Place images in founder_photos/ folder.

GALLERY_IMAGES:
# Comma-separated filenames from founder_photos/.
# e.g., clinic-reception.jpg, treatment-room.jpg, before-after-1.jpg
# Only relevant if GALLERY is true.

GALLERY_STYLE: grid
# grid / before-after / carousel

PRICING_STYLE: none
# none     → no pricing section
# list     → simple text list of service names + prices
# cards    → visual price cards (good for clinics, beauty salons)
# pdf-link → link to a downloadable menu/price list PDF

PRICING_PDF_URL:
# Only needed if PRICING_STYLE is pdf-link.


# ─────────────────────────────────────────────────────────────
# SECTION 9 — BRAND & DESIGN
# ─────────────────────────────────────────────────────────────

PRIMARY_COLOR: [REQUIRED]
# Dominant brand color, usually dark. Hex code.
# e.g., #0D1F3C (deep navy)
# Claude will derive the full palette from this color + brand_assets/.
# If brand_assets/ contains a guidelines file, that takes priority over this value.

ACCENT_COLOR: [REQUIRED]
# Secondary / highlight color used for CTAs and accents. Hex code.
# e.g., #C8A96E (warm gold)

FONT_DISPLAY:
# Google Fonts name for headings.
# e.g., Playfair Display / Lora / Cormorant Garamond / Fraunces / DM Serif Display
# Leave blank for Claude to choose based on industry and tone.

FONT_BODY:
# Google Fonts name for body text.
# e.g., DM Sans / Inter / Plus Jakarta Sans / Outfit / Nunito
# Leave blank for Claude to choose.

TONE: [REQUIRED]
# Describes the copy voice. Pick one:
# formal / formal-warm / professional / friendly / playful / clinical / luxury / minimal

DESIGN_REFERENCES:
# URLs of websites whose design direction Claude should draw from.
# Be specific about what you like.
# e.g., https://example.com — I like the hero layout and the card style
# e.g., https://another.com — the typography pairing is great

DESIGN_AVOID:
# Anything visually Claude should NOT do.
# e.g., No stock photos of people in suits. No dark red. No cartoon illustrations.

NAV_CTA_LABEL: [REQUIRED]
# Text on the prominent CTA button in the navbar.
# e.g., Consulta Gratuita / Book a Call / Reservar Cita / Get a Quote

NAV_CTA_HREF: [REQUIRED]
# Where the navbar CTA links. Usually WhatsApp, a booking URL, or /contacto.
# e.g., https://wa.me/34694269008

WEBSITE_MODE: [REQUIRED]
# full-website  → multi-page React SPA with React Router (Home, About, Services, Contact, Blog, etc.)
# landing-page  → single scrollable page, no routing, anchor-based nav

LANGUAGE: [REQUIRED]
# ISO 639-1 language code.
# es (Castilian Spanish) / en / fr / pt / de / ca (Catalan)

DOMAIN: [REQUIRED]
# Used for canonical URLs and JSON-LD schema.
# No https://, no trailing slash.
# e.g., travesialegal.com

PAGES:
# List pages to build. Format: PATH | Nav label
# Service pages are generated automatically from SERVICE_* entries (no need to list here).
# Remove any pages not needed.
/ | Inicio
/nosotros | Nosotros
/contacto | Contacto
/blog | Blog
# Remove /blog if BLOG is false.
# Add any custom pages:
# /casos-de-exito | Casos de Éxito

SOCIAL_1:
# Format: platform | URL
# e.g., instagram | https://www.instagram.com/handle/

SOCIAL_2:
# e.g., tiktok | https://www.tiktok.com/@handle

SOCIAL_3:
# e.g., linkedin | https://www.linkedin.com/company/handle

SOCIAL_4:
# e.g., facebook | https://www.facebook.com/handle

SOCIAL_5:
# e.g., youtube | https://www.youtube.com/@handle


# ─────────────────────────────────────────────────────────────
# NOTES — FREE FORM
# ─────────────────────────────────────────────────────────────
# Write anything Claude needs to know that doesn't fit above:
# - Specific hero image or photography style
# - Sections explicitly requested (e.g., "include a pricing section")
# - Copy fragments or taglines the client provided
# - Anything special about this project

NOTES:
