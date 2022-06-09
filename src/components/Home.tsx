import { PlusCircle, Trash } from "phosphor-react";
import { ChangeEvent, FormEvent, useEffect, useState } from "react";

import styles from './Home.module.css'
interface Task {
  id: number;
  title: string;
  isComplete: boolean;
}
export function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    { 'id': 1, 'title': 'Fazer Layout da aplicação Todo', isComplete: true },
    { 'id': 2, 'title': 'Compartilhar no LinkedIn', isComplete: false },
    { 'id': 3, 'title': 'Upa na Vercel', isComplete: false },

  ]);
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [isComplete, setIsComplete] = useState(false);
  const [taskActive, setTaskActive] = useState(0)
  const numberTask = tasks.length


  function handleCreateNewTask(event: FormEvent) {
    event.preventDefault();
    if (!newTaskTitle) {
      alert('Informe uma tarefa')
      return;
    }

    const addTask = {
      id: Math.floor(Math.random() * 100),
      title: newTaskTitle,
      isComplete
    }

    setTasks(oldState => [...oldState, addTask]);
    setNewTaskTitle('');

  }

  function handleToggleTaskCompletion(id: number) {
    const endTasks = tasks.map(task => task.id === id ? {
      ...task,
      isComplete: !task.isComplete
    } : task);

    setTasks(endTasks)

  }



  function handleRemoveTask(id: number) {
    const filterTask = tasks.filter(task => task.id != id)
    setTasks(filterTask)
  }

  useEffect(() => {
    var quantidadeElementos = tasks.filter(task => task.isComplete == true).length;
    setTaskActive(quantidadeElementos)
  }, [handleToggleTaskCompletion])

  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <div className={styles.form}>
            <input type="text"
              placeholder='Adicione uma nova tarefa'
              onChange={(e) => setNewTaskTitle(e.target.value)}
              value={newTaskTitle}
            />
            <button type="submit" onClick={handleCreateNewTask}>
              Criar <PlusCircle size={16} />
            </button>
          </div>

          <div className={styles.listTask}>
            <header>
              <div className={styles.taskCreate}>
                <strong>Tarefas criadas</strong> <span className={styles.badge}>{numberTask}</span>
              </div>
              <div className={styles.taskComplete}>
                <strong>Concluídas</strong> <span className={styles.badge}>{taskActive} de {numberTask}</span>
              </div>
            </header>

            <ul>
              {tasks.map(task => (
                <li className={styles.taskItem} key={task.id}>
                  <p
                    className={task.isComplete ? styles.isActive : styles.taskCheckbox}
                    onClick={() => handleToggleTaskCompletion(task.id)}
                  >
                    <input
                      type="checkbox"
                      readOnly
                      required
                      checked={task.isComplete}
                    />
                    {task.title}
                  </p>

                  <button title='Remover task' className={styles.taskRemove} onClick={() => handleRemoveTask(task.id)}>
                    <Trash size={16} />
                  </button>
                </li>
              ))}
            </ul>

          </div>

        </div>
      </div>
    </>
  )
}