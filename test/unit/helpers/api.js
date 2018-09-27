import axios from 'axios'
const MockAdapter = require('axios-mock-adapter')
const mock = new MockAdapter(axios)
mock.onPost('/tasks', {
    body: 'Stroke cats'
}).reply(200, {
    id: 1,
    body: 'Stroke cats'
})
mock.onDelete('/tasks/1').reply(200, null)
mock.onGet('/tasks').reply(200, [
    {
        id: 1,
        body: 'Task one'
    },
    {
        id: 2,
        body: 'Task two'
    }
])
