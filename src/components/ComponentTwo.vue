<script setup lang="ts">
const props = defineProps<{
  c: boolean;
  d: string;
}>();

// triggers @typescript-eslint/strict-boolean-expressions
if (props.c) {
    // triggers @typescript-eslint/no-unsafe-member-access,@typescript-eslint/no-unsafe-call
    console.log(`${props.d.replace('find', 'replace')}`)
}
</script>
