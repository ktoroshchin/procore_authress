const API = require('./api')

async function procoreData() {
  const token = await API.getProcoreAuthToken()
  
  if(!token) {
    console.log('TOKEN ERROR', token)
    return
  }
  // console.log(token)

  // Company all projects
  const companyProjects = await API.fetchAllProjects(token)
  console.log('All companyProjects ------------>', companyProjects)

  // Task items for a test project with ID 28001
  const taskItemsForProject = await API.fetchTasks(token, API)
  console.log('Task items for the test project with ID 28001----------->', taskItemsForProject)

} 


// } else {
//   console.log('TOKEN is NULL, run getProcoreAuthToken')
// }

procoreData()
 