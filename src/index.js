import { createRoot } from 'react-dom/client'
import './index.css'

import Navbar from './navbar'
import Icons from './icons'
import Video from './videos'

const Body = () => {
    return (
      <div className="body">
        <div className="first">
          <Navbar />
        </div>
        <div className="second">
          <Icons />
          <Video/>
        </div>
      </div>
    )
}

const root = createRoot(document.getElementById('root'));
root.render(<Body />);