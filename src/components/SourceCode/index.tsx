/**
 * This file is part of the vscode-kanban distribution.
 * Copyright (c) Marcel Joachim Kloubert.
 *
 * vscode-kanban is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation, version 3.
 *
 * vscode-kanban is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import highlight from 'highlight.js';
import React, { CSSProperties, PropsWithChildren, useEffect, useRef } from 'react';
import { findDOMNode } from 'react-dom';

interface ISourceCodeProps {
  className?: string | undefined;
  lang: string;
  style?: CSSProperties | undefined;
}

const styles = {
  container: {
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
  },
};

const SourceCode = (props: PropsWithChildren<ISourceCodeProps>) => {
  const codeElement = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const code = findDOMNode(codeElement?.current);
    if (code) {
      highlight.highlightBlock(code as any);
    }
  }, []);

  const containerStyle: any = {
    ...styles.container,
    ...(props.style || {})
  };

  return (
    <pre
      className={props.className}
      style={containerStyle}
    >
      <code
        className={props.lang}
        ref={codeElement}
      >
        {props.children}
      </code>
    </pre>
  );
};

/**
 * Displays highlighted source code.
 */
export default SourceCode;
