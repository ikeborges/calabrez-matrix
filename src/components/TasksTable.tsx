import { useState } from 'react'

import { SecondaryButton } from './Buttons'
import {
  EditingTaskTableRow,
  TaskTableRow,
  NewTaskTableRow,
} from './TaskTableRows'

const rows = [
  {
    isBeingEdited: false,
    task: {
      id: 1,
      description: 'Task description 1',
      importance: 8,
      urgency: 6,
    },
  },
  {
    isBeingEdited: true,
    task: {
      id: 2,
      description: 'Task description 2',
      importance: 3,
      urgency: 8,
    },
  },
  {
    isBeingEdited: false,
    task: {
      id: 3,
      description: 'Task description 3',
      importance: 1,
      urgency: 2,
    },
  },
  {
    isBeingEdited: false,
    task: {
      id: 4,
      description: 'Task description 4',
      importance: 5,
      urgency: 1,
    },
  },
]

const TasksTable = () => {
  const [showNewTaskRow, setShowNewTaskRow] = useState(false)

  return (
    <section className="table-container">
      <header>
        <h2>Your task list</h2>
        <SecondaryButton>Clear task list</SecondaryButton>
      </header>
      <table>
        <thead>
          <tr>
            <th className="id" scope="col">
              Id
            </th>
            <th className="description" scope="col">
              Task description
            </th>
            <th className="urgency" scope="col">
              Urgency rating
            </th>
            <th className="importance" scope="col">
              Importance rating
            </th>
            <th className="actions" scope="col">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {rows.map((row) => {
            return row.isBeingEdited ? (
              <EditingTaskTableRow key={row.task.id} task={row.task} />
            ) : (
              <TaskTableRow key={row.task.id} task={row.task} />
            )
          })}
          {showNewTaskRow && <NewTaskTableRow />}
        </tbody>
      </table>

      {!showNewTaskRow && <SecondaryButton>+ Add new task</SecondaryButton>}
    </section>
  )
}

export default TasksTable
