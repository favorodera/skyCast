<template>
  <div class="global-map">
    <div class="description">
      <p>Explore global map of wind weather and ocean condition</p>
    </div>
    <a href="https://www.windy.com" target="_blank" rel="noopener noreferrer"
      ><button type="button">GET STARTED</button></a
    >
  </div>
</template>

<style scoped lang="scss">
@use '../../scss/index.scss';

.global-map {
  background: url('../../assets/images/global-map.jpeg') 40% #1b1b1d66;
  width: 25rem;
  height: 32.5rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  gap: 13.878rem;
}

.description {
  width: 24rem;
  height: 5.1875rem;
  border-radius: 0.9375rem;
  background-color: #d9d9d94d;
  box-shadow: 0px 4px 15px 5px #00000040;
  display: flex;
  align-items: center;
  justify-content: center;

  p {
    @include index.typography(1.5rem, 600, #060609, normal);
    text-align: center;
    width: 22.6875rem;
    height: 3.625rem;
  }
}

button {
  @include index.typography(1.5rem, 600, #0f0f11, normal);
  height: 5rem;
  width: 16.625rem;
  text-align: center;
  padding: 1.63rem 3rem;
  border: none;
  background-color: #d9d9d9;
  border-radius: 0.9375rem;
}

a:hover {
  button {
    background-color: #1b1b1dcb;
    color: #d9d9d9;
  }
}
</style>
