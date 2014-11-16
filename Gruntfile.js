module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      dist: {
        src: ['app/js/app.js'],
        dest: 'app/dist/app.js'
      }
    },
    uglify: {
      dist: {
        files: {
          'app/dist/app.min.js': 'app/dist/app.js'
        }
      }
    },
    less: {
      dist: {
        options: {
          strictMath: true,
          strictUnits: true,
          relativeUrls: false,
          paths: ['app/bower_components/']
        },
        files: {
          'app/dist/app.css': 'app/app.less'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-less');

  grunt.registerTask('default', [
    'browserify',
    'uglify',
    'less'
  ]);
};