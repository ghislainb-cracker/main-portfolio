import { useEffect } from "react";

const MIN_VISIBLE_MS = 700;
const MAX_WAIT_MS = 8000;

function hideLoader() {
    const loader = document.getElementById("app-loader");
    document.documentElement.classList.add("app-loaded");

    if (!loader || loader.classList.contains("is-hidden")) return;

    loader.classList.add("is-hidden");
    loader.setAttribute("aria-busy", "false");

    window.setTimeout(() => {
        loader.remove();
    }, 500);
}

export default function PageLoader() {
    useEffect(() => {
        const startedAt = Date.now();
        let finished = false;

        const finish = () => {
            if (finished) return;
            finished = true;

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
            window.clearTimeout(timeoutId);
        };
    }, []);

    return null;
}
