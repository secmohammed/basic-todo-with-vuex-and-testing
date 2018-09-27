import * as api from '@/api'
export const saveTask = ({ commit, dispatch, state }) => {
    if (!state.task.body) {
        dispatch('setMessage', 'Please Enter a task')
        return
    }
    api.storeTask({
        body: state.task.body
    }).then(response => {
        //prepend to tasks
        commit('prependToTasks', response.data)
        // set message
        dispatch('setMessage', 'Task saved')
        // set task body to null
        commit('setTaskBody', null)
    })
}
export const setMessage = ({ commit }, message) => {
    commit('setMessage', message)
    setTimeout(() => {
        commit('setMessage', null)
    }, 3000)
}
export const getTasks = ({ commit }) => {
    api.getTasks().then(response => {
        commit('setTasks', response.data)
    })
}
export const deleteTask = ({ commit, dispatch }, TaskId) => {
    commit('removeFromTasks', TaskId)
    api.deleteTask(taskId).then(() => {
        dispatch('setMessage', 'Deleted!')
    })
}
