var app    = './app';
var build  = './build';
var fontName  = 'app-font';

module.exports = {

  app: app,
  build:  build,

  browserSync: {
    notify: false,
    open:   false,
    server: build,
    files: [
      build + '/assets/css/styles.css'
    ],
  },

  styles: {
    src :                app + '/assets/scss',
    files_src:           app + '/assets/scss/**/*.scss',
    main_dest:           build + '/assets/css/main.css',
    dest:                build + '/assets/css/',
    file_normalize_css:  './node_modules/normalize.css/normalize.css',
    file_normalize_scss: app + '/assets/scss/base/_b-normalize.scss',
    pages_list: [
      './build/index.html',
      './build/404.html'
    ]
  },

  scripts: {
    files_src: app + '/assets/js/**/*.js',
    main_src:  app + '/assets/js/main.js',
    main_name: 'main.js',
    dest:      build + '/assets/js/',
    main_dest: build + '/assets/js/main.js'
  },

  templates: {
    src:        app + '/template',
    files_src:  app + '/template/**/*.jade',
    page_src:   app + '/template/pages/**/*.jade',
    dest:       build,
    files_dest: build + '/**/*.html',
    urlLocal : 'http://localhost:3000',
    urlProd : 'http://sutterlity.fr'
  },

  images: {
    files_src: [
      '!' + app + '/assets/img/sprite/**/*.svg',
      '!' + app + '/assets/img/sprite.svg',
      app + '/assets/img/**/*.{jpg,png,gif,svg}'
    ],
    dest:      build + '/assets/img'
  },

  svgstore: {
    files_src_svg_sprites: app + '/assets/img/sprite/*.svg',
    dest:                  app + '/assets/img',
    file_dest:             app + '/assets/img/sprite.svg'
  },

  rootfiles: {
    src:  app + '/rootfiles/**',
    dest: build
  },

  fonts: {
    src:  app + '/assets/fonts/**',
    dest: build + '/assets/fonts'
  }

};
