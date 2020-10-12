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

import * as actions from '../actions';
import { Reducer } from 'redux';

/**
 * State of category 'test'.
 */
export interface ITestState {
  /**
   * The current counter value.
   */
  counter: number;
}

const initialState: ITestState = {
  counter: 0,
};

const testReducer: Reducer<ITestState> = (state = initialState, action) => {
  if (action.type === actions.TEST_DECREMENT_COUNTER) {
    return {
      ...state,
      counter: state.counter - action.payload
    };
  }

  if (action.type === actions.TEST_INCREMENT_COUNTER) {
    return {
      ...state,
      counter: state.counter + action.payload
    };
  }

  return state;
};

/**
 * The test reducer.
 */
export default testReducer;
