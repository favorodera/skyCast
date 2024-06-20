<template>
  <header>
    <div class="location-container">
      <div class="location-pin-icon">
        <img src="../../assets/icons/location-pin.svg" alt="location-pin" loading="lazy" />
      </div>
      <p class="location">Dhaka,Bangladesh</p>
    </div>

    <form method="get">
      <div class="search-icon">
        <img src="../../assets/icons/search.svg" alt="search" loading="lazy" />
      </div>
      <input type="search" name="location-input" id="location-input" placeholder="Search City" />
    </form>

    <a
      href="https://github.com/favorodera/skyCast"
      target="_blank"
      rel="noopener noreferrer"
      class="github-icon"
    >
      <img src="../../assets/icons/github.svg" alt="github" />
    </a>
  </header>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

header {
  height: 3.125rem;
  max-width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
}

.location-container {
  max-width: 11.625rem;
  height: 1.5rem;
  display: flex;
  gap: 0.62rem;
  flex: 1 1 11.625rem;
  align-items: center;
  justify-content: center;
}

.location-pin-icon {
  @include index.mediaContainers(1.5rem, 1.5rem);
}

.location {
  @include index.typography(1rem, 400, #fefefe, normal);
}

form {
  max-width: 30.75rem;
  height: 2.875rem;
  background-color: #1e1e1e;
  border-radius: 0.625rem;
  display: flex;
  align-items: center;
  gap: 0.62rem;
  padding: 0rem 0rem 0rem 1.81rem;
  flex: 1 1 30.75rem;
}

.search-icon {
  @include index.mediaContainers(1.5rem, 1.5rem);
}

input {
  height: 100%;
  width: 100%;
  background: none;
  border: none;
  padding: 0.69rem 0rem 0.69rem 0rem;
  @include index.typography(0.875rem, 400, #ededed, normal);
}

input::placeholder {
  @include index.typography(0.875rem, 400, #ededed, normal);
}

.github-icon {
  @include index.mediaContainers(2.5rem, 2.5rem);
  border-radius: 2.5rem;
}
</style>
