import './icons.css'

import { IoMdHome } from 'react-icons/io'
import { FaMusic } from 'react-icons/fa'
import { RiChatSmile3Fill } from 'react-icons/ri'
import { FaTools } from 'react-icons/fa'
import { FaDiceD6 } from 'react-icons/fa'

const icons = () => {
    return (
      <div className="icons">
        <span className="icon active">
          <IoMdHome />
        </span>
        <span className="icon">
          <FaMusic />
        </span>
        <span className="icon">
          <RiChatSmile3Fill />
        </span>
        <span className="icon">
          <FaDiceD6 />
        </span>
        <span className="icon">
          <FaTools />
        </span>
      </div>
    )
}
 
export default icons;