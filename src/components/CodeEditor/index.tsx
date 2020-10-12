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

import CodeMirror from 'codemirror';
import React, { CSSProperties, PropsWithChildren, useEffect, useRef, useState } from 'react';
import { findDOMNode } from 'react-dom';

interface ICodeEditorProps {
  className?: string | undefined;
  height?: any;
  onChange?: (newValue: string) => void;
  options?: CodeMirror.EditorConfiguration | undefined;
  style?: CSSProperties | undefined;
  value?: string | undefined;
  width?: any;
}

const defaultOptions: CodeMirror.EditorConfiguration = {
  tabSize: 2,
  showCursorWhenSelecting: true,
  lineNumbers: true,
};

const styles = {
  container: {
  },
};

const SourceCode = (props: PropsWithChildren<ICodeEditorProps>) => {
  const { height = '100%', onChange, options = {}, value = '', width = '100%' } = props;
  const [editor, setEditor] = useState<CodeMirror.EditorFromTextArea | undefined>();
  const textAreaElement = useRef<HTMLTextAreaElement | null>(null);

  useEffect(() => {
    const textArea = findDOMNode(textAreaElement?.current);
    if (textArea) {
      const newEditor = CodeMirror.fromTextArea(textArea as any, { ...defaultOptions, ...options });

      newEditor.on('change', (e, args) => {
        onChange?.(e.getValue());
      });

      if (width || height) {
        newEditor.setSize(width, height);
      }

      setEditor(newEditor);
    }

    return () => {
      editor?.toTextArea();
      setEditor(undefined);
    };

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (editor) {
      const val = editor.getValue();
      if (typeof value === 'string' && value !== val) {
        editor.setValue(value);
      }
    }
  }, [editor, value]);

  useEffect(() => {
    if (editor) {
      editor.setSize(width, height);
    }
  }, [editor, width, height]);

  const containerStyle: any = {
    ...styles.container,
    ...(props.style || {})
  };

  return (
    <textarea ref={textAreaElement} style={containerStyle} />
  );
};

/**
 * Source code editor.
 */
export default SourceCode;
