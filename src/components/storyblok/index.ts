import About from '@/components/storyblok/About.vue'
import Advantages from '@/components/storyblok/Advantages.vue'
import Banner from '@/components/storyblok/Banner.vue'
import Features from '@/components/storyblok/Features.vue'
import Grid from '@/components/storyblok/Grid.vue'
import Hero from '@/components/storyblok/Hero.vue'
import Page from '@/components/storyblok/Page.vue'
import Process from '@/components/storyblok/Process.vue'
import Questions from '@/components/storyblok/Questions.vue'
import Services from '@/components/storyblok/Services.vue'
import TeamMember from '@/components/storyblok/TeamMember.vue'
import type { App } from 'vue'

/* eslint-disable vue/multi-word-component-names */
export const initStoryblokComponents = (app: App) => {
  app.component('About', About)
  app.component('Advantages', Advantages)
  app.component('Banner', Banner)
  app.component('Features', Features)
  app.component('Grid', Grid)
  app.component('Hero', Hero)
  app.component('Page', Page)
  app.component('Process', Process)
  app.component('Questions', Questions)
  app.component('Services', Services)
  app.component('TeamMember', TeamMember)
}
/* eslint-enable vue/multi-word-component-names */
