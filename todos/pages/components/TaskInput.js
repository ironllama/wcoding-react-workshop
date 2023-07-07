import { useState } from "react"

import styles from '../../styles/TaskInput.module.css';

export default function TaskInput(props) {
    const [text, setText] = useState("");

    function handleClick() {
        props.newTask(text);
        setText("");
    }

    function handleKeyUp(evt) {
        if (evt.code === "Enter") handleClick();
    }

    return (
        <div className={styles.taskInput}>
            <input type="text" className={styles.taskTextInput} onKeyUp={handleKeyUp} onChange={(evt) => setText(evt.target.value)} value={text} />
            <button className={styles.addButton} onClick={handleClick}>Add Task</button> </div>
    )
}