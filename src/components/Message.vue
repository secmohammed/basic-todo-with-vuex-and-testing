<template>
    <div class="message">
        {{ message }}
    </div>

</template>
<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters({
            message: 'getMessage'
        })
    }
}
</script>
