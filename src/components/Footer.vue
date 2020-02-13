<template>
    <footer class="footer">
        <div class="container">
            <div class="right">
                <span v-html="settings.footer" />
            </div>
            <div class="footer-menu">
                <g-link class="nav__link" to="https://instagram.com/afterlight">Instagram</g-link>
                <g-link class="nav__link" to="https://twitter.com/afterlightapp">Twitter</g-link>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            settings: require("../../data/theme.json")
        }
    }
}
</script>

<style scoped>
.footer {
    font-size: 0.8rem;
    padding: 6rem 0;
}
.footer > .container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    height: 100%;
}

.footer-menu > * {
    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    margin-top: 4px;
    margin-right: 2rem;
    padding-bottom: 4px;
    border-bottom: 1px solid;
    border-color: transparent;
    transition: border 0.15s;
}
.footer-menu > *:last-of-type {
    margin: 0;
}
.footer-menu > *:hover {
    border-color: inherit;
}
.footer-menu > .active {
    border-color: inherit;
}
</style>
