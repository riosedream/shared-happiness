/**
 * Created by wangmengfei on 16-12-21.
 *动态数据标签和ejs模板类似 <%= %>
 */

module.exports = function(grunt) {
    grunt.initConfig({
        //读取package.json文件信息
        pkg:grunt.file.readJSON('package.json'),

        sass:{
            dist:{
                options:{
                    sourceMap: false,
                    style: 'expanded'
                },
                files:[{
                    expand:true,
                    cwd:'_sass',
                    src:['*.scss','*.sass'],
                    dest:'css',
                    ext:'.css'
                }]
            }
        },
        watch:{
            start:{
                files: ['_sass/*.scss'],
                tasks: ["sass"]
            }
        }

        //注解：
        //cwd: '', 指向的目录是相对的,全称Change Working Directory更改工作目录
        //src: ['**'], 指向源文件，**是一个通配符，用来匹配Grunt任何文件
        //dest: 'images', 用来输出结果任务
        //expand: true expand参数为true来启用动态扩展，涉及到多个文件处理需要开启
    });
    // 加载任务插件
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');


    // 默认被执行的任务列表。
    grunt.registerTask('default',['sass']);
};