<template>
    <div>
        <h1>{{title}}</h1>
        <div>
            <slot></slot>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from 'vue';
    import { Component, Prop } from 'vue-property-decorator';

    @Component
    export default class FaqList extends Vue {
        @Prop() private title!: string;
    };
</script>
