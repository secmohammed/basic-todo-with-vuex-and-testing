import * as getters from '@/store/getters'

describe('getters', () => {
    it('gets a message', function() {
        const state = {
            message: 'Failed'
        }
        expect(getters.getMessage(state)).to.equal('Failed')
    })
    it('getTasks', () => {
        const state = {
            tasks: [
                {
                    id: 1,
                    body: 'Task one'
                },
                {
                    id: 2,
                    body: 'Task two'
                },
                {
                    id: 3,
                    body: 'Task three'
                }
            ]
        }
        expect(getters.getTasks(state)).to.deep.equal([
            {
                id: 3,
                body: 'Task three'
            },
            {
                id: 2,
                body: 'Task two'
            },
            {
                id: 1,
                body: 'Task one'
            }
        ])
    })
    it('getTask', () => {
        const state = {
            task: {
                body: 'A new task'
            }
        }
        expect(getters.getTask(state)).to.deep.equal({
            body: 'A new task'
        })
    })
})
