import * as mutations from '@/store/mutations'
import * as _ from 'lodash'
import actualState from '@/store/state'
describe('mutations', function() {
    it('removeFromTasks', function() {
        const state = _.clone(actualState)
        state.tasks = [
            {
                id: 1,
                body: 'Task One'
            }
        ]
        state.tasks = [
            {
                id: 1,
                body: 'Task one'
            },
            {
                id: 2,
                body: 'Task two'
            }
        ]
        mutations.removeFromTasks(state, 1)
        expect(state.tasks).to.deep.equal([
            {
                id: 2,
                body: 'Task two'
            }
        ])
        expect(state.tasks.length).to.equal(1)
    })
    it('setMessage', function() {
        const state = {
            message: null
        }
        mutations.setMessage(state, 'Failed')
        expect(state.message).to.equal('Failed')
    })
    it('prependToTasks if empty', function() {
        const state = {
            tasks: []
        }
        mutations.prependToTasks(state, {
            id: 1,
            body: 'A new Task'
        })
        expect(state.tasks).to.deep.equal([
            {
                id: 1,
                body: 'A new Task'
            }
        ])
    })
    it('prependToTasks if already contains items', function() {
        const state = _.clone(actualState)
        state.tasks = [
            {
                id: 1,
                body: 'Task One'
            }
        ]
        mutations.prependToTasks(state, {
            id: 2,
            body: 'A new Task'
        })
        expect(state.tasks).to.deep.equal([
            {
                id: 2,
                body: 'A new Task'
            },
            {
                id: 1,
                body: 'Task One'
            }
        ])
    })
    it('setTaskBody', function() {
        const state = {
            task: {
                body: null
            }
        }
        mutations.setTaskBody(state, 'A task')
        expect(state.task.body).to.equal('A task')
    })
    it('sets tasks to the state', function() {
        const state = _.clone(actualState)
        let tasks = [
            {
                id: 1,
                body: 'Task One'
            },
            {
                id: 2,
                body: 'Task Two'
            }
        ]
        mutations.setTasks(state, tasks)
        expect(state.tasks).to.deep.equal(tasks)
    })
})
