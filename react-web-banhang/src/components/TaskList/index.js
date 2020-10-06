import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import styles from './styles';
import Grid from '@material-ui/core/Grid';
import TaskItem from '../TaskItem/index.js';


class TaskList extends Component {

    render() {
         const { classes, tasks, status } = this.props;
         console.log('Quydz',this.props)
        return (
           
             <Grid item md={4} xs={12}  >
                <Box mt={2} mb={2}>
                    <div className={classes.taskList}>
                    {status.label}
                    </div>
                </Box>
                {
                    tasks.map((task, key) => {

                        return <TaskItem task={task} key={key} status={status} />
                    })
                }
             </Grid>
            
        );
    }
}

export default withStyles(styles)(TaskList);
