import { createStore } from 'redux';

const INITIAL_STATE = {
  activeProject: {},
  activeTask: {},
  projects: [
    {
      id: 1,
      title: 'projeto 1',
      tasks: [
        { id: 1, title: 'primeira task' },
        { id: 2, title: 'segunda task' },
        { id: 3, title: 'terceira task' },
      ],
    },
    {
      id: 2,
      title: 'projeto 2',
      tasks: [
        { id: 3, title: 'primeira task' },
        { id: 4, title: 'segunda task' },
      ],
    },
  ],
};
function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case 'TOGGLE_PROJECT':
      return {
        ...state,
        activeProject: action.project,
        activeTask: action.task,
      };
    default:
      return state;
  }
}

let store = createStore(reducer);

export default store;
