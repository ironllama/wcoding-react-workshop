import TaskItem from "./TaskItem";

import styles from "../../styles/TaskList.module.css"

export default function TaskOutput(props) {
    const allTasks = props.tasks.map((v, i) => <TaskItem key={"task" + i} taskNum={i} task={v} deleteTask={props.deleteTask} />);
    return (
        <ul className={styles.taskList}>
            {allTasks}
        </ul>
    );
}