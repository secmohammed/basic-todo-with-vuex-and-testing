<template>
    <div class="task">
        <h1 class="task__title">{{ task.body }}</h1>
        <a href="#" class="task__delete">&times;</a>
    </div>
</template>
<script>
export default {
    props: ['task']
}
</script>
<style scoped lang="scss">
.task {
    display: flex;
    flex-direction: row-reverse;
    align-items: center;
}
</style>
