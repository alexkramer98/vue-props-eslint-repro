<script setup lang="ts">
// no problems in this file
const props = defineProps<{
  a: boolean;
  b: string
}>();

if (props.a) {
    console.log(`${props.b.replace('find', 'replace')}`)
}
</script>
