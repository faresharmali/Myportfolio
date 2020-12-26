import ReactDOM from 'react-dom'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

window.addEventListener('scroll', function(e) {
    if(window.scrollY>500){
      alert("fuck");
    }
  });