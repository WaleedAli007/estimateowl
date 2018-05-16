<template>
  <div>
      <nav class="navbar navbar-expand-md navbar-light bg-metal navbar-toggleable-md">
            <a class="navbar-brand" href="dashboard.html">
                <img src="../assets/EstimateOwl_icon.png" id="logo-icon" alt="Owl">&nbsp;
                EstimateOwl
            </a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navlinks-container" aria-controls="navlinks-container" aria-expanded="false" aria-label="Toggle navigation">
                <i class="material-icons">menu</i>
            </button>
            <div class="collapse navbar-collapse" id="navlinks-container">
                <ul class="navbar-nav ml-auto">
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Help</a>
                </li>
                <li class="nav-item d-none d-md-block">
                    <a class="nav-link" href="#">Notifications <small><sup><span class="badge badge-success">1</span></sup></small></a>
                </li>
                <li class="nav-item dropdown d-none d-md-block">
                    <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Super User
                    </a>
                    <div class="dropdown-menu dropdown-menu-right mt-1" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="dashboard.html">Home</a>
                    <a class="dropdown-item" href="#">Account</a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="login.html">Sign out</a>
                    </div>
                </li>
                <li class="nav-item my-1 d-md-none">
                    <div class="d-block" aria-labelledby="navbarDropdownMenuLink">
                    <a class="dropdown-item" href="dashboard.html">Dashboard</a>
                    <a class="dropdown-item" href="#">Notifications <small><sup><span class="badge badge-success">1</span></sup></small></a>
                    <a class="dropdown-item" href="#">My Account</a>
                    <a class="dropdown-item" href="#">Help</a>
                    <a class="dropdown-item" href="login.html">Sign out</a>
                    </div>
                </li>
                </ul>
            </div>
            </nav>
            <!-- Navigation End -->
            <!-- Content Start -->
            <main role="main" class="content pb-0 mb-80">
            <h2>
                Dashboard
            </h2>

            <div class="form-group mb-2">
                <input type="text" id="inputSearch" class="form-control form-control-lg" placeholder="Search" autofocus>
            </div>

            <div class="dd-handle">
                <div class="media">
                <a href="estimate.html">
                    <img class="mr-3" style="width: 64px;" src="../assets/if_icon-45-note-list_314233.png">
                </a>
                <div class="media-body ellipsis">
                    <h4 class="card-title"><a href="estimate.html">Estimate 1</a></h4>
                    <p class="card-text font-14 mb-2">Just a short _summary_ of this estimate. Example of multiple paragraphs.</p>
                    <p class="card-text text-muted font-12">Last updated 3 mins ago</p>
                </div>
                </div>
            </div>

            <div class="dd-handle">
                <div class="media">
                <a href="estimate.html">
                    <img class="mr-3" style="width: 64px;" src="../assets/if_icon-45-note-list_314233.png">
                </a>
                <div class="media-body ellipsis">
                    <h4 class="card-title"><a href="estimate.html">Estimate 2</a></h4>
                    <p class="card-text text-muted font-12">Last updated 30 mins ago</p>
                </div>
                </div>
            </div>

            <div class="dd-handle">
                <div class="media">
                <a href="estimate.html">
                    <img class="mr-3" style="width: 64px;" src="../assets/if_icon-45-note-list_314233.png">
                </a>
                <div class="media-body ellipsis">
                    <h4 class="card-title"><a href="estimate.html">Estimate 3</a></h4>
                    <p class="card-text text-muted font-12">Last updated 2 days ago</p>
                </div>
                </div>
            </div>

            </main>

            <footer class="footer bg-transparent">
            <div class="content py-0">
                <div class="media mt-3">
                <div class="media-body">
                </div>
                <a href="#" class="btn btn-lg btn-primary" style="padding: 0.5rem 0.83rem; z-index: 1000;" data-toggle="modal" data-target="#newEstimateModal" data-backdrop="static">
                    <i class="material-icons align-top" style="padding-top: 5px;">add</i>
                </a>
                </div>
            </div>
            </footer>

            <div class="modal" id="newEstimateModal">
            <div class="modal-dialog modal-lg" role="document">
                <div class="modal-content">
                <div class="modal-header">
                    <h4 class="modal-title">New estimate</h4>
                    <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <form action="#" method="post">
                    <div class="modal-body">
                    <div>
                        <div class="form-group">
                        <input type="text" id="inputTitle" class="form-control form-control-lg" placeholder="Title" value="" required>
                        </div>
                        <div class="form-group">
                        <textarea id="inputSummary" class="form-control textarea-expanding" placeholder="Summary" data-autoresize></textarea>
                        </div>
                        <div class="form-group">
                        <div class="custom-control custom-checkbox d-inline-block">
                            <input type="checkbox" class="custom-control-input" id="customCheck100" checked>
                            <label class="custom-control-label" for="customCheck100">Task list</label>
                        </div>
                        </div>
                        <div class="form-group">
                        <div class="custom-control custom-checkbox d-inline-block">
                            <input type="checkbox" class="custom-control-input" id="customCheck101" checked>
                            <label class="custom-control-label" for="customCheck101">Track time</label>
                        </div>
                        </div>
                    </div>
                    </div>

                    <div class="modal-footer">
                    <button type="button" class="btn btn-lg btn-default" data-dismiss="modal">Cancel</button>
                    <button type="button" class="btn btn-lg btn-success" data-dismiss="modal">Save</button>
                    </div>
                </form>
                </div>
            </div>
            </div>
  </div>
</template>

<script>
export default {
  name: 'dashboard',
  data () {
    return {
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

</style>
