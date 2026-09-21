import Head from "next/head";
import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function AxisPage({ title, description, programs }) {
  return (
    <>
      <Head>
        <title>{title} | Meriadock</title>
        <meta name="description" content={description} />
      </Head>

      <Header />

      <main className="bg-white" style={{ paddingTop: 0 }}>
        <section className="flex min-h-[460px] items-center bg-gradient-to-b from-[#1E4C45] to-gray-50 text-white">
          <div className="mx-auto w-full max-w-7xl px-4 text-center sm:px-6 lg:px-8">
            <h1 className="text-5xl font-bold sm:text-6xl">
              {title}
            </h1>
          </div>
        </section>

        <section className="bg-white py-16 sm:py-20">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <p className="mx-auto max-w-3xl text-center text-lg leading-8 text-gray-700">
              {description}
            </p>

            <h2 className="mb-12 mt-16 text-center text-3xl font-bold text-gray-900">
              Programas permanentes
            </h2>

            <div className={programs.length > 1 ? "grid grid-cols-1 gap-8 lg:grid-cols-2" : "mx-auto max-w-4xl"}>
              {programs.map((program) => (
                <article
                  key={program.title}
                  className="rounded-lg border border-[#cbd9d5] bg-gradient-to-b from-[#f1f7f5] to-white p-8"
                >
                  <h3 className="text-3xl font-semibold text-[#1E4C45]">
                    {program.title}
                  </h3>

                  {program.subtitle && (
                    <p className="mt-2 text-lg text-gray-600">
                      {program.subtitle}
                    </p>
                  )}

                  <div className="mt-6 space-y-4 text-justify text-base leading-8 text-gray-700">
                    {(program.paragraphs || [program.description]).filter(Boolean).map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>

                  {program.items?.length > 0 && (
                    <div className="mt-8 border-t border-[#dce5e2] pt-6">
                      <h4 className="mb-5 text-xl font-semibold text-gray-900">
                        {program.itemsLabel || "Actualmente"}
                      </h4>
                      <div className="space-y-5">
                        {program.items.map((item) => (
                          <div key={item.title}>
                            <h5 className="text-lg font-semibold text-[#1E4C45]">
                              {item.title}
                            </h5>
                            {item.description && (
                              <p className="mt-1 text-justify text-base leading-7 text-gray-700">
                                {item.description}
                              </p>
                            )}
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {program.href && (
                    <div className="mt-8">
                      <Link
                        href={program.href}
                        className="inline-flex items-center font-semibold text-[#1E4C45] hover:underline focus-visible:outline-none focus-visible:underline"
                      >
                        {program.action || "Ir al programa"} →
                      </Link>
                    </div>
                  )}
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
