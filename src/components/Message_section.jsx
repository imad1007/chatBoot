import React from 'react'
import '../css/Message_section.css'
export default function Message_section() {

  const sessionCoversation = [
    {
      id: 1,
      auth: 'user',
      text: 'Can you explain the concept of "nostalgia" to a kindergartener?'
    },
    {
      id: 2,
      auth: 'boot',
      text: "Sure! Nostalgia is a feeling that grown-ups sometimes have when they remember something from the past that makes them happy. It's like when you look at old pictures or hear a song that reminds you of good times. It's a warm and fuzzy feeling that makes people smile because they remember something special and fun from a long time ago. So, nostalgia is like a happy memory from when you were younger."
    },
    {
      id: 3,
      auth: 'user',
      text: 'Give me 3 ideas about how to plan good New Years resolutions. Give me some that are personal, family, and professionally-oriented.'
    },
    {
      id: 4,
      auth: 'boot',
      text: "Certainly! Here's the information presented in a regular text format:For personal resolutions, consider focusing on health and wellness by setting specific goals like exercising regularly, adopting a balanced diet, or achieving a target weight. Break down larger goals into manageable steps. Another option is skill development – identify a skill you want to acquire or improve upon, and create a schedule for consistent practice.In the family domain, resolutions might involve spending more quality time together. Commit to regular family dinners, game nights, or outdoor activities. Enhance communication by scheduling family meetings to discuss concerns and achievements. Set shared family goals, encouraging collaboration and a sense of accomplishment.Professionally, think about skill enhancement relevant to your career. Attend workshops, take online courses, or engage in on-the-job training. Focus on networking and relationship building by attending industry events, joining professional organizations, and participating in mentorship opportunities. Prioritize work-life balance by setting clear boundaries, managing stress, and allocating time for relaxation and hobbies outside of work hours.Remember to make your resolutions specific, measurable, achievable, relevant, and time-bound (SMART) to increase the likelihood of success."
    },
    {
      id: 5,
      auth: 'user',
      text: 'Can you explain the concept of "nostalgia" to a kindergartener?'
    },
    {
      id: 6,
      auth: 'boot',
      text: "Sure! Nostalgia is a feeling that grown-ups sometimes have when they remember something from the past that makes them happy. It's like when you look at old pictures or hear a song that reminds you of good times. It's a warm and fuzzy feeling that makes people smile because they remember something special and fun from a long time ago. So, nostalgia is like a happy memory from when you were younger."
    },
    {
      id: 7,
      auth: 'user',
      text: 'Give me 3 ideas about how to plan good New Years resolutions. Give me some that are personal, family, and professionally-oriented.'
    },
    {
      id: 8,
      auth: 'boot',
      text: "Certainly! Here's the information presented in a regular text format:For personal resolutions, consider focusing on health and wellness by setting specific goals like exercising regularly, adopting a balanced diet, or achieving a target weight. Break down larger goals into manageable steps. Another option is skill development – identify a skill you want to acquire or improve upon, and create a schedule for consistent practice.In the family domain, resolutions might involve spending more quality time together. Commit to regular family dinners, game nights, or outdoor activities. Enhance communication by scheduling family meetings to discuss concerns and achievements. Set shared family goals, encouraging collaboration and a sense of accomplishment.Professionally, think about skill enhancement relevant to your career. Attend workshops, take online courses, or engage in on-the-job training. Focus on networking and relationship building by attending industry events, joining professional organizations, and participating in mentorship opportunities. Prioritize work-life balance by setting clear boundaries, managing stress, and allocating time for relaxation and hobbies outside of work hours.Remember to make your resolutions specific, measurable, achievable, relevant, and time-bound (SMART) to increase the likelihood of success."
    },
  ]
  return (
    <div className='container'>
      <div className="message_section">
        <div className="header"></div>
        <div className="messages_body">

          {
            sessionCoversation.map((item, index) => (
              <>
              {item.auth==='user'?
                <div key={index.id} className="user_message message">
                  <div className="user_photo">
                    IH
                  </div>
                  <div className="user_text_mesage">
                    <div id="user">
                      YOU
                    </div>
                    <p className="user_message_text_index">
                      {item.text}
                    </p>
                  </div>
                </div>
                :
                <div className="boot_message message">
                  <div className="boot_photo">
                    <i class="fa-solid fa-spider"></i>
                  </div>
                  <div className="boot_text_mesage">
                    <div id="boot">ChatGpt</div>
                    <p className="boot_message_text_index">
                    {item.text}
                    </p>
                  </div>
                </div>
                }
              </>))}
        </div>
        <div className="footer">
          <form action="">
            <div className='message_input_elements'>
              <input className='message_input' type="text" placeholder='Message ChatGpt...' />
              <i class="fa-solid fa-arrow-up"></i>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
