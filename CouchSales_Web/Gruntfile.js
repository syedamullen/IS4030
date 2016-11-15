/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



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
            war_dist_folder: 'build',    /* Folder where to generate the WAR. */
            war_name: 'CouchSales',                    /* The name fo the WAR file (.war will be the extension) */
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
      }
    });
    
    grunt.loadNpmTasks('grunt-war');
    
    grunt.loadNpmTasks('grunt-tomcat-deploy');
    grunt.registerTask('default', ['war','tomcat_redeploy']);
};
