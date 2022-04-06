// import { Canvas } from '@react-pdf/renderer';
import React from "react";
import { useSelector } from "react-redux";
// import { convertToObject, forEachLeadingCommentRange } from 'typescript';
import { RootState } from "../../redux/reducers";
import { HeadState } from "../../redux/reducers/headReducer";
import { eduState } from "../../redux/reducers/educationReducer";
import { expState } from "../../redux/reducers/expReducer";
import { skillsState } from "../../redux/reducers/skillsReducer";
// import jsPDF from "jspdf";
// import html2canvas from "html2canvas";
import "./theme1view.css";
import { fonts } from "../../redux/reducers/customization/fontReducer";
import { HeadAlign } from "../../redux/reducers/customization/HeadAlignReducer";
import { ThemeState } from "../../redux/reducers/customization/ThemeReducer";
// import MyDocument from './pdfFormation';
interface PreviewProps {
  message: string;
}
const Theme1View: React.FC<PreviewProps> = ({ message }: PreviewProps) => {
  const head: HeadState = useSelector((state: RootState) => state.personal);
  const education: eduState = useSelector((state: RootState) => state.sections.education);
  const experience: expState = useSelector((state: RootState) => state.sections.exp);
  const skills: skillsState = useSelector((state: RootState) => state.sections.skill);
  const headAlign:HeadAlign=useSelector((val:RootState)=>val.customize.headAlign);
  
  
  return (
    <>
      <div>
        <div className="preview" >
          <div id='preview'>
          <div className="header-preview-t1">
          <div className={`preview-heading-t1-${headAlign.headalign}`}>
              <div className="full-name-t1">{head.name},{head.statement} </div>
              
              <div className="belowhead-line-t1">
              {/* <div className={`head-content-${headAlign.contentalign}`}> */}
             <span className="preview-mobile-t1">{head.mobile} </span> <span>|</span>
               <span className="preview-email-t1">{head.email}</span> <span>|</span><span className="preview-website">147chaudhary.me</span>
              {/* </div> */}
              </div>
            </div>
          </div>
          <div className="preview-page-content-t1"  >
            
            
            
            
            
            <h2 className="title-preview-t1">Education </h2>

            {education.education &&
              education.education.map((val) => {
                return (
                  <>
                    <div className="preview-education-t1">
                      {" "}
                      <div className="course-t1"> {val.course}</div>
                      <span className="duration-t1">
                        {val.start_year}-{val.end_year}
                      </span>
                      <div className="uni-Name">
                        {val.schoolname}
                        
                      </div>
                      <div>
                      {val.location}
                      </div>
                      {" "}
                     
                    </div>
                  </>
                );
              })}

            <h2 className="title-preview-t1">Experience </h2>
            {experience.exp &&
              experience.exp.map((val) => {
                return (
                  <>
                    <div className="preview-experience-t1">

                    
                      <div >
                        <div className="course-t1">
                        {val.job_title} , {val.company} 
                        </div>
                        
                        <div><ul>
                          <li>{val.description}</li>
                          <li>{val.description2}</li>
                        </ul></div>
                        
                      </div>
                      <div>
                      <div className="duration-t1">{val.duration}</div>
                      </div>
                    </div>
                  </>
                );
              })}

            <h2 className="title-preview-t1">Skills</h2>
            <div className="skill-preview--t1">
            {skills.skills.map((val) => (
              <div >{val}</div>
            ))}
            </div>
          </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Theme1View;
