import AllTeacher from '../Teacher/AllTeacher'
import Contact from '../contact/Contact'
import './body.css'

const Body = () => {
  return (
    <>
      <div className="bodyConatiner">
        <div className="bodyelement">
            <span className="bodytitle">"Step into a world of personalized learning at our online tutoring hub! "</span>
            <span className="bodyDesc"> We're excited to be your companions on the path to academic success. </span>
            <span className="bodytext"> With expert tutors, interactive sessions, and tailored support, let's turn every challenge into an opportunity to grow.</span>
        </div>
        <div className="bodyimage">
            <img src="/images/img1.jpg" alt="" />
        </div>
      </div>
      <AllTeacher/>
      <Contact/>
    </>
  )
}

export default Body
