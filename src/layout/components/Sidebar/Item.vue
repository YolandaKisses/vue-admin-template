<template>
  <span>
    <template v-if="icon.includes('el-icon')">
      <i :class="[icon, 'sub-el-icon']" />
    </template>
    <template v-else>
      <svg-icon :icon-class="icon" />
    </template>
    <template v-if="title">
      <span slot="title" style="padding-left: 5px;">{{ title }}</span>
    </template>
  </span>
</template>
<script>
export default {
  name: 'MenuItem',
  props: {
    icon: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    }
  }
  /*   render(h, context) {
      const { icon, title } = context.props
      const vnodes = []

      if (icon) {
        if (icon.includes('el-icon')) {
          vnodes.push(<i class={[icon, 'sub-el-icon']} />)
        } else {
          vnodes.push(<svg-icon icon-class={icon} />)
        }
      }

      if (title) {
        vnodes.push(<span slot='title'>{(title)}</span>)
      }
      return vnodes
    } */
}
</script>

<style scoped>
.sub-el-icon {
  color: currentColor;
  width: 1em;
  height: 1em;
}
</style>
