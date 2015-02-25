/*!
 * Anole's Gruntfile
 * http://anole.jimubox.com
 * Copyright 2013-2015 Le Rong Duo Yuan (Beijing) technology Lid,.co.
 * Licensed under MIT ()
 */
module.exports = function(grunt) {
    'use strict';
    // Force use of Unix newlines
    grunt.util.linefeed = '\n';
    RegExp.quote = function(string) {
        return string.replace(/[-\\^$*+?.()|[\]{}]/g, '\\$&');
    };
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        banner: 
            '/*!\n' + ' * Anole v<%= pkg.version %> (<%= pkg.homepage %>)\n' + 
            ' * Copyright 2011-<%= grunt.template.today("yyyy") %> <%= pkg.author %>\n' + 
            ' */\n',
        stylus: {
            options: {
                'compress': false,
                'include css': true,
                'paths': ['stylus'],
                banner: '<%= banner %>'
            },
            compile: {
                files: {
                    'dist/css/anole.css': ['stylus/anole.styl']
                }
            }
        },
        watch: {
            scripts: {
                files: ['stylus/*.styl'],
                tasks: ['stylus']
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-stylus');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['stylus']);
}