const actionsInjector = require('inject-loader!@/store/actions')
import { testAction, testActionDispatching } from '../helpers'
import axios from 'axios'
require('../helpers/api')
const actions = actionsInjector({
    '@/api': {
        storeTask(payload) {
            return axios.post(`/tasks`, payload)
        },
        getTasks() {
            return axios.get(`/tasks`)
        },
        deleteTask(taskId) {
            return axios.delete(`/tasks/${taskId}`)
        }
    }
})
describe('actions', function() {
    it('deleteTask', function(done) {
        testAction(
            actions.deleteTask,
            1,
            {},
            [
                {
                    type: 'removeFromTasks',
                    payload: 1
                }
            ],
            done
        )
        testActionDispatching(actions.deleteTask, 1, {}, [
            {
                type: 'setMessage',
                payload: 'Deleted!'
            }
        ])
    })
    it('getTasks', function(done) {
        testAction(
            actions.getTasks,
            null,
            {},
            [
                {
                    type: 'setTasks',
                    payload: [
                        {
                            id: 1,
                            body: 'Task one'
                        },
                        {
                            id: 2,
                            body: 'Task two'
                        }
                    ]
                }
            ],
            done
        )
    })
    it('setMessage', function(done) {
        this.timeout(5000)
        const state = {
            message: null,
            messageTimeout: null
        }
        testAction(
            actions.setMessage,
            'Failed',
            state,
            [
                {
                    type: 'setMessage',
                    payload: 'Failed'
                },
                {
                    type: 'setMessage',
                    payload: null
                }
            ],
            done
        )
    })
    it('saveTask if a task has been entered', function(done) {
        const state = {
            task: {
                body: 'Stroke cats'
            }
        }
        testAction(
            actions.saveTask,
            null,
            state,
            [
                {
                    type: 'prependToTasks',
                    payload: {
                        id: 1,
                        body: 'Stroke cats'
                    }
                },
                {
                    type: 'setTaskBody',
                    payload: null
                }
            ],
            done
        )
        testActionDispatching(
            actions.saveTask,
            null,
            state,
            [
                {
                    type: 'setMessage',
                    payload: 'Task saved'
                }
            ],
            done
        )
    })
    it('saveTask if a task has not been entered', function(done) {
        const state = {
            task: {
                body: null
            }
        }
        testActionDispatching(
            actions.saveTask,
            null,
            state,
            [
                {
                    type: 'setMessage',
                    payload: 'Please Enter a task'
                }
            ],
            done
        )
    })
})
