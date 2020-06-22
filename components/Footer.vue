<template>
  <footer>
    <div class="container">
      <!-- Left -->
      <div class="left">
        <p>© 2020</p>
        <a href="https://dubbsong.github.io" target="_blank">
          ㅇㅁㅂ
        </a>
      </div>

      <!-- Right -->
      <ul class="right">
        <li>
          <a href="https://github.com/dubbsong" target="_blank">
            <b-icon icon="github" />
          </a>
        </li>
        <li>
          <a href="https://dubbsong.github.io" target="_blank">
            <img src="~/assets/img/omb.png" alt="omb img" width="20" />
          </a>
        </li>
      </ul>
    </div>
  </footer>
</template>

<style lang="scss">
footer {
  background-color: #141414;
  color: #fff;
  display: flex;
  align-items: center;
  padding: 0 5%;

  .container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 72px;

    /* Left */
    .left {
      display: flex;

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

      li {
        display: flex;
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
}
</style>
