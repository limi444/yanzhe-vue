<template>
    <div id="edit">
        <div v-if="edit_mode===2">
            <editor-rich-text @selectedMode="listenEditMode"></editor-rich-text>
        </div>
        <div v-else>
            <editor-markdown @selectedMode="listenEditMode"></editor-markdown>
        </div>
    </div>
</template>

<script>
    import EditorMarkdown from "./editor_components/EditorMarkdown";
    import EditorRichText from "./editor_components/EditorRichText";
    // import EditorRichText from "./editor_components/tinymce_test";
    export default {
        name: "Edit",
        data () {
            return {
                edit_mode: 1
            }
        },
        components: {
            EditorMarkdown,
            EditorRichText
        },
        methods: {
            listenEditMode (mode) {
                this.edit_mode = mode
            }
        }
    }
</script>

<style scoped>

</style>
