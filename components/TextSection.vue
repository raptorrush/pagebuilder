<template>
    <div :class="datas.classes" :style="datas.parsedStyles[Object.keys(datas.parsedStyles)[0]]" class="page__text__section">
        <div v-html="$md.render(datas.content)" class="page__text__section__inner"></div>
    </div>
</template>

<script>
export default {
    props: {
        datas: Object,
        theme: Object
    }
}
</script>

<style>
.page__text__section {
    width: 100%;
    margin: 0 auto;
}
.page__text__section__inner {
    max-width: 1300px;
    margin: 0 auto;
    padding: 60px 50px 50px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: flex-start;
    justify-content: center;
}
.page__text__section  h2 {
    width: 100%;
}
.textSection--text-align--left {
    text-align: left;
}
.textSection--text-align--right {
    text-align: right;
}
.textSection--text-align--center {
    text-align: center;
}
.textSection--max-width--small .page__text__section__inner {
    max-width: 700px;
}
.textSection--max-width--medium .page__text__section__inner {
    max-width: 1000px;
}
.textSection--max-width--large .page__text__section__inner {
    max-width: 1200px;
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 768px) {
    .page__text__section {
        padding: 20px;
    }
}
/* ------------------ MEDIA QUERY ------------------ */
@media screen and (max-width: 500px) {
    .page__text__section {
        padding: 20px 14px;
    }
}
</style> 