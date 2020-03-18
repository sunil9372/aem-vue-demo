<template>
    <div class="faq-item">
        <h4 class="faq-question">
            <a href="#" @click.stop.prevent="expand">
                <slot name="question"></slot>
                <span class="caret" :style="{display: isOpen?'block':'none'}"></span>
            </a>
        </h4>
        <div class="faq-answer" :style="{display: isOpen?'block':'none'}">
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

