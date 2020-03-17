// Fix IDE error TS2307: Cannot find module 'vue'.
declare module "*.vue" {
    import Vue from "vue";
    export default Vue;
}
