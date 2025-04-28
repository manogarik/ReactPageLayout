import Header1 from "./Header1";
import Header2 from "./Header2";


export default function EmployeePage()
{
    return (

        <div className = "employee">
       
    <Header2/>
    <div>
        <div className="employname">
            <h3>Julie Taylor</h3>
            <h4>VP of Marketing</h4>
        </div>
        <div className="employeeitem">
            <div className="name">
                Call Office
            </div>
            <div className="role">
                781-000-0002
            </div>
            
        </div>
        <div className="employeeitem">
            <div className="name">
               Call Mobile
            </div>
            <div className="role">
                781-000-0003
            </div>
            
        </div>
        <div className="employeeitem">
            <div className="name">
                SMS
            </div>
            <div className="role">
                765-234-1234
            </div>
            
        </div>
        <div className="email">
            <p>Email</p>
            <p>jtaylor@fakeemail.com</p>
        </div>
      
    </div>
    
  </div>
    )
}