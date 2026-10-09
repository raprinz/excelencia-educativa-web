import { createFileRoute } from "@tanstack/react-router";
import {
  Search,
  ShoppingCart,
  X,
  Plus,
  Minus,
  Trash2,
  MessageCircle,
  Check,
  BookOpen,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { PageShell } from "@/components/page-shell";
import { canonicalLink, pageSocialMeta } from "@/lib/seo";

// ============================================================
// TIPOS
// ============================================================

type Book = {
  id: string;
  title: string;
  collection: string;
  area: string;
  grade: string;
  cover: string;
};

type CartItem = Book & {
  quantity: number;
};

// ============================================================
// RUTA
// ============================================================

export const Route = createFileRoute("/catalogo")({
  head: () => ({
    meta: [
      {
        title: "Catálogo · Excelencia Educativa",
      },
      {
        name: "description",
        content:
          "Explora el catálogo de libros educativos de Excelencia Educativa por área y grado. Selecciona los títulos que deseas incluir en tu solicitud de cotización.",
      },
      {
        property: "og:title",
        content: "Catálogo · Excelencia Educativa",
      },
      {
        property: "og:description",
        content:
          "Explora nuestros libros educativos por área y grado y solicita información sobre los títulos de tu interés.",
      },
      ...pageSocialMeta(
        "/catalogo",
        "Catálogo · Excelencia Educativa",
        "Explora nuestros libros educativos por área y grado y solicita información sobre los títulos de tu interés.",
      ),
    ],
    links: [canonicalLink("/catalogo")],
  }),
  component: Page,
});

// ============================================================
// FILTROS
// ============================================================

const areas = [
  "Todos",
  "Matemáticas",
  "Lenguaje",
  "Arte",
  "Desarrollo cognitivo",
];

const grades = [
  "Todos",
  "Transición",
  "1°",
  "2°",
  "3°",
  "4°",
  "5°",
  "6°",
  "7°",
  "8°",
  "9°",
];

// ============================================================
// PORTADAS
// ============================================================

import bitacoras6 from "@/assets/Portadas Libros/BITACORAS - 6.jpg";
import bitacoras7 from "@/assets/Portadas Libros/BITACORAS - 7.jpg";
import bitacoras8 from "@/assets/Portadas Libros/BITACORAS - 8.jpg";
import bitacoras9 from "@/assets/Portadas Libros/BITACORAS - 9.jpg";

import brushA from "@/assets/Portadas Libros/Brush ART A.png";
import brushB from "@/assets/Portadas Libros/Brush ART B.png";
import brushC from "@/assets/Portadas Libros/Brush ART C.png";
import brushD from "@/assets/Portadas Libros/Brush ART D.png";
import brushE from "@/assets/Portadas Libros/Brush ART E.png";

import dimensionMatematicaC from "@/assets/Portadas Libros/Dimension Matematica C.png";
import dimensionCognitivaB from "@/assets/Portadas Libros/Dimensión Cognitiva B.png";
import dimensionSerieC from "@/assets/Portadas Libros/Dimensión Serie C.png";

import inteligencia1 from "@/assets/Portadas Libros/Inteligencia Lectora 1.jpg";
import inteligencia2 from "@/assets/Portadas Libros/Inteligencia Lectora 2.jpg";
import inteligencia3 from "@/assets/Portadas Libros/Inteligencia Lectora 3.jpg";
import inteligencia4 from "@/assets/Portadas Libros/Inteligencia Lectora 4.jpg";
import inteligencia5 from "@/assets/Portadas Libros/Inteligencia Lectora 5.jpg";

import pincelA from "@/assets/Portadas Libros/Pincel ART A1.jpg";
import pincelB from "@/assets/Portadas Libros/Pincel ART B2.jpg";
import pincelC from "@/assets/Portadas Libros/Pincel ART C3.jpg";
import pincelD from "@/assets/Portadas Libros/Pincel ART D4.jpg";
import pincelE from "@/assets/Portadas Libros/Pincel ART E5.jpg";

import proyeccion1 from "@/assets/Portadas Libros/Proyeccion Matematica 1.jpg";
import proyeccion2 from "@/assets/Portadas Libros/Proyeccion Matematica 2.jpg";
import proyeccion3 from "@/assets/Portadas Libros/Proyeccion Matematica 3.jpg";
import proyeccion4 from "@/assets/Portadas Libros/Proyeccion Matematica 4.jpg";
import proyeccion5 from "@/assets/Portadas Libros/Proyeccion Matematica 5.jpg";

// ============================================================
// CATÁLOGO COMPLETO
// ============================================================

const books: Book[] = [
  // ----------------------------------------------------------
  // DIMENSIÓN · TRANSICIÓN
  // ----------------------------------------------------------

  {
    id: "dimension-cognitiva",
    title: "Dimensión Cognitiva",
    collection: "Dimensión",
    area: "Desarrollo cognitivo",
    grade: "Transición",
    cover: dimensionCognitivaB,
  },
  {
    id: "dimension-matematica",
    title: "Dimensión Matemática",
    collection: "Dimensión",
    area: "Matemáticas",
    grade: "Transición",
    cover: dimensionMatematicaC,
  },
  {
    id: "dimension-serie",
    title: "Dimensión Serie",
    collection: "Dimensión",
    area: "Matemáticas",
    grade: "Transición",
    cover: dimensionSerieC,
  },

  // ----------------------------------------------------------
  // BRUSH ART · 1° A 5°
  // ----------------------------------------------------------

  {
    id: "brush-art-1",
    title: "Brush ART A",
    collection: "Brush ART",
    area: "Arte",
    grade: "1°",
    cover: brushA,
  },
  {
    id: "brush-art-2",
    title: "Brush ART B",
    collection: "Brush ART",
    area: "Arte",
    grade: "2°",
    cover: brushB,
  },
  {
    id: "brush-art-3",
    title: "Brush ART C",
    collection: "Brush ART",
    area: "Arte",
    grade: "3°",
    cover: brushC,
  },
  {
    id: "brush-art-4",
    title: "Brush ART D",
    collection: "Brush ART",
    area: "Arte",
    grade: "4°",
    cover: brushD,
  },
  {
    id: "brush-art-5",
    title: "Brush ART E",
    collection: "Brush ART",
    area: "Arte",
    grade: "5°",
    cover: brushE,
  },

  // ----------------------------------------------------------
  // PINCEL ART · 1° A 5°
  // ----------------------------------------------------------

  {
    id: "pincel-art-1",
    title: "Pincel ART A1",
    collection: "Pincel ART",
    area: "Arte",
    grade: "1°",
    cover: pincelA,
  },
  {
    id: "pincel-art-2",
    title: "Pincel ART B2",
    collection: "Pincel ART",
    area: "Arte",
    grade: "2°",
    cover: pincelB,
  },
  {
    id: "pincel-art-3",
    title: "Pincel ART C3",
    collection: "Pincel ART",
    area: "Arte",
    grade: "3°",
    cover: pincelC,
  },
  {
    id: "pincel-art-4",
    title: "Pincel ART D4",
    collection: "Pincel ART",
    area: "Arte",
    grade: "4°",
    cover: pincelD,
  },
  {
    id: "pincel-art-5",
    title: "Pincel ART E5",
    collection: "Pincel ART",
    area: "Arte",
    grade: "5°",
    cover: pincelE,
  },

  // ----------------------------------------------------------
  // INTELIGENCIA LECTORA · 1° A 5°
  // ----------------------------------------------------------

  {
    id: "inteligencia-lectora-1",
    title: "Inteligencia Lectora 1",
    collection: "Inteligencia Lectora",
    area: "Lenguaje",
    grade: "1°",
    cover: inteligencia1,
  },
  {
    id: "inteligencia-lectora-2",
    title: "Inteligencia Lectora 2",
    collection: "Inteligencia Lectora",
    area: "Lenguaje",
    grade: "2°",
    cover: inteligencia2,
  },
  {
    id: "inteligencia-lectora-3",
    title: "Inteligencia Lectora 3",
    collection: "Inteligencia Lectora",
    area: "Lenguaje",
    grade: "3°",
    cover: inteligencia3,
  },
  {
    id: "inteligencia-lectora-4",
    title: "Inteligencia Lectora 4",
    collection: "Inteligencia Lectora",
    area: "Lenguaje",
    grade: "4°",
    cover: inteligencia4,
  },
  {
    id: "inteligencia-lectora-5",
    title: "Inteligencia Lectora 5",
    collection: "Inteligencia Lectora",
    area: "Lenguaje",
    grade: "5°",
    cover: inteligencia5,
  },

  // ----------------------------------------------------------
  // PROYECCIÓN MATEMÁTICA · 1° A 5°
  // ----------------------------------------------------------

  {
    id: "proyeccion-matematica-1",
    title: "Proyección Matemática 1",
    collection: "Proyección Matemática",
    area: "Matemáticas",
    grade: "1°",
    cover: proyeccion1,
  },
  {
    id: "proyeccion-matematica-2",
    title: "Proyección Matemática 2",
    collection: "Proyección Matemática",
    area: "Matemáticas",
    grade: "2°",
    cover: proyeccion2,
  },
  {
    id: "proyeccion-matematica-3",
    title: "Proyección Matemática 3",
    collection: "Proyección Matemática",
    area: "Matemáticas",
    grade: "3°",
    cover: proyeccion3,
  },
  {
    id: "proyeccion-matematica-4",
    title: "Proyección Matemática 4",
    collection: "Proyección Matemática",
    area: "Matemáticas",
    grade: "4°",
    cover: proyeccion4,
  },
  {
    id: "proyeccion-matematica-5",
    title: "Proyección Matemática 5",
    collection: "Proyección Matemática",
    area: "Matemáticas",
    grade: "5°",
    cover: proyeccion5,
  },

  // ----------------------------------------------------------
  // BITÁCORAS · 6° A 9°
  // ----------------------------------------------------------

  {
    id: "bitacoras-6",
    title: "Bitácoras 6",
    collection: "Bitácoras",
    area: "Arte",
    grade: "6°",
    cover: bitacoras6,
  },
  {
    id: "bitacoras-7",
    title: "Bitácoras 7",
    collection: "Bitácoras",
    area: "Arte",
    grade: "7°",
    cover: bitacoras7,
  },
  {
    id: "bitacoras-8",
    title: "Bitácoras 8",
    collection: "Bitácoras",
    area: "Arte",
    grade: "8°",
    cover: bitacoras8,
  },
  {
    id: "bitacoras-9",
    title: "Bitácoras 9",
    collection: "Bitácoras",
    area: "Arte",
    grade: "9°",
    cover: bitacoras9,
  },
];

// ============================================================
// CONFIGURACIÓN
// ============================================================

const CART_KEY = "excelencia-educativa-cotizacion";
const WHATSAPP_NUMBER = "573242355121";

// ============================================================
// NORMALIZAR TEXTO
// ============================================================

function normalizeText(value: string) {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase();
}

// ============================================================
// PÁGINA
// ============================================================

function Page() {
  const [q, setQ] = useState("");
  const [area, setArea] = useState("Todos");
  const [grade, setGrade] = useState("Todos");

  const [cart, setCart] = useState<CartItem[]>([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [cartReady, setCartReady] = useState(false);

  // ==========================================================
  // CARGAR COTIZACIÓN GUARDADA
  // ==========================================================

  useEffect(() => {
    try {
      const saved = localStorage.getItem(CART_KEY);

      if (saved) {
        const parsed = JSON.parse(saved);

        if (Array.isArray(parsed)) {
          const validItems = parsed.filter(
            (item) =>
              item &&
              typeof item.id === "string" &&
              typeof item.quantity === "number" &&
              item.quantity > 0,
          );

          setCart(validItems);
        }
      }
    } catch {
      // Se ignora cualquier información inválida guardada.
    }

    setCartReady(true);
  }, []);

  // ==========================================================
  // GUARDAR COTIZACIÓN
  // ==========================================================

  useEffect(() => {
    if (!cartReady) return;

    try {
      localStorage.setItem(CART_KEY, JSON.stringify(cart));
    } catch {
      // Evita romper la interfaz si localStorage no está disponible.
    }
  }, [cart, cartReady]);

  // ==========================================================
  // FILTRAR LIBROS
  // ==========================================================

  const filtered = useMemo(() => {
    const search = normalizeText(q.trim());

    return books.filter((book) => {
      const matchesArea = area === "Todos" || book.area === area;

      const matchesGrade = grade === "Todos" || book.grade === grade;

      const matchesSearch =
        search === "" ||
        normalizeText(book.title).includes(search) ||
        normalizeText(book.collection).includes(search) ||
        normalizeText(book.area).includes(search) ||
        normalizeText(book.grade).includes(search);

      return matchesArea && matchesGrade && matchesSearch;
    });
  }, [q, area, grade]);

  // ==========================================================
  // CANTIDAD TOTAL
  // ==========================================================

  const cartCount = useMemo(
    () => cart.reduce((total, item) => total + item.quantity, 0),
    [cart],
  );

  // ==========================================================
  // AGREGAR A COTIZACIÓN
  // ==========================================================

  function addToQuote(book: Book) {
    setCart((current) => {
      const existing = current.find((item) => item.id === book.id);

      if (existing) {
        return current.map((item) =>
          item.id === book.id
            ? {
                ...item,
                quantity: item.quantity + 1,
              }
            : item,
        );
      }

      return [
        ...current,
        {
          ...book,
          quantity: 1,
        },
      ];
    });
  }

  // ==========================================================
  // AUMENTAR CANTIDAD
  // ==========================================================

  function increaseQuantity(id: string) {
    setCart((current) =>
      current.map((item) =>
        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1,
            }
          : item,
      ),
    );
  }

  // ==========================================================
  // DISMINUIR CANTIDAD
  // ==========================================================

  function decreaseQuantity(id: string) {
    setCart((current) =>
      current
        .map((item) =>
          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1,
              }
            : item,
        )
        .filter((item) => item.quantity > 0),
    );
  }

  // ==========================================================
  // ELIMINAR LIBRO
  // ==========================================================

  function removeFromQuote(id: string) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  // ==========================================================
  // VACIAR COTIZACIÓN
  // ==========================================================

  function clearQuote() {
    setCart([]);
  }

  // ==========================================================
  // BUSCAR LIBRO EN COTIZACIÓN
  // ==========================================================

  function getCartItem(bookId: string) {
    return cart.find((item) => item.id === bookId);
  }

  // ==========================================================
  // MENSAJE DE WHATSAPP
  // ==========================================================
  //
  // IMPORTANTE:
  // Aquí NO se envían cantidades.
  // Solo se envían nombre del libro y grado.
  //
  // ==========================================================

  const whatsappMessage = [
    "Hola, vengo de la página web de Excelencia Educativa y me gustaría conocer más detalles de los siguientes libros:",
    "",
    ...cart.map(
      (item) => `• ${item.title} — Grado: ${item.grade}`,
    ),
    "",
    "Quedo atento(a) a la información y cotización. ¡Gracias!",
  ].join("\n");

  const whatsappUrl =
    cart.length > 0
      ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
          whatsappMessage,
        )}`
      : "#";

  // ==========================================================
  // RENDER
  // ==========================================================

  return (
    <>
      <PageShell
        eyebrow="Catálogo"
        title="Encuentra el libro ideal para cada etapa de aprendizaje."
        description="Explora nuestros libros por área y grado. Selecciona los títulos que te interesen y prepara tu solicitud de cotización."
      >
        {/* ====================================================
            CONTENIDO PRINCIPAL
        ==================================================== */}

        <div className="grid md:grid-cols-[260px_1fr] gap-8">
          {/* ==================================================
              FILTROS
          ================================================== */}

          <aside className="space-y-7">
            {/* BUSCADOR */}

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Buscar
              </label>

              <div className="mt-2 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" />

                <input
                  value={q}
                  onChange={(e) => setQ(e.target.value)}
                  placeholder="Título del libro..."
                  className="w-full pl-10 pr-3 py-2.5 rounded-xl bg-card border border-border text-sm focus:outline-none focus:ring-2 focus:ring-brand"
                />
              </div>
            </div>

            {/* ÁREA */}

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Área
              </label>

              <div className="mt-3 flex flex-wrap gap-2 md:flex-col md:items-stretch">
                {areas.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setArea(item)}
                    className={`px-3 py-2 rounded-lg text-sm text-left transition-all ${
                      area === item
                        ? "bg-brand text-brand-foreground shadow-sm"
                        : "bg-card border border-border hover:border-brand/40 hover:bg-surface"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            {/* GRADO */}

            <div>
              <label className="text-xs font-mono uppercase tracking-widest text-muted-foreground">
                Grado
              </label>

              <div className="mt-3 flex flex-wrap gap-2">
                {grades.map((item) => (
                  <button
                    key={item}
                    type="button"
                    onClick={() => setGrade(item)}
                    className={`px-3 py-1.5 rounded-lg text-sm transition-all ${
                      grade === item
                        ? "bg-brand text-brand-foreground"
                        : "bg-card border border-border hover:border-brand/40"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </aside>

          {/* ==================================================
              LIBROS
          ================================================== */}

          <section>
            {/* CABECERA */}

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 mb-6">
              <p className="text-sm text-muted-foreground">
                {filtered.length === 1
                  ? "1 libro encontrado"
                  : `${filtered.length} libros encontrados`}
              </p>

              {(q || area !== "Todos" || grade !== "Todos") && (
                <button
                  type="button"
                  onClick={() => {
                    setQ("");
                    setArea("Todos");
                    setGrade("Todos");
                  }}
                  className="text-sm font-semibold text-brand hover:underline"
                >
                  Limpiar filtros
                </button>
              )}
            </div>

            {/* GRID DE LIBROS */}

            {filtered.length > 0 ? (
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {filtered.map((book) => {
                  const cartItem = getCartItem(book.id);
                  const isInQuote = Boolean(cartItem);

                  return (
                    <article
                      key={book.id}
                      className="group overflow-hidden rounded-2xl bg-card border border-border hover:border-brand/35 hover:shadow-card transition-all duration-300"
                    >
                      {/* --------------------------------------
                          PORTADA
                      --------------------------------------- */}

                      <div className="relative aspect-[4/5] bg-surface/60 overflow-hidden p-4 sm:p-5">
                        <div className="h-full w-full rounded-xl bg-white/70 border border-border/60 flex items-center justify-center overflow-hidden">
                          <img
                            src={book.cover}
                            alt={`Portada ${book.title}`}
                            className="block max-h-full max-w-full w-auto h-auto object-contain transition-transform duration-500 group-hover:scale-[1.025]"
                            loading="lazy"
                          />
                        </div>

                        {/* INDICADOR */}

                        {isInQuote && (
                          <div className="absolute top-3 right-3 flex items-center gap-1.5 rounded-full bg-brand text-brand-foreground px-2.5 py-1 text-xs font-semibold shadow-lg">
                            <Check className="size-3.5" />
                            En cotización
                          </div>
                        )}
                      </div>

                      {/* --------------------------------------
                          INFORMACIÓN
                      --------------------------------------- */}

                      <div className="p-5">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className="text-[11px] font-mono uppercase tracking-widest text-brand">
                            {book.collection}
                          </span>

                          <span className="text-muted-foreground/50">
                            •
                          </span>

                          <span className="text-xs text-muted-foreground">
                            {book.area}
                          </span>
                        </div>

                        <h3 className="mt-2 font-bold text-lg leading-tight">
                          {book.title}
                        </h3>

                        <p className="mt-1 text-sm text-muted-foreground">
                          Grado {book.grade}
                        </p>

                        {/* BOTÓN */}

                        <button
                          type="button"
                          onClick={() => addToQuote(book)}
                          className={`mt-5 w-full inline-flex items-center justify-center gap-2 rounded-xl px-4 py-2.5 text-sm font-semibold transition-all ${
                            isInQuote
                              ? "bg-brand-soft text-brand hover:bg-brand hover:text-brand-foreground"
                              : "bg-brand text-brand-foreground hover:opacity-90"
                          }`}
                        >
                          {isInQuote ? (
                            <>
                              <Plus className="size-4" />
                              Agregar otra unidad
                            </>
                          ) : (
                            <>
                              <ShoppingCart className="size-4" />
                              Agregar a cotización
                            </>
                          )}
                        </button>
                      </div>
                    </article>
                  );
                })}
              </div>
            ) : (
              /* ----------------------------------------------
                 SIN RESULTADOS
              ----------------------------------------------- */

              <div className="rounded-3xl border border-dashed border-border bg-surface/30 p-12 text-center">
                <div className="mx-auto size-14 rounded-2xl bg-brand-soft text-brand grid place-items-center">
                  <BookOpen className="size-7" />
                </div>

                <h3 className="mt-5 text-xl font-bold">
                  No encontramos libros
                </h3>

                <p className="mt-2 max-w-md mx-auto text-sm text-muted-foreground">
                  Prueba con otro término de búsqueda o modifica los filtros
                  de área y grado.
                </p>

                <button
                  type="button"
                  onClick={() => {
                    setQ("");
                    setArea("Todos");
                    setGrade("Todos");
                  }}
                  className="mt-6 inline-flex items-center justify-center rounded-xl bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90"
                >
                  Ver todo el catálogo
                </button>
              </div>
            )}
          </section>
        </div>
      </PageShell>

      {/* ======================================================
          BOTÓN FLOTANTE · MI COTIZACIÓN
          
          Alineado horizontalmente con WhatsApp.
          ====================================================== */}

      <button
        type="button"
        onClick={() => setCartOpen(true)}
        aria-label="Abrir mi cotización"
        className="fixed right-[5.5rem] bottom-[1.55rem] z-40 inline-flex items-center gap-2 rounded-full bg-brand text-brand-foreground px-4 py-3 shadow-xl hover:scale-[1.02] transition-transform"
      >
        <ShoppingCart className="size-5" />

        <span className="hidden sm:inline text-sm font-semibold">
          Mi cotización
        </span>

        <span className="min-w-6 h-6 px-1.5 rounded-full bg-white/20 grid place-items-center text-xs font-bold">
          {cartCount}
        </span>
      </button>

      {/* ======================================================
          PANEL DE COTIZACIÓN
      ======================================================= */}

      {cartOpen && (
        <div className="fixed inset-0 z-50">
          {/* OVERLAY */}

          <button
            type="button"
            aria-label="Cerrar cotización"
            onClick={() => setCartOpen(false)}
            className="absolute inset-0 bg-black/40 backdrop-blur-[2px]"
          />

          {/* DRAWER */}

          <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-background border-l border-border shadow-2xl flex flex-col">
            {/* HEADER */}

            <div className="flex items-center justify-between gap-4 p-5 border-b border-border">
              <div>
                <h2 className="text-xl font-extrabold">
                  Mi cotización
                </h2>

                <p className="mt-1 text-sm text-muted-foreground">
                  {cartCount === 0
                    ? "Aún no has seleccionado libros."
                    : `${cartCount} ${
                        cartCount === 1
                          ? "unidad seleccionada"
                          : "unidades seleccionadas"
                      }`}
                </p>
              </div>

              <button
                type="button"
                onClick={() => setCartOpen(false)}
                className="size-10 rounded-xl border border-border grid place-items-center hover:bg-surface transition-colors"
                aria-label="Cerrar"
              >
                <X className="size-5" />
              </button>
            </div>

            {/* CONTENIDO */}

            <div className="flex-1 overflow-y-auto p-5">
              {cart.length === 0 ? (
                <div className="h-full flex items-center justify-center text-center">
                  <div className="max-w-xs">
                    <div className="mx-auto size-16 rounded-2xl bg-brand-soft text-brand grid place-items-center">
                      <ShoppingCart className="size-7" />
                    </div>

                    <h3 className="mt-5 text-lg font-bold">
                      Tu cotización está vacía
                    </h3>

                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      Agrega los libros que te interesen y aquí podrás revisar
                      tu selección antes de contactarnos.
                    </p>

                    <button
                      type="button"
                      onClick={() => setCartOpen(false)}
                      className="mt-6 rounded-xl bg-brand text-brand-foreground px-5 py-2.5 text-sm font-semibold hover:opacity-90"
                    >
                      Explorar catálogo
                    </button>
                  </div>
                </div>
              ) : (
                <div className="space-y-4">
                  {cart.map((item) => (
                    <div
                      key={item.id}
                      className="rounded-2xl border border-border bg-card p-3"
                    >
                      <div className="flex gap-3">
                        {/* MINIATURA */}

                        <div className="size-20 shrink-0 rounded-xl bg-surface/70 border border-border/60 flex items-center justify-center overflow-hidden p-2">
                          <img
                            src={item.cover}
                            alt=""
                            className="max-h-full max-w-full w-auto h-auto object-contain"
                          />
                        </div>

                        {/* INFORMACIÓN */}

                        <div className="min-w-0 flex-1">
                          <div className="flex items-start justify-between gap-2">
                            <div>
                              <h3 className="font-bold text-sm leading-tight">
                                {item.title}
                              </h3>

                              <p className="mt-1 text-xs text-muted-foreground">
                                {item.area} · {item.grade}
                              </p>
                            </div>

                            <button
                              type="button"
                              onClick={() => removeFromQuote(item.id)}
                              className="size-8 shrink-0 rounded-lg text-muted-foreground hover:text-destructive hover:bg-destructive/10 grid place-items-center transition-colors"
                              aria-label={`Eliminar ${item.title}`}
                            >
                              <Trash2 className="size-4" />
                            </button>
                          </div>

                          {/* CANTIDAD */}

                          <div className="mt-3 flex items-center justify-between">
                            <span className="text-xs text-muted-foreground">
                              Cantidad
                            </span>

                            <div className="flex items-center gap-2">
                              <button
                                type="button"
                                onClick={() =>
                                  decreaseQuantity(item.id)
                                }
                                className="size-7 rounded-lg border border-border grid place-items-center hover:bg-surface"
                                aria-label="Disminuir cantidad"
                              >
                                <Minus className="size-3.5" />
                              </button>

                              <span className="w-6 text-center text-sm font-semibold">
                                {item.quantity}
                              </span>

                              <button
                                type="button"
                                onClick={() =>
                                  increaseQuantity(item.id)
                                }
                                className="size-7 rounded-lg border border-border grid place-items-center hover:bg-surface"
                                aria-label="Aumentar cantidad"
                              >
                                <Plus className="size-3.5" />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* FOOTER */}

            {cart.length > 0 && (
              <div className="border-t border-border p-5 space-y-4">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">
                    Libros seleccionados
                  </span>

                  <span className="font-bold">
                    {cart.length}
                  </span>
                </div>

                <a
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setCartOpen(false)}
                  className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-[#25D366] text-white px-5 py-3 font-semibold text-sm hover:opacity-90 transition-opacity"
                >
                  <MessageCircle className="size-5" />
                  Solicitar información por WhatsApp
                </a>

                <button
                  type="button"
                  onClick={clearQuote}
                  className="w-full text-sm text-muted-foreground hover:text-destructive transition-colors"
                >
                  Vaciar cotización
                </button>

                <p className="text-[11px] text-muted-foreground text-center leading-relaxed">
                  La selección de libros se enviará en el mensaje de WhatsApp
                  para que nuestro equipo pueda ayudarte con la información y
                  cotización.
                </p>
              </div>
            )}
          </aside>
        </div>
      )}
    </>
  );
}
