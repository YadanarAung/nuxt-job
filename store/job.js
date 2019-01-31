import Vue from "vue";
import axios from "axios";

export const state = () => ({
  jobs: [],
  jobCount:10
});

export const getters = {
  jobs (state) {
    return state.jobs;
  },
  jobCount (state) {
    return state.jobCount;
  }
};

export const mutations = {
  SET_JOBS(state, payload) {
    Vue.set(state, "jobs", payload);
  },
  DELETE_JOB(state, payload) {
    state.jobs = state.jobs.filter(function( obj ) {
      return obj.id !== payload.id;
    });
    
  }
};

export const actions = {
  async setJobs(context) {
    const { data } = await axios.get('http://localhost:8000/api/jobs');
    context.commit("SET_JOBS", data.data);
  }
};
