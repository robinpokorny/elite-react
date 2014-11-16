module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      options: {
        transform: [ require('grunt-react').browserify ]
      },
      app: {
        src: ['app/js/app.js'],
        dest: 'app/dist/app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', [
    'browserify'
  ]);
};