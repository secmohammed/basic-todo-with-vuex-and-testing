<template>
    <div class="tasks">
        <div class="tasks__list">
            <p v-if="!tasks.length">No tasks , get adding some !</p>
            <task v-else v-for="task in tasks" :task="task" :key="task.id"></task>
        </div>
        <NewTask></NewTask>
    </div>
</template>
<script>
import { mapGetters } from 'vuex'
import Task from './Task'
import NewTask from './NewTask'
export default {
    components: {
        Task,
        NewTask
    },
    computed: {
        ...mapGetters({
            tasks: 'getTasks'
        })
    }
}
</script>
