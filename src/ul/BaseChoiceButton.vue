<template>
	<span class="choice_button">

			<slot></slot>

	</span>
</template>

<style lang="scss" scoped>
@import '@/scss/mixin.scss';

.choice_button {
    min-width: 60px;
    max-width: max-content;
    height: 30px;
    display: inline-block;
    line-height: 27px;
    color: #787878;
    border: 1px solid #787878;
    border-radius: 10000px;
    position: relative;
    text-align: center;
	margin-right: 10px
}
</style>