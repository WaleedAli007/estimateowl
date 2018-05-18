<template>
    <form action="#" method="post">
    <div class="modal-body">
        <div>
            <div class="form-group">
            <input type="text" id="inputTitle" v-model="estimate.title" class="form-control form-control-lg" placeholder="Title" value="" required>
            </div>
            <div class="form-group">
            <textarea id="inputSummary" v-model="estimate.summary" class="form-control textarea-expanding" placeholder="Summary" data-autoresize></textarea>
            </div>
            <div class="form-group">
            <div class="custom-control custom-checkbox d-inline-block">
                <input type="checkbox" class="custom-control-input" v-model="estimate.isTaskList" id="customCheck100" checked>
                <label class="custom-control-label" for="customCheck100">Task list</label>
            </div>
            </div>
            <div class="form-group">
            <div class="custom-control custom-checkbox d-inline-block">
                <input type="checkbox" class="custom-control-input" v-model="estimate.doTrackTime" id="customCheck101" checked>
                <label class="custom-control-label" for="customCheck101">Track time</label>
            </div>
            </div>
        </div>
    </div>

    <div class="modal-footer">
        <button type="button" @click="toggleModal" class="btn btn-lg btn-default" >Cancel</button>
        <button type="button" @click="saveEstimate" class="btn btn-lg btn-success" >Save</button>
    </div>
    </form>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  props: {
      estimate: {
        type: Object,
        default: () => ({
          id: null,
          title: '',
          summary: '',
          isTaskList: true,
          doTrackTime: true,
          ts_created: new Date(),
          ts_updated: new Date()
        })
      },
      editingMode: {
        type: Boolean,
        default: false
      }
  },
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters([
      'estimates'
    ])
  },
  methods: {
    toggleModal () {
      this.$store.commit('TOGGLE_MODAL')
    },
    saveEstimate () {
      this.estimate.ts_updated = new Date()
      this.estimate.id = this.estimates.length + 1
      if (this.editingMode) {
        this.$store.commit('SAVE_ESTIMATE', this.estimate)            
      } else {
        this.$store.commit('ADD_NEW_ESTIMATE', this.estimate)
      }
      this.$store.commit('TOGGLE_MODAL')
    }
  }
}
</script>
