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

import React, { CSSProperties, PropsWithChildren, useEffect, useState } from 'react';
import showdown from 'showdown';
import './index.scss';

interface IMarkdownProps {
  className?: string | undefined;
  style?: CSSProperties | undefined;
}

const styles = {
  container: {
    textAlign: 'left',
    whiteSpace: 'pre-wrap',
  },
};

const Markdown = (props: PropsWithChildren<IMarkdownProps>) => {
  const [html, setHtml] = useState('');

  useEffect(() => {
    const md = String(props.children || '');
    const converter = new showdown.Converter();

    setHtml(converter.makeHtml(md));
  }, [props.children]);

  const containerStyle: any = {
    ...styles.container,
    ...(props.style || {})
  };

  return (
    <div
      className={['Markdown', String(props.className || '')].join(' ').trim()}
      style={containerStyle}
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
};

/**
 * Displays rendered Markdown code.
 */
export default Markdown;
