document.addEventListener("DOMContentLoaded", function () {
    // Collapse navbar on mobile after selecting a link.
    if (window.jQuery) {
        window.jQuery(".navbar-nav .nav-link").on("click", function () {
            window.jQuery(".navbar-collapse").collapse("hide");
        });
    }

    var body = document.body;
    var themeToggleBtn = document.getElementById("themeToggleBtn");
    var storedTheme = localStorage.getItem("vr-theme");

    function setTheme(theme) {
        body.classList.toggle("theme-dark", theme === "dark");
        if (themeToggleBtn) {
            themeToggleBtn.textContent = theme === "dark" ? "Light Mode" : "Dark Mode";
        }
        localStorage.setItem("vr-theme", theme);
    }

    setTheme(storedTheme === "dark" ? "dark" : "light");

    if (themeToggleBtn) {
        themeToggleBtn.addEventListener("click", function () {
            var nextTheme = body.classList.contains("theme-dark") ? "light" : "dark";
            setTheme(nextTheme);
        });
    }

    var filterButtons = document.querySelectorAll("#productFilterToolbar .filter-chip");
    var productItems = document.querySelectorAll(".product-item");

    filterButtons.forEach(function (button) {
        button.addEventListener("click", function () {
            var selected = button.getAttribute("data-filter");

            filterButtons.forEach(function (btn) {
                btn.classList.remove("active");
            });
            button.classList.add("active");

            productItems.forEach(function (item) {
                var productType = item.getAttribute("data-product");
                var shouldShow = selected === "all" || selected === productType;
                item.classList.toggle("is-hidden", !shouldShow);
            });
        });
    });

    var blogSearchInput = document.getElementById("blogSearchInput");
    var blogItems = document.querySelectorAll(".blog-item");
    var blogSearchResult = document.getElementById("blogSearchResult");
    var blogEmptyState = document.getElementById("blogEmptyState");

    function updateBlogSearch() {
        var query = (blogSearchInput && blogSearchInput.value ? blogSearchInput.value : "").trim().toLowerCase();
        var visibleCount = 0;

        blogItems.forEach(function (item) {
            var text = item.textContent.toLowerCase();
            var matches = text.indexOf(query) !== -1;
            item.classList.toggle("d-none", !matches);
            if (matches) {
                visibleCount += 1;
            }
        });

        if (blogSearchResult) {
            blogSearchResult.textContent = visibleCount + (visibleCount === 1 ? " blog found" : " blogs found");
        }

        if (blogEmptyState) {
            blogEmptyState.classList.toggle("d-none", visibleCount !== 0);
        }
    }

    if (blogSearchInput) {
        blogSearchInput.addEventListener("input", updateBlogSearch);
        updateBlogSearch();
    }

    var backToTopBtn = document.getElementById("backToTopBtn");

    function toggleBackToTop() {
        if (!backToTopBtn) {
            return;
        }
        backToTopBtn.classList.toggle("show", window.scrollY > 500);
    }

    if (backToTopBtn) {
        backToTopBtn.addEventListener("click", function () {
            window.scrollTo({ top: 0, behavior: "smooth" });
        });
    }

    window.addEventListener("scroll", toggleBackToTop);
    toggleBackToTop();

    var revealSelectors = [
        ".product-card",
        ".vr-features-section-heading",
        ".vr-kit-section-heading",
        ".vr-kit-section .p-3",
        ".optics-and-controllers-section-image",
        ".optics-and-controllers-section-heading",
        ".shadow.mb-3",
        ".contact-us-section-heading"
    ];

    var revealTargets = document.querySelectorAll(revealSelectors.join(","));

    revealTargets.forEach(function (target) {
        target.classList.add("reveal-on-scroll");
    });

    var observer = new IntersectionObserver(
        function (entries, observerRef) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("revealed");
                    observerRef.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.15 }
    );

    revealTargets.forEach(function (target) {
        observer.observe(target);
    });
});
