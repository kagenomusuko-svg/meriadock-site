import Head from "next/head";
import PropTypes from "prop-types";
import Header from "./Header";
import Footer from "./Footer";

export function Formula({ children, label }) {
  return (
    <figure className="my-7 overflow-x-auto rounded-xl border border-slate-200 bg-slate-50 px-5 py-5 sm:px-7">
      {label ? (
        <figcaption className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-slate-500">
          {label}
        </figcaption>
      ) : null}
      <div className="min-w-max font-mono text-base leading-relaxed text-slate-900 sm:text-lg">
        {children}
      </div>
    </figure>
  );
}

Formula.propTypes = {
  children: PropTypes.node.isRequired,
  label: PropTypes.string,
};

Formula.defaultProps = {
  label: "",
};

export function DefinitionBox({ children }) {
  return (
    <div className="my-8 border-l-4 border-[#1E4C45] bg-[#F4F8F7] px-5 py-5 sm:px-7">
      <div className="text-lg font-medium leading-8 text-slate-900">{children}</div>
    </div>
  );
}

DefinitionBox.propTypes = {
  children: PropTypes.node.isRequired,
};

export function ConceptSection({ id, title, children }) {
  return (
    <section id={id} className="border-t border-slate-200 py-10 first:border-t-0">
      <h2 className="mb-5 text-2xl font-semibold tracking-tight text-[#1E4C45] sm:text-3xl">
        {title}
      </h2>
      <div className="space-y-5 text-[15px] leading-7 text-slate-700 sm:text-base sm:leading-8">
        {children}
      </div>
    </section>
  );
}

ConceptSection.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export function Note({ title, children }) {
  return (
    <aside className="my-7 rounded-xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      {title ? <h3 className="mb-2 font-semibold text-slate-900">{title}</h3> : null}
      <div className="space-y-3 text-sm leading-7 text-slate-700 sm:text-[15px]">{children}</div>
    </aside>
  );
}

Note.propTypes = {
  title: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Note.defaultProps = {
  title: "",
};

export default function ConceptArticle({ title, kicker, description, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | Meriadock`}</title>
        <meta name="description" content={description} />
      </Head>

      <Header />

      <main className="bg-white text-slate-900">
        <article className="mx-auto max-w-4xl px-5 pb-20 pt-10 sm:px-8 sm:pt-14 lg:px-10">
          <header className="pb-10 sm:pb-12">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E4C45]">
              {kicker}
            </p>
            <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-slate-950 sm:text-5xl">
              {title}
            </h1>
            <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-600">{description}</p>
          </header>

          {children}
        </article>
      </main>

      <Footer />
    </>
  );
}

ConceptArticle.propTypes = {
  title: PropTypes.string.isRequired,
  kicker: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};
