//Gruntfile
module.exports = function(grunt) {
    //Initializing the configuration object
    grunt.initConfig({
        less: {
            development: {
                options: {
                    compress: false
                },
                files: {
                    "tmpl_pason/css/template.css":"tmpl_pason/less/template.less"
                }
            }
        },
        watch: {
            js_frontend: {
                files: [
                    'media/jui/js/jquery.js',
                    'media/jui/js/html5.js',
                ],
                tasks: ['concat']
            },
            less: {
                files: ['templates/tmpl_pason/less/*.less'],  //watched files
                tasks: ['less'],                          //tasks to run
                options: {
                    // livereload: true                        //reloads the browser
                }
            }
        },
        concat: {
            options: {
                separator: ';'
            },
            js_frontend: {
                src: [
                    'media/jui/js/jquery.js',
                    'media/jui/js/html5.js',
                ],
                dest: 'templates/tmpl_restonic/js/frontend.js'
            },
            home: {
                src: [
                    'templates/tmpl_restonic/js/jquery.flexslider.js',
                    'templates/tmpl_restonic/js/main.js',
                ],
                dest: 'templates/tmpl_restonic/js/home.js'
            }
        },
        uglify: {
            options: {
                mangle: false  // Use if you want the names of your functions and variables unchanged
            },
            frontend: {
                files: {
                    'media/pinit/restonicpins.prod.js': 'media/pinit/restonicpins.js'
                }
            }
        },
        compress: {
            main: {
                options: {
                    archive: 'companytmpl.zip'
                },
                files: [
                    {expand: true, cwd: 'templates/companytmpl/', src: ['**'], dest: 'companytmpl/'}
                ]
            }
        }

    });
    // Plugin loading
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-less');
    // grunt.loadNpmTasks('grunt-contrib-compress');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    // Task definition
    grunt.registerTask('default', ['watch']);
};