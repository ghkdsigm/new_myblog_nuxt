<template>
    <div>
        <h2>공통리스트제목</h2>
        <thumblist :items="items" />        
    </div>
</template>

<script>
import { getPosts } from '@/api/index'
import thumblist from '@/components/thumblist'

export default {
    components:{
        thumblist
    },
    async asyncData(){
        try {
            const { data } = await getPosts()
            // eslint-disable-next-line array-callback-return , no-console
            const items = data.map((item, idx)=>({
                ...item,
            }))
            return { items }
        } catch (error) {
            const items = []
            return {items}
        }
    }
}
</script>

<style>

</style>