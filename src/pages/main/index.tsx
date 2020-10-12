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

import * as actions from '../../store/actions';
import CodeEditor from '../../components/CodeEditor';
import CounterLink from '../../components/CounterLink';
import logo from '../../assets/img/logo.svg';
import Markdown from '../../components/Markdown';
import React, { PropsWithChildren, useState } from 'react';
import SourceCode from '../../components/SourceCode';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import './index.scss';
import { useTranslation } from 'react-i18next';

interface IMainPageProps {
}

const exampleMarkdown = `# This is
## a Markdown test
Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laudantium accusantium reiciendis a unde? Dicta est laborum et minus asperiores ea.`;

const exampleSourceCode = `# Bellum

## Gallicum

Gallia est omnis divisa in partes tres, quarum unam incolunt Belgae, aliam Aquitani, tertiam qui ipsorum lingua Celtae, nostra Galli appellantur.
`;

const styles = {
  markdown: {
    backgroundColor: '#cb7832',
    width: '640px'
  },
  sourceCode: {
    width: '640px'
  },
};

const MainPage = (props: PropsWithChildren<IMainPageProps>) => {
  const counter = useSelector((state: IState) => state.test.counter);
  const [sourceCode, setSourceCode] = useState('');
  const { t } = useTranslation();

  const onCodeChange = (newValue: string) => {
    setSourceCode(newValue);
  };

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {t('counter')} (<CounterLink action={actions.incrementCounter()} text="+" /> / <CounterLink action={actions.decrementCounter()} text="-" />): {counter}
      </p>

      <CodeEditor onChange={onCodeChange} options={{ mode: 'markdown' }} value={sourceCode} width="640px" />
      <SourceCode lang="markdown" style={styles.sourceCode}>{exampleSourceCode}</SourceCode>
      <Markdown style={styles.markdown}>{exampleMarkdown}</Markdown>
    </header>
  );
};

/**
 * The main page.
 */
export default MainPage;
