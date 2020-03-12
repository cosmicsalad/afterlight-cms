<template>
    <header class="header" :class="{sticky: $route.path === '/' || $route.path.includes('/tutorials/')}">
        <div class="container">
            <div class="left">
                <g-link :to="{ name: 'home' }" class="home-link">
                    <img 
                        src="../../static/header-logo.png"
                        :alt="settings.site_name" 
                        class="logo"
                    />
                </g-link>
            </div>
            <nav class="nav right">
                <g-link class="nav__link" to="/tutorials">Tutorials</g-link>
                <g-link class="nav__link" to="/support">Support</g-link>
                <g-link class="nav__link" to="/company">Company</g-link>
                <button class="bg-black hover:bg-purple-800 text-white font-bold pt-3 pb-1 px-4 rounded">Download</button>
            </nav>
        </div>
    </header>
</template>

<script>
export default {
  data() {
    return {
        logo: require("../../static/logo.png"),
        settings: require("../../data/theme.json")
    }
  }
}
</script>

<style scoped>
.header {
    position: relative;
    height: 6rem;
    z-index: 10;
}
.header.sticky {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
}
.header > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
    max-width: 100%;
    padding: 0 3rem;
    margin: 0;
}
.home-link {
    text-decoration: none;
}
.logo {
    max-height: 3.5rem;
}
.site-name {
    font-size: 0.9rem;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-decoration: none;
    text-transform: uppercase;   
}
.nav > * {
    position: relative;
    font-size: 1rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 2rem;
    padding-bottom: 4px;
    line-height: 50px;
    height: 50px;
    /* border-bottom: 1px solid;
    border-color: transparent; */
    transition: border 0.15s;
}
.nav button {
    border: 0 !important;
    line-height: 1;
    text-transform: uppercase;
}
.nav button:hover {
    /* border: 0; */
}
.nav > *:last-child {
    margin-right: 0;
}
.nav > *:hover {
    border-color: inherit;
}
.nav > .active {
    border-color: inherit;
}

.nav__link:after {
    content: "";
    height: 2px;
    position: absolute;
    bottom: 0px;
    left: 0;
    width: calc(100% - 2px);
    background-color:
    hsla(0,0%,95.7%,1.0);
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    transition: -webkit-transform .2s ease-in-out;
    transition: transform .2s ease-in-out;
    transition: transform .2s ease-in-out,-webkit-transform .2s ease-in-out;
    -webkit-transform-origin: 100% 50%;
    transform-origin: 100% 50%;
}
.nav__link:hover::after {
    transform: scaleX(1);
    transform-origin: 0 50%;
}
</style>
