module.exports = function(grunt) {
	grunt.initConfig({
		sass: {
			normal: {
				options: {
					sourcemap: 'auto'
				},
				files: [{
					src: 'src/bootstrap-grid.scss',
					dest: 'dist/bootstrap-grids.css'
				}]
			},
			dist: {
				options: {
					sourcemap: 'none',
					style: 'compressed'
				},
				files: [{
					src: 'src/bootstrap-grid.scss',
					dest: 'dist/bootstrap-grids.min.css'
				}]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.registerTask('build', ['sass:dist']);
}