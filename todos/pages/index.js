import Head from 'next/head';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] })

import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';

import styles from '@/styles/Home.module.css';
import { useState } from 'react';

export default function Home() {
  const [listOfTasks, setListOfTasks] = useState([]);

  function addTask(task) {
    // Do something.
    // setListOfTasks([...listOfTasks, task]);
    setListOfTasks(currList => [...currList, task]);
  }

  function deleteTask(taskNum = null) {
    // const newList = [...listOfTasks].filter(t => t !== task);
    let newList = [...listOfTasks];
    if (taskNum !== null) {
      newList = newList.slice(0, taskNum).concat(newList.slice(taskNum + 1));
    }
    setListOfTasks(newList);
  }

  return (
    <>
      <Head>
        <title>Todos</title>
      </Head>
      <main className={styles.main}>
        <div className={styles.tasks}>
          <TaskInput newTask={addTask} />
          <TaskList tasks={listOfTasks} deleteTask={deleteTask} />
        </div>
      </main>
    </>
  )
}
