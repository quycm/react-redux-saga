import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import styles from './styles.js';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Grid from '@material-ui/core/Grid';
import { STATUSES } from '../../../constants/index.js';
import TaskList from '../../../components/TaskList/index.js';
import TaskForm from '../../../components/TaskForm/index.js';

const listTask = [
  {
    id: 1,
    title: 'Read book',
    description: 'Read material book',
    status: 0,
  },
  {
    id: 2,
    title: 'Play football',
    description: 'Read material book',
    status: 1,
  },
  {
    id: 3,
    title: 'Play Games',
    description: 'Read material book',
    status: 2,
  },
];

class Taskbroad extends Component {
  state = {
    open: false,
  };
  renderBroad() {
    let xhtml = null;
    xhtml = (
      <Grid container spacing={2}>
        {STATUSES.map((value, key) => {
          const taskFilter = listTask.filter((task) => {
            return task.status === value.value;
          });
          console.log(taskFilter);
          return <TaskList tasks={taskFilter} status={value} key={key} />;
        })}
      </Grid>
    );
    return xhtml;
  }

  handleClose = () => {
    this.setState({
      open: false,
    });
  };

  openForm = () => {
    this.setState({
      open: true,
    });
  };

  renderForm() {
    const { open } = this.state;
    let xhtml = null;
    xhtml = <TaskForm open={open} onClose={this.handleClose} />;
    return xhtml;
  }
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.taskBroad}>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={this.openForm}
        >
          <AddIcon /> Thêm mới công việc
        </Button>
        {this.renderBroad()}
        {this.renderForm()}
      </div>
    );
  }
}

export default withStyles(styles)(Taskbroad);
