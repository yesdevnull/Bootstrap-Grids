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
			dist_normal: {
				options: {
					sourcemap: 'none',
					style: 'compressed'
				},
				files: [{
					src: 'src/bootstrap-grid.scss',
					dest: 'dist/bootstrap-grid.min.css'
				}]
			},
			dist_scss: {
				options: {
					sourcemap: 'none',
					style: 'compressed'
				},
				files: [{
					src: 'src/bootstrap-grid.scss',
					dest: 'dist/_bootstrap-grids.scss'
				}]
			}
		}
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	
	grunt.registerTask('build', ['sass:dist']);
}