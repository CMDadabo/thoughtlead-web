module.exports = {
    scripts:
    {
        src: [
            "source/app/app.js",
            "source/app/*.js",
            "source/modules/*/*[^(Ctrl|Srvc|Fltr|Drctv)].js",
            "source/modules/*/*.js"
        ],
        dest: "build/project.js"
    },
    angular:
    {
        src: [
            "source/components/angular/angular.min.js",
            "source/components/angular-mocks/angular-mocks.js",
            "source/components/angular-route/angular-route.min.js",
            "source/components/angular-touch/angular-touch.min.js",
            "source/components/angular-sanitize/angular-sanitize.min.js",
            "source/components/angular-animate/angular-animate.min.js"
        ],
        dest: "build/angular.js"
    },
    components:
    {
        files: {
            "build/components.js": [
                "source/components/jquery/dist/jquery.min.js",
                "source/components/jquery-cookie/jquery.cookie.js",
                "source/components/at-table/dist/angular-table.js",
                "source/components/ngDialog/js/ngDialog.min.js",
                "source/components/angular-ui-utils/mask.min.js",
                "source/components/angular-local-storage/dist/angular-local-storage.min.js",
                "source/components/ngInfiniteScroll/build/ng-infinite-scroll.min.js",
                "source/components/vokal-ng-infinite-scroll-api-decorator/source/infinite-scroll.js",
                "source/components/toastr/toastr.min.js",
                "source/components/humps/humps.js",
                "source/components/vokal-ng-api/dist/vokal-ng-api.min.js",
                "source/components/vokal-ng-lib/directives/*.js",
                "source/components/vokal-ng-lib/services/*.js",
                "source/components/html5shiv/dist/html5shiv.min.js"
            ],
            "build/components.css": [
                "source/components/ngDialog/css/ngDialog.min.css",
                "source/components/ngDialog/css/ngDialog-theme-default.css",
                "source/components/toastr/toastr.min.css"
            ]
        }
    }
};
