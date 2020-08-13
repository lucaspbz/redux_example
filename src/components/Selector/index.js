import React from 'react';
import { connect } from 'react-redux';

function Selector({ activeProject, activeTask }) {
  return (
    <div>
      {' '}
      {`Projeto ${activeProject.title} task ${activeTask.title} selecionado`}{' '}
    </div>
  );
}
export default connect((state) => ({
  activeProject: state.activeProject,
  activeTask: state.activeTask,
}))(Selector);
