<template>
  <div>
    <InternalTemplate />
    <!-- Navigation End -->
    <!-- Content Start -->
    <main role="main" class="content pb-0 mb-80">
        <h2>
            Dashboard
        </h2>

        <div class="form-group mb-2">
            <input type="text" id="inputSearch" class="form-control form-control-lg" placeholder="Search" autofocus>
        </div>
        <template v-for="estimate in estimates">
            <div class="dd-handle" :key="estimate.id">
                <div class="media">
                <router-link :to="'/estimate/' + estimate.id">
                    <img class="mr-3" style="width: 64px;" src="../assets/if_icon-45-note-list_314233.png">
                </router-link>
                <div class="media-body ellipsis">
                    <h4 class="card-title"><router-link :to="'/estimate/' + estimate.id">{{estimate.title}}</router-link></h4>
                    <p class="card-text font-14 mb-2">{{estimate.summary}}</p>
                    <p class="card-text text-muted font-12">Last updated at {{estimate.ts_updated}}</p>
                </div>
                </div>
            </div>
        </template>
    </main>

    <footer class="footer bg-transparent">
        <div class="content py-0">
            <div class="media mt-3">
            <div class="media-body">
            </div>
            <a @click="toggleModal" class="btn btn-lg btn-primary" style="padding: 0.5rem 0.83rem; z-index: 1000;">
                <i class="material-icons align-top" style="padding-top: 5px;">add</i>
            </a>
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
                            <EstimateForm />
                        </div>
                    </div>
                </div>
            </div>
        </transition>
     </div>
  </div>
</template>

<script>
import InternalTemplate from '../components/internalTemplate'
import EstimateForm from '../components/estimateForm'
import { mapGetters } from 'vuex'
export default {
  name: 'dashboard',
  data () {
    return {
    }
  },
  computed: {
      ...mapGetters([
        'estimates',
        'showModal'
      ])
  },
  components: {
    InternalTemplate,
    EstimateForm
  },
  methods: {
    toggleModal () {
      this.$store.commit('TOGGLE_MODAL')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
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
