require.config({

    paths: {
        angular: 'bower_components/angular/angular.min',
        'angular-animate': 'bower_components/angular-animate/angular-animate.min',
        'angular-aria': 'bower_components/angular-aria/angular-aria.min',
        'angular-bootstrap': 'bower_components/angular-bootstrap/ui-bootstrap-tpls',
        'angular-cookies': 'bower_components/angular-cookies/angular-cookies.min',
        'ckeditor-core':'bower_components/ckeditor/ckeditor',
        'ng-ckeditor': 'bower_components/ng-ckeditor/dist/ng-ckeditor.min',
        'angular-material': 'bower_components/angular-material/angular-material.min',
        'angular-material-icons': 'bower_components/angular-material-icons/angular-material-icons.min',
        'angular-messages': 'bower_components/angular-messages/angular-messages.min',
        'angular-sanitize': 'bower_components/angular-sanitize/angular-sanitize.min',
        'angular-ui-router': 'bower_components/angular-ui-router/release/angular-ui-router.min',
        jquery: 'bower_components/jquery/dist/jquery.min',
        lodash: 'bower_components/lodash/lodash'
    },

    shim: {
        angular: {
            exports: 'angular',
            deps: [
                'jquery',
                'lodash'
            ]
        },
        'angular-aria': [
            'angular'
        ],
        'angular-animate': [
            'angular'
        ],
        'angular-bootstrap': [
            'angular'
        ],
        'angular-cookies': [
            'angular'
        ],
        'ckeditor-core': {
            deps: [
                'jquery'
            ],
            exports: 'CKEDITOR'
        },
        'ng-ckeditor': [
            'angular',
            'jquery',
            'ckeditor-core'
        ],
        'angular-sanitize': [
            'angular'
        ],
        'angular-messages': [
            'angular'
        ],
        'angular-ui-router': [
            'angular'
        ],
        'angular-material': {
             deps: ['angular-aria', 'angular-animate', 'angular-messages']
        },
        'angular-material-icons': [
            'angular'
        ],
        jquery: {
            exports: 'jQuery'
        },
        lodash: {
            exports: '_'
        }
    },

    // kick start application
    deps: ['bootstrap']
});
