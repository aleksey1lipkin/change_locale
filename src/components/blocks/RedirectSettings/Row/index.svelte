<style>
  .wrapper {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
  }
  .button {
    color: red;
  }
  .input {
    width: 100px;
  }
</style>

<script>
  import { WiredInput } from 'wired-input';
  import { WiredIconButton } from "wired-icon-button";
</script>

<div class='wrapper'>
  <wired-input class='input' placeholder='from' />
  <wired-input class='input' placeholder='to' />
  <wired-icon-button class='button'>x</wired-icon-button>
</div>
