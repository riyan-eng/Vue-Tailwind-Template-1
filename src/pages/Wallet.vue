<template>
    <PrivateLayout>
        <h1>ini wallet</h1>
        <div>{{               response               }}</div>
    </PrivateLayout>
</template>
<script>
import axios from 'axios';
import PrivateLayout from '../layouts/PrivateLayout.vue';
export default {
    components: {
        PrivateLayout
    },
    data() {
        return {
            response: null
        }
    },
    methods: {
        async getBalance() {
            const { data } = await axios('/transaction/unit/budget/balance', {
                headers: {
                    "Authorization": `Bearer ${this.$store.getters.user.accessToken}`
                }
            })
            this.response = data
        }
    },
    created() {
        this.getBalance()
    }
}
</script>