import React from 'react';
import Header from './header';


function Add (props) {  
    return (<div>
      <Header />
  <div className='col-sm-12 addbookdiv'>
  <div className="updatediv">
  <form name = "myForm" onSubmit={props.onSubmit}>
  <h1 className='text'>{props.title}</h1>
          <input type="number" name="id" style={{display:"none"}} 
          defaultValue={props.id} disabled required /><br/>
          <label>Author Name</label>
          <input type="text" name="name" className="form-control b" 
          defaultValue={props.name}  onChange={e => props.setName(e.target.value)} 
          placeholder='Enter a Author name' required /><br/>

              <label>Age</label>
          <input type="text" name="age" className="form-control b" 
          defaultValue={props.age} onChange={e => props.setAge(e.target.value)} 
          placeholder="Age" required /><br/>
          <button type="submit" className='btn btn-primary' >{props.button}</button>   
          </form>
  </div>
 </div>

</div>
    )
}

export default Add;



// import Header from './header'


// function UpdateAuthor() {
    
//    
    
//     return (
    
//     <div>
//             <Header />
//         <div className='col-sm-12 addbookdiv'>
//         
//            <div className="updatediv">
// 		            
// 		            <label>Author Name</label>
// 		            
                    
//                     <label>Age</label>
// 		            
                   
               

//                     </div>
//                 </form>
                
//                 )}
//             }
//                 )}
//        </div>
     
//     </div>
//     )
//         }

// export default UpdateAuthor