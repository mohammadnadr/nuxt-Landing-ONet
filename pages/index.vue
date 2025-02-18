<template>
  <v-container>
    <v-row>
      <v-col v-for="(item,index) in cards" :key="index" cols="12" sm="4">
        <v-card elevation="8" color="blue-grey-lighten-4">
          <v-card-title>{{ item.title }}</v-card-title>
          <v-divider/>
          <v-card-text>
            <v-autocomplete
                v-model="selectedJobs"
                :items="jobOptions"
                item-value="id"
                item-title="title"

                :loading="loadingJobs"
                @click="fetchJobs"
                variant="outlined"
                label="شغل را انتخاب کنید"
                clearable
            >
              <template #prepend-inner>
                <v-btn
                    color="primary"
                    v-if="selectedJobs"
                    @click="onSubmit(selectedJobs)"
                    :disabled="!selectedJobs"
                >
                  ارسال
                </v-btn>
              </template>
            </v-autocomplete>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup lang="ts">
import {ref, shallowRef} from 'vue';
import {useRouter} from 'vue-router'; // 2
const {$axios} = useNuxtApp(); // دسترسی به نمونه Axios

const router = useRouter(); // 3
const selectedJobs = ref(null);
const jobOptions = ref([]);
const loadingJobs = ref(false);

const fetchJobs = async () => {
  loadingJobs.value = true;
  try {
    await $axios.get('occupations').then(res => {

      jobOptions.value = res.data.data
    }).catch(err => {
      console.error(err)
    })
  } catch (error) {
    console.error('Error fetching jobs:', error);
  } finally {
    loadingJobs.value = false;
  }
};

// تغییر تابع onSubmit
const onSubmit = async (jobId) => { // 4
  if (jobId) {
    console.log(2222);
    await router.push(`/jobdetails/${jobId}`); // 5
  }
};
const cards = shallowRef([
  {title: 'Search careers with key words.'},
  {title: 'Browse careers by industry.'},
  {title: 'Discover your interests.'},
])
</script>

<style scoped>
.card {
  margin-bottom: 20px;
}
</style>