<template>
  <div className="container">
    <div className="options-container">
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" />
      <div class="separator"></div>
      <nav class="nav">
        <RouterLink class="link" to="/">Home</RouterLink>
        <div class="separator"></div>
        <RouterLink class="link" to="/about">About</RouterLink>
      </nav>
    </div>
  </div>
</template>

<style scoped>
.container {
  background-color: #f6f8fa;
  padding: 0.8rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #f1f1f1;
}

.separator {
  height: 30px;
  background: gray;
  border-radius: 50px;
  padding: 1px;
}

.options-container {
  display: flex;
  align-items: center;
  gap: 2rem;
}

.nav {
  gap: 2rem;
  display: flex;
}

.link {
  font-weight: bold;
  color: #2c3e50;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
}

.logo {
  width: 40px;
}

@media (max-width: 480px) {
  .nav {
    gap: 1rem;
  }
}

@media (max-width: 320px) {
  .nav {
    gap: 0;
  }
}
</style>
