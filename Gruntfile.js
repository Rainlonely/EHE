module.exports = function (grunt) {
    // 自动加载grunt任务
    require('load-grunt-tasks')(grunt);
    // 显示任务执行时间，用户优化构建时间
    require('time-grunt')(grunt);
    // grunt 初始化配置
    grunt.initConfig({
        // 项目目录配置
        web: {
            // 源代码目录名
            app: require('./bower.json').appPath || 'app',
            // build目录名
            dist: 'dist'
        },
        // 清除项目目录，删除build生成
        clean: {
            dist: {
                files: [
                    {
                        dot: true,
                        src: [
                            '.tmp',
                            '<%= web.dist %>/*',
                            '!<%= web.dist %>/.git*'
                        ]
                    }
                ]
            }
        },

        // 自动为css文件添加不同浏览器的前缀
        autoprefixer: {
            options: {
                browsers: ['last 1 version']
            },
            dist: {
                files: [{
                    expand: true,
                    cwd: '.tmp/styles/',
                    src: '{,*/}*.css',
                    dest: '.tmp/styles/'
                }]
            }
        },


        // less构建，生成css文件
        less: {
            development: {
                options: {
                    compress: false,
                    yuicompress: false
                },
                files: {
                    //target.css file: source.less file
                    ".tmp/styles/bootstrap.css": "<%= web.app %>/assets/less/bootstrap.less",
                    ".tmp/styles/variables.css": "<%= web.app %>/assets/less/variables.less",
                    ".tmp/styles/fontawesome.css": "./bower_components/fontawesome/less/font-awesome.less",
                    ".tmp/styles/global.css": "<%= web.app %>/assets/less/global.less",
                    ".tmp/styles/index.css": "<%= web.app %>/assets/less/index.less",
                    ".tmp/styles/content.grid.css": "<%= web.app %>/assets/less/content.grid.less"
                }
            }
        },

        // 压缩css文件
        cssmin: {
            minify: {
                expand: true,
                cwd: '.tmp/styles/',
                src: ['*.css', '!*.min.css'],
                dest: '<%= web.dist %>/resources/css/',
                ext: '.min.css'
            }
        },

        // 将build目录下js文件压缩
        uglify: {
            options: {
                mangle: false,
                compress: false,
                beautify: true
            },
            default: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= web.dist %>/assets/js',
                        src: '*.js',
                        dest: '<%= web.dist %>/resources/js'
                    }
                ]
            }
        },


        // 开发目录images下图片压缩并拷贝到build目录
        imagemin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= web.app %>/assets/images',
                        src: '{,**/}*.{png,jpg,jpeg,gif}',
                        dest: '<%= web.dist %>/resources/images'
                    }
                ]
            }
        },

        // svg文件压缩
        svgmin: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= web.app %>/images',
                        src: '{,*/}*.svg',
                        dest: '<%= web.dist %>/resources/images'
                    }
                ]
            }
        },


        // html文件压缩
        htmlmin: {
            dist: {
                options: {
                    collapseWhitespace: true,
                    collapseBooleanAttributes: true,
                    removeComments: true,
                    removeCommentsFromCDATA: true,
                    removeOptionalTags: true
                },
                files: [
                    {
                        expand: true,
                        cwd: '<%= web.dist %>',
                        src: ['*.html', 'views/{,**/}*.html'],
                        dest: '<%= web.dist %>'
                    }
                ]
            }
        },

        // 拷贝任务文件拷贝到build目录
        copy: {
            dist: {
                files: [
                    {
                        expand: true,
                        cwd: '<%= web.app %>/assets/js',
                        dest: '<%= web.dist %>/resources/js',
                        src: ['assets/js/**/*.js']
                    },
                    {
                        expand: true,
                        cwd: '<%= web.app %>/assets/fonts',
                        dest: '<%= web.dist %>/resources/fonts',
                        src: ['assets/fonts/*' ]
                    },
                    // 拷贝bootstrap字体到build目录
                    {
                        expand: true,
                        cwd: 'bower_components/fontawesome/fonts',
                        src: ['*.*'],
                        dest: '<%= web.dist %>/resources/fonts'
                    },
                    // 拷贝bootstrap字体到build目录
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/fonts',
                        src: ['*.*'],
                        dest: '<%= web.dist %>/resources/fonts'
                    },
                    // 拷贝jquery js到build目录
                    {
                        expand: true,
                        cwd: 'bower_components/jquery/dist',
                        src: ['jquery.*'],
                        dest: '<%= web.dist %>/resources/js'
                    },
                    // 拷贝bootstrap js到build目录
                    {
                        expand: true,
                        cwd: 'bower_components/bootstrap/dist/js',
                        src: ['bootstrap.min.js'],
                        dest: '<%= web.dist %>/resources/js'
                    },
                    {
                        expand: true,
                        cwd: 'bower_components/isotope/dist',
                        src: ['isotope.pkgd.min.js'],
                        dest: '<%= web.dist %>/resources/js'  
                    },
                    {
                        expand: true,
                        cwd: 'app/assets/js',
                        src: ['jquery.booklet.latest.min.js'],
                        dest: '<%= web.dist %>/resources/js'
                    },
                    {
                        expand: true,
                        cwd: 'app/assets/css',
                        src: ['jquery.booklet.latest.css'],
                        dest: '<%= web.dist %>/resources/css'
                    },
                    {
                        expand: true,
                        cwd: 'app/assets/js',
                        src: ['jquery.slider.min.js'],
                        dest: '<%= web.dist %>/resources/js'
                    },
                    {
                        expand: true,
                        cwd: 'app/assets/css',
                        src: ['jquery.slider.css'],
                        dest: '<%= web.dist %>/resources/css'
                    },
                    
                    // {
                    //     expand:true,
                    //     cwd: 'bower_components/jquery.easing/js',
                    //     src: ['jquery.easing.min.js'],
                    //     dest: '<%= web.dist %>/resources/js'
                    // },
                    // {
                    //     expand:true,
                    //     cwd: 'bower_components/jqueryui',
                    //     src: ['jquery-ui.min.js'],
                    //     dest: '<%= web.dist %>/resources/js'
                    // },
                    // {
                    //     expand:true,
                    //     cwd: 'bower_components/masonry/dist',
                    //     src: ['masonry.pkgd.min.js'],
                    //     dest: '<%= web.dist %>/resources/js'
                    // },
                    {
                        expand:true,
                        cwd: 'bower_components/imagesloaded',
                        src: ['imagesloaded.pkgd.min.js'],
                        dest: '<%= web.dist %>/resources/js'
                    }

                ]
            },
            // 拷贝html文件从源文件目录到build目录
            html : {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= web.app %>',
                        dest: '<%= web.dist %>',
                        src: [
                           '*.html',
                            'views/{,**/}*.html'
                        ]
                    }
                ]
            },
            // 拷贝js文件从源文件目录到build目录
            js: {
                files: [
                    {
                        expand: true,
                        dot: true,
                        cwd: '<%= web.app %>/assets/js',
                        dest: '<%= web.dist %>/resources/js',
                        src: [
                            '{,**/}*.js'
                        ]
                    }
                ]
            },
            // 拷贝样式文件从源文件目录到build目录
            styles: {
                expand: true,
                cwd: '<%= web.app %>/assets/css',
                dest: '.tmp/styles',
                src: '{,*/}*.css'
            },
            stylesbuild: {
                expand: true,
                cwd: '.tmp/styles/',
                src: ['*.css', '!*.min.css'],
                dest: '<%= web.dist %>/resources/css/',
                ext: '.min.css'
            },
            images: {
                expand: true,
                cwd: '<%= web.app %>/assets/images',
                src: '{,**/}*.{png,jpg,jpeg,gif,svg}',
                dest: '<%= web.dist %>/resources/images'
            }
        },


        // build时并行运行任务
        concurrent: {
            dist: [
                'copy:js',
                'copy:styles',
                'copy:images'
                //'imagemin',
                //'svgmin'
            ]
        },

        browserSync: {
            dev: {
                bsFiles: {
                    src : ['<%= web.dist %>/{,**/}*.css', '<%= web.dist %>/{,**/}*.html']
                },
                options: {
                    watchTask: true,
                    server: {
                        baseDir: "dist",
                        directory: true
                    },
                    startPath: "views/index.html"
                }
            }
        },

        // 监听文件的变更，自动执行任务
        watch: {
            // 如果源文件目录less文件变更，自动执行css生成，添加浏览器前缀，压缩任务
            styles: {
               files: ['<%= web.app %>/assets/less/{,**/}*.less'],
                tasks: ['less', 'autoprefixer', 'copy:stylesbuild'],
                options: {
                    nospawn: true
                }
            },
            html :{
                expand: true,
                files: ['<%= web.app %>/views/{,**/}*.html'],
                //tasks: ['copy:html', 'htmlmin']
                tasks: ['copy:html']
            },
            js :{
                files: ['<%= web.app %>/assets/js/{,**/}*.js'],
                tasks: ['copy:js', 'uglify']
            },
            image :{
                files: ['<%= web.app %>/assets/images/{,**/}*.png','<%= web.app %>/assets/images/{,**/}*.jpg'],
                tasks: ['copy:images']
            }
        }
    });

    // 注册build组任务
    grunt.registerTask('build', [
        'clean:dist',
        'concurrent:dist',
        'less',
        //'autoprefixer',
        'copy:dist',
        'copy:html',
        'copy:js',
        'copy:styles',
        // 'uglify',
        'cssmin',
        // 'htmlmin'
    ]);

    // 注册default任务
 grunt.registerTask('default', ['browserSync', 'watch']);

//    grunt.registerTask('default', ['watch']);
};