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

import 'codemirror/mode/markdown/markdown';
import './lang';
import App from './App';
import React from 'react';
import ReactDOM from 'react-dom';
import showdown from 'showdown';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/darcula.css';
import 'highlight.js/styles/default.css';
import 'highlight.js/styles/darcula.css';
import './index.scss';

// global / default settings for Showdown.js
showdown.setFlavor('github');
showdown.setOption('completeHTMLDocument', false);
showdown.setOption('encodeEmails', true);
showdown.setOption('ghCodeBlocks', true);
showdown.setOption('ghCompatibleHeaderId', true);
showdown.setOption('headerLevelStart', 3);
showdown.setOption('openLinksInNewWindow', true);
showdown.setOption('simpleLineBreaks', true);
showdown.setOption('simplifiedAutoLink', true);
showdown.setOption('strikethrough', true);
showdown.setOption('tables', true);
showdown.setOption('tasklists', true);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
