import { useState } from "react"
import Image from "next/image"
import styles from "../styles/Home.module.css"

export default function Home() {
  const [taskName, setTaskName] = useState('')
  const [tasksData, setTaskData] = useState([{task: "Jogar Video Game", completed: false}, {task: "Limpar a Casa", completed: true}])
  const [optionsTask, setOptionTask] = useState("")

  const insertTask = (taskName)=>{
    const dataTask = {
      task: taskName,
      completed: false
    }
    setTaskData((prevTasks)=>[...prevTasks, dataTask])
  }

  return (
    <>

    <section className={styles.section_input_task}>
      <div>
        <input value={taskName} onChange={(event)=>setTaskName(event.target.value)} placeholder="Adicione uma tarefa"/>
      </div>
      <div>
        <select value={optionsTask} onChange={(event)=>setOptionTask(event.target.value)}>
          <option value="">Escolha uma opção</option>          
          <option value="Estudos">Estudos</option>
          <option value="Trabalho">Trabalho</option>
          <option value="Lazer">Lazer</option>
          <option value="Saúde">Saúde</option>
        </select>
        <button onClick={()=>insertTask(taskName)}>Incluir Tarefa</button>
      </div>

    </section>
    <section className={styles.section_detail_tasks}>
      <h2>Tarefas em Aberto</h2>
        {tasksData.length > 0 ?
        tasksData.filter((task)=> !task.completed).map((task, index)=>{
          return(
            <div key={index} className={styles.box_task}>
              <div>
                <h3>{task.task}</h3>
              </div>
              <div>
                <input type="checkbox"/>
                <Image src="/images/pencil.svg" width="20" height="20" alt="editar-tarefa"/>
                <Image src="/images/trash-bin.svg" width="20" height="20" alt="editar-tarefa"/>
              </div>
              
            </div>
          )
        })
        :
        <p>Nenhuma tarefa cadastrada!</p>}

      <div>

      </div>

    </section>
    <section>
      <h1></h1>
    </section>
    </>
  )
}
