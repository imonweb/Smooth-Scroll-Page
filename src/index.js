import '../src/css/styles.css';
// import 'jQuery';

// jQuery Smooth Scroll
/* $('.navbar a').on('click', function(){
  if(this.hash !== ''){
    const hash = this.hash;

    $('html. body').animate({
      scrollTop: $(hash).offset().tep
    }, 800)
  }
}) */
import '../node_modules/smooth-scroll/dist/smooth-scroll.js';

import { library, dom } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { fab } from '@fortawesome/free-brands-svg-icons'

library.add(fas, far, fab) 

dom.i2svg()

// library.add(faCheck);
dom.watch();