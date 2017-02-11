define([
    'angular',
    'angular-sanitize',
    'angular-material-icons',
    'angular-bootstrap',
    './js/post/index',
    './js/collection/index',
    './js/user/index',
    './js/utils/index'
], function (angular) {
    'use strict';
    return angular.module('memory.app', [
        'ngSanitize',
        'ngMdIcons',
        'ui.bootstrap',
        'memory.collection',
        'memory.post',
        'memory.user',
        'memory.utils'
    ]);
});