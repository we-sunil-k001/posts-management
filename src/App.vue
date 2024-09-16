<template>
  <div id="app">
    <!-- Navbar -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container-fluid">
        <!-- <a class="navbar-brand" href="#">Sunil Kumar</a> -->
              <router-link class="navbar-brand" to="/">Home</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <RouterLink to="/" class="nav-link" aria-current="page">Profile</RouterLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    <!-- Router View for Pages -->
    <main class="mt-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
// No JavaScript logic is needed here for now, since the main structure is handled by the router.
</script>

<style>
/* Add any global styles here */

</style>
