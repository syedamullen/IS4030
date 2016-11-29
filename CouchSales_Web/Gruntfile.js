/* 
 Copyright (C) 2016 Syeda Mullen
 
 This program is free software: you can redistribute it and/or modify
 it under the terms of the GNU General Public License as published by
 the Free Software Foundation, either version 3 of the License, or
 (at your option) any later version.
 
 This program is distributed in the hope that it will be useful,
 but WITHOUT ANY WARRANTY; without even the implied warranty of
 MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 GNU General Public License for more details.
 
 You should have received a copy of the GNU General Public License
 along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


//require('load-grunt-tasks')(grunt);
module.exports = function (grunt) {
    // Project configuration.
    grunt.initConfig({
        tomcat_deploy: {
            host: 'localhost',
            login: 'developer',
            password: 'tomcat',
            path: '/CouchSales',
            port: 8080,
            dist: 'dist',
            deploy: '/manager/text/deploy',
            undeploy: '/manager/text/undeploy',
            war: "build/CouchSales.war"
        },
        war: {
            target: {
                options: {
                    war_dist_folder: 'build', /* Folder where to generate the WAR. */
                    war_name: 'CouchSales', /* The name fo the WAR file (.war will be the extension) */
                    webxml_welcome: 'index.html',
                    webxml_display_name: 'CouchSales',
                },
                files: [
                    {
                        expand: true,
                        cwd: 'public_html',
                        src: ['**'],
                        dest: ''
                    }
                ]
            }
        },
        shell: {
            options: {
                stderr: false
            },
            multiple: {
                command: [
                    'ant -buildfile C:\\Users\\Ben\\Documents\\Projects\\CouchSales_Core\\build.xml',
                    'copy /Y  C:\\Users\\Ben\\Documents\\Projects\\CouchSales_Core\\dist\\CouchSales_Core.war "C:\\tomcat\\webapps\\CouchSales_Core.war"'
                ].join('&&')
            }
        }
    });
    grunt.loadNpmTasks('grunt-war');
    grunt.loadNpmTasks('grunt-tomcat-deploy');
    grunt.loadNpmTasks('grunt-shell');
    grunt.registerTask('default', ['war', 'tomcat_redeploy', 'shell']);
};

