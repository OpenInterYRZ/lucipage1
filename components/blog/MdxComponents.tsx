import type { ComponentPropsWithoutRef } from 'react';

type MDXComponents = Record<string, React.ComponentType<ComponentPropsWithoutRef<any>>>;

export function getMdxComponents(): MDXComponents {
  return {
    h2: ({ children, ...props }) => {
      const id =
        typeof children === 'string'
          ? children
              .toLowerCase()
              .replace(/[^a-z0-9\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]+/g, '-')
              .replace(/^-|-$/g, '')
          : undefined;
      return (
        <h2
          id={id}
          className="font-serif font-normal text-[28px] sm:text-[32px] text-text-0 mt-14 mb-5 scroll-mt-24"
          {...props}
        >
          {children}
        </h2>
      );
    },
    h3: ({ children, ...props }) => {
      const id =
        typeof children === 'string'
          ? children
              .toLowerCase()
              .replace(/[^a-z0-9\u4e00-\u9fff\u3040-\u309f\u30a0-\u30ff\uac00-\ud7af]+/g, '-')
              .replace(/^-|-$/g, '')
          : undefined;
      return (
        <h3
          id={id}
          className="text-xl font-semibold text-text-0 mt-10 mb-4 scroll-mt-24"
          {...props}
        >
          {children}
        </h3>
      );
    },
    p: (props) => (
      <p className="text-[17px] leading-[1.8] text-text-1 mb-6" {...props} />
    ),
    a: (props) => (
      <a
        className="text-primary underline decoration-primary/40 underline-offset-4 hover:decoration-primary transition-colors"
        target={props.href?.startsWith('http') ? '_blank' : undefined}
        rel={props.href?.startsWith('http') ? 'noopener noreferrer' : undefined}
        {...props}
      />
    ),
    ul: (props) => (
      <ul className="list-disc pl-6 mb-6 space-y-2 text-[17px] leading-[1.8] text-text-1" {...props} />
    ),
    ol: (props) => (
      <ol className="list-decimal pl-6 mb-6 space-y-2 text-[17px] leading-[1.8] text-text-1" {...props} />
    ),
    li: (props) => <li className="leading-[1.8]" {...props} />,
    blockquote: (props) => (
      <blockquote
        className="border-l-4 border-primary/60 pl-6 my-8 italic text-lg text-text-2"
        {...props}
      />
    ),
    code: (props) => (
      <code
        className="bg-grey-0 text-text-0 px-1.5 py-0.5 rounded text-sm font-mono"
        {...props}
      />
    ),
    pre: (props) => (
      <pre
        className="bg-grey-0 border border-grey-1 rounded-xl p-5 mb-8 overflow-x-auto text-sm"
        {...props}
      />
    ),
    img: (props) => (
      // eslint-disable-next-line @next/next/no-img-element
      <img
        className="rounded-lg my-8 max-w-full h-auto"
        alt={props.alt || ''}
        {...props}
      />
    ),
    hr: () => <hr className="border-grey-1 my-12" />,
    strong: (props) => (
      <strong className="font-semibold text-text-0" {...props} />
    ),
  };
}
