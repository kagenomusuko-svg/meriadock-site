import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function AxisPage({
  title,
  description,
  programs,
}) {
  return (
    <>
      <Head>
        <title>{title} | Meriadock</title>
        <meta name="description" content={description} />
      </Head>

      <Header />

      <main className="bg-[#fbfbf9]">
        <section className="border-b border-[#e7e7e2] bg-white">
          <div className="container mx-auto px-4 py-12 sm:py-16">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d766f]">
              Eje institucional
            </p>
            <h1 className="mt-3 max-w-4xl text-3xl font-semibold leading-tight text-[#1E4C45] sm:text-4xl">
              {title}
            </h1>
            <p className="mt-6 max-w-3xl text-base leading-8 text-[#4f5552]">
              {description}
            </p>
          </div>
        </section>

        <section className="container mx-auto px-4 py-12 sm:py-16">
          <div className="mb-8">
            <p className="text-xs font-semibold uppercase tracking-[0.16em] text-[#6d766f]">
              Programas permanentes
            </p>
            <h2 className="mt-2 text-2xl font-semibold text-[#252a27]">
              Trabajo actual del eje
            </h2>
          </div>

          <div className="grid gap-6 lg:grid-cols-2">
            {programs.map((program) => (
              <article
                key={program.title}
                className="flex h-full flex-col border border-[#dedfd9] bg-white p-6 sm:p-7"
              >
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <h3 className="text-2xl font-semibold text-[#1E4C45]">
                    {program.title}
                  </h3>
                  <span className="border border-[#cfd8d4] bg-[#f3f7f5] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.11em] text-[#456159]">
                    Programa permanente
                  </span>
                </div>

                {program.subtitle && (
                  <p className="mt-2 text-sm font-medium text-[#686d69]">
                    {program.subtitle}
                  </p>
                )}

                <p className="mt-5 text-sm leading-7 text-[#555b57]">
                  {program.description}
                </p>

                {program.items?.length > 0 && (
                  <div className="mt-6 border-t border-[#ecece8] pt-5">
                    <p className="mb-4 text-xs font-semibold uppercase tracking-[0.13em] text-[#747a76]">
                      {program.itemsLabel || "Actualmente"}
                    </p>
                    <div className="space-y-4">
                      {program.items.map((item) => (
                        <div key={item.title}>
                          <h4 className="font-semibold text-[#303632]">
                            {item.title}
                          </h4>
                          {item.description && (
                            <p className="mt-1 text-sm leading-6 text-[#656a67]">
                              {item.description}
                            </p>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}

                <div className="mt-auto pt-7">
                  <Link
                    href={program.href}
                    className="inline-flex items-center text-sm font-semibold text-[#1E4C45] hover:underline focus-visible:outline-none focus-visible:underline"
                  >
                    {program.action || "Conocer el programa"} →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
