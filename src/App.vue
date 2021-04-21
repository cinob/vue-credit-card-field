<template>
    <div v-if="$route.path === '/'" class="container">
        <h3>Examples</h3>
        <ul>
            <li v-for="(component, key) in examples" :key="key">
                <router-link :to="`/examples/${kebabCase(key)}`">
                    {{ key }}
                </router-link>
            </li>
        </ul>
    </div>
    <component :is="routeComponent" v-else-if="routeComponent" />
    <div v-else>
        <h1 class="text-center mt-5">
            Page Not Found
        </h1>
    </div>
</template>

<script>
import examples from '../examples'
import { startCase, kebabCase } from 'lodash'

export default {

  data () {
    return {
      examples
    }
  },

  computed: {

    routeComponent () {
      return examples[startCase(this.$route.path.split('/').pop()).replace(/\s/g, '')]
    }

  },

  methods: {
    kebabCase
  }
}
</script>

<style lang="scss">
@import 'bootstrap/scss/bootstrap.scss';
</style>
