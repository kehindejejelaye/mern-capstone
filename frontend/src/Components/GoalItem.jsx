import GoalService from "../Services/GoalService"

function GoalItem({ goal }) {
  
  return (
    <div className='goal'>
      <div>{new Date(goal.createdAt).toLocaleString('en-US')}</div>
      <h2>{goal.text}</h2>
      <button onClick={() => GoalService.deleteGoal(goal._id)} className='close'>
        X
      </button>
    </div>
  ) 
}

export default GoalItem
