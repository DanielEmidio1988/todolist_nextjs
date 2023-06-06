import { useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [taskName, setTaskName] = useState('')
  const [tasksData, setTaskData] = useState([{task: "Jogar Video Game", completed: false}, {task: "Limpar a Casa", completed: true}])

  const insertTask = (taskName)=>{
    const dataTask = {
      task: taskName,
      completed: false
    }
    setTaskData((prevTasks)=>[...prevTasks, dataTask])
    setTaskName('')
  }

  const deleteTask = (taskName)=>{
    const dataTask = tasksData.filter((task)=> {
      return task.task !== taskName
    })
    setTaskData(dataTask)
  }

  const updateStatusTask = (taskInfo)=>{
    const dataTask = tasksData.filter((task)=> {
      return task.task !== taskInfo.task
    })
    const auxTask = {...taskInfo, completed: !taskInfo.completed}
    dataTask.push(auxTask)
    setTaskData(dataTask)
  }

  return (
    <>

    <section className={styles.section_input_task}>
      <div>
        <input 
        value={taskName} 
        onChange={(event)=>setTaskName(event.target.value)} 
        onKeyDown={(event)=> event.key === 'Enter' ? insertTask(taskName, optionsTask) : ''}
        placeholder="Adicione uma tarefa"/>
      </div>
      <div>
        <button onClick={()=>insertTask(taskName)}>Incluir Tarefa</button>
      </div>
    </section>

    <section className={styles.section_detail_tasks}>
      <h2>Tarefas em Aberto</h2>
        {tasksData.length > 0 ?
        tasksData.filter((task)=> !task.completed).map((task, index)=>{
          return(
            <div key={index} className={styles.box_task} onDoubleClick={()=>updateStatusTask(task)}>
              <div>
                <h3>{task.task}</h3>
              </div>
              <div>
                <Image className={styles.button_task} src="/images/trash-bin.svg" width="20" height="32" alt="excluir-tarefa" onClick={()=>deleteTask(task.task)}/>
              </div>  
            </div>
          )
        })
        :
        <p>Nenhuma tarefa cadastrada!</p>}
    </section>

    <section className={styles.section_detail_tasks}>
      <h2>Tarefas Concluidas</h2>
          {tasksData.length > 0 ?
          tasksData.filter((task)=> task.completed).map((task, index)=>{
            return(
              <div key={index} className={styles.box_task} onDoubleClick={()=>updateStatusTask(task)}>
                <div>
                  <h3 className={styles.text_task_finish}>{task.task}</h3>
                </div>
                <div>
                  <Image className={styles.button_task} src="/images/trash-bin.svg" width="20" height="32" alt="excluir-tarefa" onClick={()=>deleteTask(task.task)}/>
                </div>  
              </div>
            )
          })
        :
        <p>Nenhuma tarefa cadastrada!</p>}
    </section>
    </>
  )
}
