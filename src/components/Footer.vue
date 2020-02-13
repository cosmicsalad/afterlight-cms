<template>
    <footer class="footer">
        <div class="container">

            <div class="footer-menu">
                <div class="footer-group">
                    <div class="heading">Community</div>
                    <g-link class="nav__link" to="/tutorials">Tutorials</g-link>
                    <g-link class="nav__link" to="/support">Support</g-link>
                </div>
                <div class="footer-group">
                    <div class="heading">Legal</div>
                    <g-link class="nav__link" to="/privacy">Privacy</g-link>
                    <g-link class="nav__link" to="/terms">Terms</g-link>
                </div>
                <div class="footer-group">
                    <div class="heading">Social</div>
                    <g-link class="nav__link" to="https://instagram.com/afterlight">Instagram</g-link>
                    <g-link class="nav__link" to="https://twitter.com/afterlightapp">Twitter</g-link>
                </div>
            </div>

            <span v-html="settings.footer" />

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
    align-items: flex-start;
    justify-content: space-between;
    height: 100%;

}

.footer-menu {
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.footer-group {
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: space-between;
    margin-right: 4rem;
}

.footer-group > * {
    font-size: 0.75rem;
    font-weight: 600;
    text-decoration: none;
    text-align: left;
    padding-bottom: 2px;
    margin-bottom: 5px;
    transition: color 0.25s;
    color: #888;
}
.footer-group > *:last-of-type {
    margin: 0;
}
.footer-group > *:hover {
    color: #fff;
}
.footer-group > .active {
    color: #fff;
}
.footer-group .heading {
    color: #444;
    /* border-bottom: 1px solid #555; */
    width: 100%;
    letter-spacing: 1px;
    text-transform: uppercase;
    font-size: 0.6rem;
    margin-bottom: 1rem;
    padding-bottom: 0.5rem;
}
</style>
