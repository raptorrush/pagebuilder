<template>
    <div :class="datas.classes" class="site__hero__banner">
        <div class="banner__img__container">
            <picture class="banner__img">
                <source :srcset="datas.desktop" media="(min-width: 768px)">
                <source :srcset="datas.mobile" media="(min-width: 300px)">
                <img class="banner__img" :src="datas.desktop" :alt="datas.header_1"/>
            </picture>
            <!-- <img :src="datas.desktop" :alt="datas.header_1" class="banner__img"> -->
            <nuxt-link v-if="datas.link && datas.button_text.length === 0" :to="datas.link" class="banner__link"/>
        </div>
        <div class="banner__text__container">
            <h1 v-if="datas.header_1" :style="datas.parsedStyles.header" class="banner__header--h1">
                <span >{{ datas.header_1 }}</span>
                <span v-if="datas.header_2">{{ datas.header_2 }}</span>
            </h1>
            <Sitebutton v-if="datas.button_text" :text="datas.button_text" :styles="datas.parsedStyles.button" :link="datas.link" class="hero__button"/>
        </div>
    </div>
</template>

<script>
// import Sitebutton from '~/components/Sitebutton.vue';

export default {
    // components: {
    //     Sitebutton
    // },
    props: {
        datas: Object,
        theme: Object
    },
    data() {
        return {
            vtheme: {
                "1" : {
                    hover: true //MEANS NOTHING RIGHT NOW FOR THIS COMPONENT
                }
            }
        }
    },
}
</script>

<style>
.site__hero__banner {
    position: relative;
    max-width: 100%;
    width: 100%;
    margin: 0 auto;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
    overflow: hidden;
}
.banner__img__container {
    width: 100%;
    max-width: 100%;
    height: 100%;
    max-height: 800px;
    position: relative;
}
.banner__img {
    width: 100%;
    height: 100%;
    max-height: 100%;
    display: block;
}
.banner__link {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    height: 100%;
    z-index: 2;
}
.banner__text__container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    /* flex-wrap: wrap; */
    justify-content: flex-start;
    padding: 4vw 6vw;
}
.banner__header--h1 {
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: center;
}
.heroBanner--alignment--center .banner__text__container {
    text-align: center;
    white-space: nowrap;
    align-content: center;
}
.heroBanner--alignment--left .banner__text__container {
    text-align: left;
    align-content: flex-start;
}
.heroBanner--alignment--right .banner__text__container {
    text-align: right;
    align-content: flex-end;
}
.heroBanner--justify-content--top .banner__text__container {
    justify-content: flex-start;
}
.heroBanner--justify-content--center .banner__text__container {
    justify-content: center;
}
.heroBanner--justify-content--bottom .banner__text__container {
    justify-content: flex-end;
}
.hero__button {
    align-self: flex-start;
}
</style> 