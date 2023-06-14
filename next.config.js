const withOptimizedImages = require("next-optimized-images");
module.exports = withOptimizedImages({
    /* config for next-optimized-images */

    // your config for other plugins or the general next.js here..
    async redirects() {
        return [
            {
                "source": "/ucbad",
                "destination": "https://ucbad.com/",
                "permanent": true,
            },
            {
                "source": "/ijepem",
                "destination": "https://ijepem.com/",
                "permanent": true
            },
            {
                "source": "/editorial-board",
                "destination": "/editorial-team",
                "permanent": true
            },
            {
                "source": "/about/editorialTeam",
                "destination": "/editorial-team",
                "permanent": true
            },
            {
                "source": "/publisher",
                "destination": "/contact",
                "permanent": true
            },
            {
                "source": "/iletisim",
                "destination": "/contact",
                "permanent": true
            },
            {
                "source": "/about/contact",
                "destination": "/contact",
                "permanent": true
            },
            {
                "source": "/about",
                "destination": "/editorial-team",
                "permanent": true
            },
            {
                "source": "/online-submission",
                "destination": "https://dergipark.org.tr/tr/journal/2662/submission/step/manuscript/new",
                "permanent": true
            },
            {
                "source": "/online-gonderi",
                "destination": "https://dergipark.org.tr/tr/journal/2662/submission/step/manuscript/new",
                "permanent": true
            },
            {
                "source": "/about/submissions",
                "destination": "https://dergipark.org.tr/tr/journal/2662/submission/step/manuscript/new",
                "permanent": true
            },
            {
                "source": "/volumes",
                "destination": "https://dergipark.org.tr/tr/pub/ucbad/issue/38456",
                "permanent": true
            },
            {
                "source": "/volume",
                "destination": "https://dergipark.org.tr/tr/pub/ucbad/issue/38456",
                "permanent": true
            },
            {
                "source": "/ciltler",
                "destination": "https://dergipark.org.tr/tr/pub/ucbad/issue/38456",
                "permanent": true
            },
            {
                "source": "/sayilar",
                "destination": "https://dergipark.org.tr/tr/pub/ucbad/issue/38456",
                "permanent": true
            },
            {
                "source": "/issue/archive",
                "destination": "https://dergipark.org.tr/tr/pub/ucbad/issue/38456",
                "permanent": true
            },
            {
                "source": "/volume-1/issue-1",
                "destination": "https://dergipark.org.tr/tr/pub/ucbad/issue/38456",
                "permanent": true
            },
            {
                "source": "/volume-1/issue-1/article-1",
                "destination": "https://dergipark.org.tr/tr/pub/ucbad/issue/38456/445905",
                "permanent": true
            }
        ]
    },
    env: {
        ENDPOINT: 'https://api.ucbad.com',
        DOMAIN: 'https://ucbad.com',
    },
    trailingSlash: true,

});