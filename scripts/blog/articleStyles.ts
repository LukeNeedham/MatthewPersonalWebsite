/**
 * The styling of a blog article, written as Chakra style props.
 *
 * Articles are plain HTML (no Chakra components), so these are compiled to CSS
 * at build time by `chakraToCss`, using the real theme. Text styles, breakpoints
 * and tokens therefore stay in sync with the rest of the app automatically.
 */
const muted = '#5a5a5a'
const rule = '1px solid #d8d8d8'

export const articleStyles: Record<string, Record<string, unknown>> = {
  // A comfortable measure for reading
  '.blog-article': {
    maxWidth: '720px',
    marginInline: 'auto',
  },
  '.blog-article-header': {
    paddingBottom: '40px',
    marginBottom: '50px',
    borderBottom: rule,
  },
  '.blog-article-title': {
    textStyle: 'mainTitle',
    marginBottom: '16px',
  },
  '.blog-article-date': {
    textStyle: 'label',
    color: muted,
  },
  // Flex column so vertical margins add up rather than collapse, as in the rest of the app
  '.blog-article-content': {
    display: 'flex',
    flexDirection: 'column',
    textStyle: 'reading',
  },
  '.blog-article-content h1, .blog-article-content h2': {
    textStyle: 'label',
    marginTop: '56px',
    marginBottom: '16px',
    paddingBottom: '10px',
    borderBottom: rule,
  },
  '.blog-article-content p': {
    textStyle: 'reading',
    marginTop: '10px',
    marginBottom: '10px',
  },
  '.blog-article-content ul': {
    textStyle: 'reading',
    listStyleType: 'disc',
    marginInlineStart: '1.2em',
    marginTop: '10px',
    marginBottom: '20px',
  },
  '.blog-article-content li': {
    textStyle: 'reading',
    marginTop: '8px',
    marginBottom: '8px',
  },
  '.blog-article-content a': {
    textDecoration: 'underline',
  },
  '.blog-article-content strong': {
    fontWeight: 600,
  },
  '.blog-article-content :not(pre) > code': {
    background: '#eee',
  },
  '.blog-article-content img': {
    maxWidth: '100%',
    marginTop: '20px',
    marginBottom: '20px',
  },
  '.blog-article-content blockquote': {
    marginTop: '20px',
    marginBottom: '20px',
    paddingInlineStart: '20px',
    borderInlineStart: '2px solid #1a1a1a',
    fontStyle: 'italic',
  },
  '.blog-article-content pre': {
    borderRadius: '2px',
    overflow: 'auto',
    marginTop: '10px',
    marginBottom: '25px',
  },
  // Colours and background come from the highlight.js theme.
  // The theme sets padding via `pre code.hljs`, so match its specificity or better.
  '.blog-article-content pre code.hljs': {
    fontFamily: 'mono',
    fontSize: '15px',
    fontWeight: 400,
    lineHeight: '24px',
    padding: '12px',
  },
}
