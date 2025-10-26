'use client';
import useTheme from '@/app/hooks/theme';
import React, { useEffect, useRef, useState } from 'react';

const validTypeList = [
  'pathname',
  'url',
  'title',
  'og:title',
  'issue-number',
  'issue-term',
] as const;

type IdentifierType = (typeof validTypeList)[number];

interface CommentsProps {
  type: IdentifierType;
  repo: string;
  specificTerm?: string;
  issueNumber?: number;
  hashKey?: string;
  debug?: boolean;
}

const getAttrName = (type: IdentifierType): string | undefined => {
  if (validTypeList.indexOf(type) < 0) {
    console.warn('Wrong type: ' + type);
    return;
  }

  return type === 'issue-number' ? 'issue-number' : 'issue-term';
};

const getAttrValue = (
  type: IdentifierType,
  specificTerm?: string,
  issueNumber?: number
): string | number | undefined => {
  if (validTypeList.indexOf(type) < 0) {
    console.warn('Wrong type: ' + type);
    return;
  }

  switch (type) {
    case 'pathname':
      return 'pathname';
    case 'url':
      return 'url';
    case 'title':
      return 'title';
    case 'og:title':
      return 'og:title';
    case 'issue-term':
      return specificTerm;
    case 'issue-number':
      return issueNumber;
  }
};

const Comments: React.FC<CommentsProps> = ({
  repo,
  type,
  specificTerm,
  issueNumber,
  debug,
}) => {
  const { theme } = useTheme();
  const myRef = useRef<HTMLDivElement>(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    const attrName = getAttrName(type);
    const value = getAttrValue(type, specificTerm, issueNumber);

    if (type === 'issue-term' && !value) {
      console.warn(
        `When type is '${type}', 'specificTerm' prop must be provided`
      );
      return;
    } else if (
      type === 'issue-number' &&
      (isNaN(Number(value)) || Number(value) < 1)
    ) {
      console.warn(
        `When type is '${type}', valid 'issueNumber' prop must be provided`
      );
      return;
    }

    if (!attrName || value === undefined || !myRef.current) return;

    // get theme
    const CommentTheme = theme == 'light' ? 'github-light' : 'github-dark';
    const scriptEl = document.createElement('script');
    scriptEl.src = 'https://utteranc.es/client.js';
    scriptEl.async = true;
    scriptEl.setAttribute('repo', repo);
    scriptEl.setAttribute('theme', CommentTheme);
    scriptEl.setAttribute('crossorigin', 'anonymous');
    scriptEl.setAttribute(attrName, value.toString());
    scriptEl.onload = () => setPending(false);
    myRef.current.appendChild(scriptEl);
  }, [repo, type, specificTerm, issueNumber]);

  return (
    <div className='react-utterences mt-10' ref={myRef}>
      {debug && (
        <pre style={{ background: '#cccccc', padding: 10 }}>
          {`
this.props: ${JSON.stringify({ repo, type, specificTerm, issueNumber, debug }, null, 2)}
location.pathname: "${window.location.pathname}"
location.href: "${window.location.href}"
          `.trim()}
        </pre>
      )}
      {debug && (
        <div>
          👇👇If the settings are valid, the comment widget appear below👇👇
        </div>
      )}
      {pending && <div>Loading script...</div>}
    </div>
  );
};

export const identifierTypes = {
  pathname: {
    attrValue: '',
    summary: 'Issue title contains page pathname',
  },
  url: {
    attrValue: 'url',
    summary: 'Issue title contains page URL',
  },
  title: {
    attrValue: 'title',
    summary: 'Issue title contains page title',
  },
  'og:title': {
    attrValue: 'og:title',
    summary: 'Issue title contains page og:title',
  },
  'issue-number': {
    attrValue: -1,
    summary: 'Specific issue number',
  },
  'issue-term': {
    attrValue: '',
    summary: 'Issue title contains specific term',
  },
};

export default Comments;
