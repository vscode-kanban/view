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

import { Dispatch } from "redux";

export const TEST_DECREMENT_COUNTER = 'TEST_DECREMENT_COUNTER';
export const TEST_INCREMENT_COUNTER = 'TEST_INCREMENT_COUNTER';

/**
 * Decrements the counter after 250 ms.
 */
export function decrementCounter() {
  // Redux Thunk
  return (dispatch: Dispatch) => {
    setTimeout(() => {
      dispatch({ type: TEST_DECREMENT_COUNTER, payload: 3 });
    }, 250);
  };
}

/**
 * Increments the counter.
 */
export function incrementCounter() {
  // sync way
  return { type: TEST_INCREMENT_COUNTER, payload: 1 };
}
