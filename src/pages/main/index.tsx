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

import React, { PropsWithChildren } from 'react';
import logo from '../../assets/img/logo.svg';
import './index.scss';

interface IMainPageProps {
}

const MainPage = (props: PropsWithChildren<IMainPageProps>) => {
  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        Starter of <code>Kanban for Visual Studio Code</code>, written with <a className="App-link" rel="noopener noreferrer" target="_blank" href="https://reactjs.org/">React</a>
      </p>
    </header>
  );
};

export default MainPage;
