<template>
    <div class="faq-item">
        <h4 class="faq-question">
            <a href="#" @click.stop.prevent="expand">
                <slot name="question"></slot>
                <span class="caret" :class="{open: isOpen}"></span>
            </a>
        </h4>
        <div class="faq-answer" :class="{open: isOpen}">
            <p><slot name="answer"></slot></p>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component } from 'vue-property-decorator';

    @Component
    export default class FaqItem extends Vue {

        private isOpen = false;

        expand() {
            this.isOpen = !this.isOpen;
            return false;
        }

    };
</script>

<style scoped lang="scss">
    .faq-item {
        margin-bottom: 0.5em;
    }
    .faq-question {
        margin: 0;
        padding: 0.5em;
        color: white;
        background-color: #02466e;
        border: 1px solid #6d9fa3;
        border-radius: 5px;
        font-size: 1.25em;
        font-weight: 700;
        display: flex;
        justify-content: space-between;

        a {
            color: inherit;
            text-decoration: none;
            width: 100%;
        }
    }
    .faq-answer {
        // display: none;
        max-height: 0;
        overflow: hidden;
        transition: max-height 0.25s;
    }
    .faq-answer.open {
        // display: block;
        max-height: 2000px;
        transition: max-height 0.5s;
    }
    .caret {
        width: 0;
        height: 0;
        display: inline-block;
        position: relative;
        border: 0.5em solid transparent;
        float: right;
        border-left-color: white;
        transform: rotate(0deg);
        margin-top: 0.25em;

        &.open {
            transform: rotate(90deg);
            margin-top: 0.25em;
        }
    }
</style>
