<script>
    import { getParam } from "./utils.mjs";


    function login(username, password){
        getParam('redirect');
    }

    function getInfo() {
        const username = document.querySelector('input[name="username"]').value;
        const password = document.querySelector('input[name="password"]').value;
        login(username, password)
    }

    

</script>

<main>
    <h1>Login</h1>
    <form>
        <input name="username" type="text" placeholder="username" />
        <input name="password" type="password" placeholder="password" />
        <button on:click={getInfo} type="submit">Login</button>
    </form>
    <a href="/register">Register</a>
</main>