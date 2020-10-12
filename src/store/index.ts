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

import rootReducer from './reducers';
import Thunk from 'redux-thunk';
import { applyMiddleware, compose, createStore } from 'redux';
import { ITestState } from './reducers/test';
import { IS_DEV } from '../constants';

/**
 * The global Redux state.
 */
export interface IState {
  test: ITestState;
}

const composeEnhancers = (IS_DEV ? (window as any)['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] : null) || compose;

const store = createStore(
  rootReducer,
  composeEnhancers(
    applyMiddleware(Thunk)
  )
);

/**
* The global Redux store.
*/
export default store;
