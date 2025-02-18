<template>
  <v-container>
    <h1>Civil Engineers</h1>
    <v-row>
      <v-col cols="12" md="6">
        <v-card elevation="8" height="100%">
          <v-card-title>What they do:
          </v-card-title>
          <v-card-text>
            <p>
              Perform engineering duties in planning, designing, and overseeing construction and maintenance of building
              structures and facilities, such as roads, railroads, airports, bridges, harbors, channels, dams, irrigation
              projects, pipelines, power plants, and water and sewage systems.
            </p>

          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="12" md="6">

        <v-card elevation="8" height="100%">
          <v-card-title >
            On the job, you would:

          </v-card-title>
          <v-card-text>
            <p>
              Direct engineering activities, ensuring compliance with environmental, safety, or other governmental regulations.
              Manage and direct the construction, operations, or maintenance activities at project site.
              Inspect project sites to monitor progress and ensure conformance to design specifications and safety or sanitation standards.
            </p>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
    <v-row>
      <v-col cols="12" md="4">
        <v-card elevation="8" height="100%">
          <v-card-title>
            Knowledge
          </v-card-title>
          <v-list
              :items="items"
              lines="three"
              item-props>
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-card>
      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="8" height="100%">
          <v-card-title>
            Skills
          </v-card-title>
          <v-list
              :items="items"
              lines="three"
              item-props>
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-card>

      </v-col>
      <v-col cols="12" md="4">
        <v-card elevation="8" height="100%">
          <v-card-title>
            Abilities
          </v-card-title>
          <v-list
              :items="items"
              lines="three"
              item-props>
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-card>

      </v-col>

    </v-row>
    <v-row>
      <v-col cols="7">
        <v-card elevation="8" height="100%">
          <v-card-title>
            Personality
          </v-card-title>
          <v-card-text>
            People interested in this work like activities that include practical, hands-on problems and solutions.
          </v-card-text>
          <v-card-text>
            <v-card-subtitle>They do well at jobs that need:</v-card-subtitle>
            <v-row>
              <v-col cols="6" v-for="item in personalityItems">
                <v-list-item> {{item}}</v-list-item>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
      <v-col cols="5">
        <v-card elevation="8" height="100%">
          <v-card-title>
            Technology
          </v-card-title>
          <v-card-text>
            You might use software like this on the job:

          </v-card-text>
          <v-list
              :items="items"
              lines="three"
              item-props>
            <template v-slot:subtitle="{ subtitle }">
              <div v-html="subtitle"></div>
            </template>
          </v-list>
        </v-card>
      </v-col>
    </v-row>
    <v-card v-if="job">
      <v-card-title>{{ job.title }}</v-card-title>
      <v-card-text>
        <p>{{ job.description }}</p>
      </v-card-text>
    </v-card>
<!--    <v-overlay-->
<!--        v-else-->
<!--        :model-value="overlay"-->
<!--        class="align-center justify-center"-->
<!--    >-->
<!--      <v-progress-circular-->
<!--          color="primary"-->
<!--          size="64"-->
<!--          indeterminate-->
<!--      ></v-progress-circular>-->
<!--    </v-overlay>-->
  </v-container>
</template>

<script setup lang="ts">
const overlay = ref(true)

const {data} = await useFetch('/api/data')
const job = ref(data)

const items =  ref([
  {
    title: 'Engineering and Technology',
    subtitle: `<ul><li>design</li><li>product and service development</li></ul>`,
  },
  { type: 'divider' },
  {
    title: 'Math and Science',
    subtitle: `<ul><li>design</li><li>product and service development</li></ul>`,
  },
  { type: 'divider' },
  {
    title: 'Oui oui',
    subtitle: '<span class="text-primary">Sandra Adams</span> &mdash; Do you have Paris recommendations? Have you ever been?',
  },
  { type: 'divider' },
  {
    title: 'Birthday gift',
    subtitle: '<span class="text-primary">Trevor Hansen</span> &mdash; Have any ideas about what we should get Heidi for her birthday?',
  },
  { type: 'divider' },
  {
    title: 'Recipe to try',
    subtitle: '<span class="text-primary">Britta Holt</span> &mdash; We should eat this: Grate, Squash, Corn, and tomatillo Tacos.',
  },
])
const personalityItems = ref(['Integrity',
  'Dependability',
  'Analytical Thinking',
  'Attention to Detail',
  'Initiative',
  'Self Control'
])
</script>

<style scoped>
/* استایل‌های مورد نیاز */
</style>