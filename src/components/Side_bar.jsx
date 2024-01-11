import React,{useState} from 'react'
import '../css/Side_bar.css'
export default function Side_bar() {
    const [openSideBar,setOpenSidebar] = useState(true);

    const handelOpenSidebar = ()=>{
        setOpenSidebar(!openSideBar)
    }
  return (
    <div className={` ${openSideBar===false?'closeSidebar':'side_bar'}`}>
        <div className="side_bar_header">
            <div className="close_button" onClick={handelOpenSidebar}>
                {
                openSideBar === false?<i class="fa-solid fa-caret-right"></i>:<i class="fa-solid fa-caret-left"></i>
                }
            </div>
            <div className="new_chat">
               <div>
                <i class="fa-solid fa-spider"></i><span style={{color:'white',fontSize:'12px',margin:'4px'}}>New chat</span>
               </div>
               <div>

                <i class="fa-regular fa-pen-to-square"></i>
               </div>
            </div>
        </div>
        <div className="side_bar_body"></div>
        <div className="side_bar_footer">
            <div className="upgrade">
                <i class="fa-solid fa-arrow-up-from-bracket"></i>
                <div className="upgrade_texts">
                    <h5>Upgdare plan</h5>
                    <small>Get chatGpt-4, Dell...</small>
                </div>
            </div>
            <div className="profile">
                <h4 className='profile_photo'>IH</h4>
                <h5 className="profile_name">Imad hamdouch</h5>
            </div>
        </div>
    </div>
  )
}
