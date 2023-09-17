<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div>
        <ul>
            <li v-for="item in items" :key="item.id" @click="eachitem(item.id)" >
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props:{
        items: {
            type: Array,
            // eslint-disable-next-line vue/require-valid-default-prop
            default: []
        }
    },
    data(){
        return {
            routername: ''
        }
    },
    mounted(){       
        this.routername = this.$router.currentRoute.path.slice(0, -1)
    },
    methods:{
        eachitem(id){
            this.$router.push(`${this.routername}/${id}`)
        }
    }
}
</script>

<style>

</style>