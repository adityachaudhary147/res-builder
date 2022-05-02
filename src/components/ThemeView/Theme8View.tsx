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
import "./theme8view.css";
import { HeadAlign } from "../../redux/reducers/customization/HeadAlignReducer";
import { ThemeState } from "../../redux/reducers/customization/ThemeReducer";
// import MyDocument from './pdfFormation';
interface PreviewProps {
  message: string;
}
const Theme4View: React.FC<PreviewProps> = ({ message }: PreviewProps) => {
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
          <div className="header-preview-8">
          <div className={`preview-heading-${headAlign.headalign}`}>
              <div className="full-name-8">{head.name}  
              <span className="profession-8">{head.statement} </span></div>
              {/* <div className={`head-content-${headAlign.contentalign}`}> */}
              <div className="">'
              <span className="preview-mobile">{head.mobile} </span> <span>|</span>
               <span className="preview-email">{head.email}</span> <span>|</span><span className="preview-website">147chaudhary.me</span>
            
              </div>
              {/* </div> */}
            </div>
          </div>
          <div className="preview-page-content-8"  >
            <h2 className="title-preview-8">Education </h2>

            {education.education &&
              education.education.map((val) => {
                return (
                  <>
                    <div className="preview-education">
                      {" "}
                      <span className="duration">
                        {val.start_year}-{val.end_year}
                      </span>
                      <div className="uni-Name">
                        {val.schoolname},{val.location}
                        <div> {val.course}</div>
                      </div>
                      {" "}
                     
                    </div>
                  </>
                );
              })}

            <h2 className="title-preview-8">Experience </h2>
            {experience.exp &&
              experience.exp.map((val) => {
                return (
                  <>
                    <div className="preview-experience">

                    <div className="duration">{val.duration}</div>
                      <div>
                        {val.job_title} , ( {val.company} )
                        <ul>
                          <li>{val.description}</li>
                          <li>{val.description2}</li>
                        </ul>
                      </div>
                      <div>
                        
                      </div>
                    </div>
                  </>
                );
              })}

            <h2 className="title-preview-8">Skills</h2>
            <div className="preview-skill">
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

export default Theme4View;
