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
import { useDispatch } from 'react-redux';

interface ICounterLinkProps {
  action: any;
  text: string;
}

const styles = {
  link: {
    cursor: 'pointer'
  },
};

const CounterLink = (props: PropsWithChildren<ICounterLinkProps>) => {
  const dispatch = useDispatch();

  return (
    <a className="App-link" style={styles.link} onClick={() => dispatch(props.action)}>
      {props.text}
    </a>
  );
};

/**
 * A counter link.
 */
export default CounterLink;
