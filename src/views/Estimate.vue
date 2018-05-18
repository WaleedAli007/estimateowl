<template>
    <div>
        <InternalTemplate />
        <div class="container" v-if="estimate">
            <main role="main" class="content pt-5 pb-0 mb-80">
                <h2>
                    {{estimate.title}}
                </h2>
                <div class="font-14 mb-3">
                    <p class="mb-1">{{estimate.summary}}.</p>
                </div>
                <div class="buttons mb-1 mb-sm-2">
                    <div class="d-block d-sm-inline-block mr-0 mr-sm-3">
                    <a @click="toggleModal" class="btn btn-sm btn-outline-primary">
                        Properties
                    </a>
                    </div>
                </div>
            </main>

            <footer class="footer">
                <div class="content py-0">
                    <div class="media mt-3">
                    <div class="media-body">
                        <div class="d-inline-block mr-3 mr-sm-5">
                        <p class="text-muted text-uppercase font-13 mb-0">Title MD5 (computed)</p>
                        <h3 class="text-success">1218e6bb5190d1b13be87f1899926641</h3>
                        </div>
                    </div>
                    </div>
                </div>
            </footer>
            <div v-if="showModal">
                <transition name="modal">
                    <div class="modal-mask">
                        <div class="modal-wrapper">
                            <div class="modal-dialog modal-lg" role="document">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <h4 class="modal-title">New estimate</h4>
                                        <button type="button" @click="toggleModal" class="close" aria-label="Close">
                                        <span aria-hidden="true">&times;</span>
                                        </button>
                                    </div>
                                    <EstimateForm :estimate="estimate" />
                                </div>
                            </div>
                        </div>
                    </div>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import InternalTemplate from '../components/internalTemplate'
import EstimateForm from '../components/estimateForm'
import { mapGetters } from 'vuex'
export default {
  components: {
    InternalTemplate,
    EstimateForm
  },
  data () {
    return {
      estimate: {}
    }
  },
  computed: {
    ...mapGetters([
      'estimates',
      'showModal'
    ])
  },
  mounted () {
    this.estimate = this.estimates.find(estimate => {return estimate.id === parseInt(this.$route.params.id)})
    console.log(this.estimate)
  },
  methods: {
    toggleModal () {
      this.$store.commit('TOGGLE_MODAL')
    }
  }
}
</script>

<style>

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, .5);
  display: table;
  transition: opacity .3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}
</style>

