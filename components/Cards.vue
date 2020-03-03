<template>
    <div :class="datas.classes" :style="datas.parsedStyles.container" class="site__cards">
        <div class="site__cards__inner">
            {{datas}}
            <div :to="item.link ? item.link : null" v-for="(item, index) in datas.list" :style="datas.parsedStyles.cards" hover v-bind="datas.attributes" :key="item.header" class="site__card">
                <div class="card__header__container">
                    <div class="card__avatar" v-if="item.icon">
                        <img :src="item.icon" :alt="item.header" class="card__icon">
                    </div>
                    <div v-if="item.header" class="card__header__container__text">
                        <h3 class="card__header">{{ item.header }}</h3>
                        <h4 class="card__sub__header" v-if="item.sub_header">{{ item.sub_header }}</h4>
                        <h5 class="card__smaller__sub__header" v-if="item.sub_sub_header">{{ item.sub_sub_header }}</h5>
                        <a class="card__contact__email" v-if="item.link" :href="item.link">{{ item.link }}</a>
                    </div>
                </div>
                <div v-if="item.content" class="card__content">
                    <div v-html="$md.render(item.content)"></div>
                </div>
                <vue-plyr ref="plyr" v-if="item.file">
                    <audio>
                        <source :src="item.file" type="audio/mp3"/>
                    </audio>
                </vue-plyr>
                <Sitebutton v-if="item.button" :datas="{'text': item.button, 'link': item.link, 'styles': datas.parsedStyles.button}"/>
            </div>
        </div>
    </div>
</template>

<script>
import Sitebutton from '~/components/Sitebutton.vue';
import VuePlyr from 'vue-plyr/dist/vue-plyr.ssr.js';

export default {
    components: {
        Sitebutton
    },
    props: {
        datas: Object,
        theme: Object
    },
    computed: {
        player () {
            return this.$refs.plyr.player
        }
    },
    data() {
        return {
            vtheme: {
                "1" : {
                    hover: true,
                    light: true,
                    ripple: true,
                    shaped: true,
                    tile: false,
                    raised: true,
                    outlined: true
                }
            }
        }
    },
}
</script>

<style>
.v-application--is-ltr .v-list-item__avatar:first-child {
    margin-right: 6px;
}
.site__cards {
    width: 100%;
    margin: 0 auto;

}
.site__cards__inner {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 40px 20px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
}
.site__card {
    flex: 1 1 auto;
    padding: 20px;
    box-sizing: border-box;
    margin: 40px 10px;
    min-width: 240px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: flex-start;
}
.cards--max-width--small {
    justify-content: space-around;
}
.cards--max-width--small .site__card{
    width: 23%;
}
.cards--max-width--medium {
    justify-content: space-around;
}
.cards--max-width--medium .site__card{
    width: 31%;
}
.cards--max-width--large {
    justify-content: space-around;
}
.cards--max-width--large .site__card{
    min-width: 240px;
    width: 47%;
}
.cards--max-width--unlimited {
    justify-content: flex-start;
}
.cards--max-width--unlimited .site__card {
    width: 100%;
}
.card__header, .card__sub__header {
    text-align: center;
    margin: 0;
    overflow: unset;
    white-space: normal;
}
.card__header__container {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-content: flex-start;
    justify-content: flex-start;
    max-width: 100%;
}
.card__header__container__text {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
}
.card__smaller__sub__header {
    text-align: center;
}

.cards--card-type--contact {

}
.cards--card-type--contact .card__header__container {
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: flex-start;
}
.cards--card-type--contact .card__avatar {
    margin: 0 auto 10px;
}
.cards--card-type--contact .card__avatar img {
    border-radius: 50%;
    max-width: 96%;
    margin: 0 auto;
}
.cards--card-type--contact .card__contact__email {
    text-align: center;
    color: #FFF;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 768px) {
    .site__cards {
        padding: 14px;
    }
}
</style> 