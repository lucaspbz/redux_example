import React from 'react';
import { connect } from 'react-redux';

function Projects({ projects, dispatch }) {
  function toggleProject(project, task) {
    return {
      type: 'TOGGLE_PROJECT',
      project,
      task,
    };
  }

  return (
    <aside>
      {projects.map((project) => (
        <div key={project.id}>
          <strong>{project.title}</strong>
          <ul>
            {' '}
            {project.tasks.map((task) => (
              <li key={task.id}>
                {task.title}
                <button
                  onClick={() => {
                    dispatch(toggleProject(project, task));
                  }}
                >
                  Salvar como ativo
                </button>
              </li>
            ))}{' '}
          </ul>
        </div>
      ))}
    </aside>
  );
}

export default connect((state) => ({ projects: state.projects }))(Projects);
