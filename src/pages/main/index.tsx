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
import CounterLink from '../../components/CounterLink';
import logo from '../../assets/img/logo.svg';
import React, { PropsWithChildren } from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../store';
import './index.scss';
import { useTranslation } from 'react-i18next';

interface IMainPageProps {
}

const MainPage = (props: PropsWithChildren<IMainPageProps>) => {
  const counter = useSelector((state: IState) => state.test.counter);
  const { t } = useTranslation();

  return (
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>
        {t('counter')} (<CounterLink action={actions.incrementCounter()} text="+" /> / <CounterLink action={actions.decrementCounter()} text="-" />): {counter}
      </p>
    </header>
  );
};

/**
 * The main page.
 */
export default MainPage;
