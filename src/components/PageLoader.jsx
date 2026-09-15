import { useEffect } from "react";

const MIN_VISIBLE_MS = 1500;
const MAX_WAIT_MS = 8000;

function hideLoader() {
    const loader = document.getElementById("app-loader");
    const progress = document.getElementById("loader-progress");
    document.documentElement.classList.add("app-loaded");

    if (!loader || loader.classList.contains("is-hidden")) return;

    if (progress) progress.style.width = "100%";
    loader.classList.add("is-complete");

    window.setTimeout(() => {
        loader.classList.add("is-hidden");
        loader.setAttribute("aria-busy", "false");
        window.setTimeout(() => loader.remove(), 500);
    }, 420);
}

export default function PageLoader() {
    useEffect(() => {
        const startedAt = Date.now();
        const progress = document.getElementById("loader-progress");
        let finished = false;
        let current = 8;

        const tick = window.setInterval(() => {
            current = Math.min(current + Math.random() * 10, 88);
            if (progress) progress.style.width = `${current}%`;
        }, 180);

        const finish = () => {
            if (finished) return;
            finished = true;
            window.clearInterval(tick);

            const elapsed = Date.now() - startedAt;
            const remaining = Math.max(0, MIN_VISIBLE_MS - elapsed);
            window.setTimeout(hideLoader, remaining);
        };

        if (document.readyState === "complete") {
            finish();
        } else {
            window.addEventListener("load", finish, { once: true });
        }

        const timeoutId = window.setTimeout(finish, MAX_WAIT_MS);

        return () => {
            window.removeEventListener("load", finish);
            window.clearInterval(tick);
            window.clearTimeout(timeoutId);
        };
    }, []);

    return null;
}
