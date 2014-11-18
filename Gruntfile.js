module.exports = function(grunt) {

  grunt.initConfig({
    browserify: {
      options: {
        transform: [
          require('grunt-react').browserify,
          'debowerify'
        ]
      },
      dist: {
        src: ['src/app.js'],
        dest: 'dist/app.js'
      }
    }
  });

  grunt.loadNpmTasks('grunt-browserify');

  grunt.registerTask('default', [
    'browserify'
  ]);
};