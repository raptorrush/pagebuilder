<template>
    <div :class="datas.classes" :style="datas.parsedStyles.spacer">
        <div class="spacer__inner">
            <div :style="datas.parsedStyles.line" class="spacer__line"></div>
        </div>
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
.spacer {
    width: 100%;
    display: block;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
}
.spacer__inner {
    width: 80%;
    height: 100%;
    margin: 0 auto;
    height: 1px;
    position: relative;
    flex: 1;
}

.spacer__line {
    width: 100%;
    height: 1px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    display: none;
}
.spacer--line--true .spacer__line  {
    display: block;
}
.spacer--height--extra-small {
    height: 20px;
}
.spacer--height--small {
    height: 32px;
}
.spacer--height--medium {
    height: 46px;
}
.spacer--height--large {
    height: 58px;
}
.spacer--height--extra-large {
    height: 76px;
}
.spacer--height--mega-ultra-huge {
    height: 100px;
}
</style> 