<template>
    <form action="#" class="new-task" @submit.prevent="saveTask">
        <input type="text" class="new-task__input" v-model="taskBody">
        <button type="submit" class="new-task__button">Add</button>
    </form>
</template>
<script>
import { mapGetters, mapMutations, mapActions } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            task: 'getTask'
        }),
        taskBody: {
            get() {
                return this.task.body
            },
            set(value) {
                this.setTaskBody(value)
            }
        }
    },
    methods: {
        ...mapMutations({
            setTaskBody: 'setTaskBody'
        }),
        ...mapActions({
            saveTask: 'saveTask'
        })
    }
}
</script>
<style scoped lang="scss">
.new-task {
    display: flex;
}
</style>
