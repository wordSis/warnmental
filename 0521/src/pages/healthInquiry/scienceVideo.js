import React ,{ Component } from 'react';

export default class ScienceVideo extends Component {
    state={
        data:[
            {
                title: ' Title 1',
              },
              {
                title: ' Title 2',
              }, 
        ]
    }
    render() {
      return (
        <div style={{padding:'20px 150px'}} >           
            <ul style={{listStyle:'none'}}>
                {
                    this.state.data.map((item,index)=>{  
                        return(
                            <li key={index}  style={{width:'50%',float:'left'}}>
                                <video src="movie.ogg" style={{border:'1px solid #ccc'}} poster='' controls='controls'/>
                                <span  style={{width:'30%'}}>{item.title}</span>    
                            </li>
                        )  
                    })
                }
            </ul>
               
        </div>
      )
    }
}