<template>
  <footer>
    <!-- Left -->
    <div class="left">
      <p>© 2020</p>
      <a href="https://dubbsong.github.io" target="_blank">
        오많배
      </a>
    </div>

    <!-- Right -->
    <ul class="right">
      <!-- github -->
      <li>
        <a href="https://github.com/dubbsong" target="_blank">
          <b-icon icon="github" />
        </a>
      </li>

      <!-- omb -->
      <li>
        <a href="https://dubbsong.github.io" target="_blank">
          <img src="~/assets/img/omb.png" alt="omb img" width="20" />
        </a>
      </li>
    </ul>
  </footer>
</template>

<style lang="scss" scoped>
footer {
  background-color: #141414;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 0 5%;

  /* Left */
  .left {
    display: flex;
    align-items: center;

    p {
      font-weight: bold;
      margin-right: 4px;
    }

    a {
      font-weight: bold;
      color: #fff;
    }
  }

  /* Right */
  .right {
    display: flex;
    align-items: center;

    li {
      margin-left: 8px;

      a {
        display: flex;
        align-items: center;

        .icon {
          color: #fff;
        }
      }
    }
  }
}
</style>
