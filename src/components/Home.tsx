import { PlusCircle, Trash } from "phosphor-react";

import styles from './Home.module.css'

export function Home() {

  return (
    <>
      <div className={styles.body}>
        <div className={styles.container}>
          <form className={styles.form}>
            <input type="text" placeholder='Adicione uma nova tarefa' />
            <button>
              Criar <PlusCircle size={16} />
            </button>
          </form>

          <div className={styles.listTask}>
            <header>
              <div className={styles.taskCreate}>
                <strong>Tarefas criadas</strong> <span className={styles.badge}>5</span>
              </div>
              <div className={styles.taskComplete}>
                <strong>Concluídas</strong> <span className={styles.badge}>2 de 5</span>
              </div>
            </header>

            <ul>
              <li className={styles.taskItem}>
                <input type='checkbox' className={styles.taskCheckbox} />
                <p className={styles.isActive}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button title='Remover task' className={styles.taskRemove}>
                  <Trash size={16} />
                </button>
              </li>

              <li className={styles.taskItem}>
                <input type='checkbox' className={styles.taskCheckbox} />
                <p className={styles.isNotActive}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button title='Remover task' className={styles.taskRemove}>
                  <Trash size={16} />
                </button>
              </li>

              <li className={styles.taskItem}>
                <input type='checkbox' className={styles.taskCheckbox} />
                <p className={styles.isActive}>Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.</p>
                <button title='Remover task' className={styles.taskRemove}>
                  <Trash size={16} />
                </button>
              </li>
            </ul>
          </div>


        </div>


      </div>
    </>
  )
}