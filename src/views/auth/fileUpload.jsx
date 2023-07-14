// // import "./index.css";
// import { useState } from "react";
// import axios from "axios";

// function App() {
//   const [file, setFile] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [res, setRes] = useState({});
//   const handleSelectFile = (e) =>{
//     console.log(e.target.file[0]);
//     setFile(e.target.files[0]);
//   }
                             
//   const handleUpload = async () => {
//     try {
//       setLoading(true);
//       const data = new FormData();
//       data.append("my_file", file);
//       const res = await axios.post("http://localhost:/api/v1/upload", data);
//       setRes(res.data);
//     } catch (error) {
//       alert(error.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
      
//   );
// }
// export default App;


// import React,{Component} from 'react';
// import axios from "axios";
// class App extends Component{

//   state={
//     file:null}

// hadleFile(e){
//   let file=e.target.files[0];
//  this.setState({key:"val"})

// }

// handleUpload(e){
//   // console.log(this.state,"the state ");
//   let file=this.state.file;
//   let formdata=new FormData();
//   formdata.append('image',file)
//   formdata.append("name","arjun govda")

//   axios({
//     url:`http://localhost:8006/api/v1/upload`,
//     method:"POST",
//     headers:{
//       //Authorization:`Bearer ${token}`
//     },
//     data:formdata,
//   }).then((res)=>
//   {
//     res.json({
//       success:true,

//       message:'Video Successfully Uploaded',
//   })
//   },(err)=>{
//     console.log(err);
//        this.setState({errorMsg: err})
//   }
  
//   )

// }


// render(){
//   return(
//  <div className="App">
//   <h1>The Form</h1>


//  <form>
//   <div className="">
//     <label>Select File</label>
//     <input type="file" name="file" onChange={(e)=>this.handleFile(e)}/>

//   </div>

// <br/>

// <button type="button" onClick={(e)=>this.handleUpload(e)}>Upload</button>


//  </form>


//  </div>


//   )
// }




//   }