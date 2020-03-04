<template>
    <div :class="datas.classes" :style="datas.parsedStyles.container" class="site__cards">
        <div class="site__cards__inner">
            <div v-for="(item) in datas.list" :style="item.parsedStyles.card" hover v-bind="datas.attributes" :key="item.header" :class="item.classes" class="site__card" >
                <div class="card__header__container">
                    <div class="card__avatar" v-if="item.icon">
                        <img :src="item.icon" :alt="item.header" class="card__icon">
                    </div>
                    <div v-if="item.header && item.eltype === 'Icons'" class="card__header__container__text">
                        <h6 class="card__smaller__sub__header" v-if="item.header">{{ item.header }}</h6>
                    </div>
                    <div v-if="item.header && item.eltype === 'Contact'" class="card__header__container__text">
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
                <Sitebutton v-if="item.button" :text="item.button" :link="item.link" :styles="item.parsedStyles.button"/>
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
    max-width: 1300px;
    margin: 0 auto;
    padding: 0px 20px;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: row;
    align-content: center;
    justify-content: space-around;
}
.cards--flex-wrap-desktop--true .site__cards__inner {
    flex-wrap: wrap;
}
.site__card {
    flex: 1 1 auto;
    padding: 14px 10px;
    box-sizing: border-box;
    margin: 14px 10px;
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
.cards--max-width--15 {
    flex: 0 1 12%;
}
.cards--max-width--25 {
    flex: 0 1 22%;
}
.cards--max-width--33 {
    flex: 0 1 31%;
}
.cards--max-width--40 {
    flex: 0 1 37%;
}
.cards--max-width--50 {
    flex: 0 1 46%;
}
.cards--max-width--60 {
    flex: 0 1 56%;
}
.cards--max-width--66 {
    flex: 0 1 62%;
}
.cards--max-width--75 {
    flex: 0 1 70%;
}
.cards--max-width--85 {
    flex: 0 1 80%;
}
.cards--max-width--100 {
    flex: 1 1 100%;
}
.cards--max-width--auto {
    flex: 1 1 auto;
}
.cards--max-width--medium {
    justify-content: space-around;
}
/* .cards--max-width--medium .site__card{
    width: 31%;
} */
.cards--max-width--large {
    justify-content: space-around;
}
.cards--max-width--large .site__card{
    min-width: 240px;
    /* width: 47%; */
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
    flex-direction: column;
    flex-wrap: nowrap;
    align-content: center;
    justify-content: flex-start;
    max-width: 100%;
}
.card__avatar {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: center;
}
.card__avatar img {
    object-fit: contain;
    align-self: center;
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
.card__content {
    padding: 12px 0;
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
    width: 96%;
    max-width: 260px;
    margin: 0 auto;
}
.cards--card-type--contact .card__contact__email {
    text-align: center;
    color: #FFF;
    margin: 10px auto 4px;
}

.cards--card-type--icons {

}
.cards--card-type--icons .card__avatar {
    height: 40px;
}
.cards--card-type--icons .card__avatar img {
    max-height: 94%;
    max-width: 100px;
    width: 100%;
}

/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 768px) {
    .site__cards {
        padding: 14px;
    }
    .cards--flex-wrap-mobile--true .site__cards__inner {
        flex-wrap: wrap;
    }
}
</style> 