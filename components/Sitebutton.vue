<template>
    <nuxt-link class="site__button" :style="styles ? styles : null" :to="link">
        {{text}}
    </nuxt-link>
</template>

<script>
export default {
    props: {
        datas: Object,
        styles: Object,
        text: String,
        link: String
    },
    data() {
        return {
            vtheme: {
                "1" : {
                    "bottom": true,
                    "dark": false,
                    "depressed": false,
                    "small": true
                }
            }
        }
    }
}
</script>

<style>
.site__button {
    margin: 20px 0;
    padding: 12px 30px;
    border-radius: 4px;
    text-transform: uppercase;
    cursor: pointer;
}
</style>

