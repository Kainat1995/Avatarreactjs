// import React, {Component} from 'react';
// import './Avatar.css';
// import Avatarlist from './Avatarlist';
// import 'tachyons';


// 	class Avatar extends Component{
// 		constructor(){
// 			super();
// 			this.state = {
// 				name : "Welcome to Avatar World"
// 			}
// 		}
// 		namechange(){
// 			this.setState({
// 				name: "Subscribe to my channel"
// 			})
// 		}
		
// 		render(){
// 			const avatarlistarray = [
// 	{
// 		id:1,
// 		name: "zehra",
// 		work:"web developer"
// 	},
// 	{
// 		id:2,
// 		name: "fatima",
// 		work:"web developer"
// 	},
// 	{
// 		id:3,
// 		name: "aasma",
// 		work:"web developer"
// 	},
// 	{
// 		id:4,
// 		name: "kainat",
// 		work:"web developer"
// 	}

// 	]

// 	const arrayavatarcard = avatarlistarray.map( (avatarcard, i) => {
// 					return		<Avatarlist key={i} id={avatarlistarray[i].name}
// 								 name={avatarlistarray[i].name} 
// 								work={avatarlistarray[i].work}/>
// 	})	


// 			return ( <div className="mainpage">
// 			<h1> {this.state.name} </h1>
// 			{arrayavatarcard}
// 			<button onClick = { () => this.namechange () }> Subscribe </button> 
// 			</div>
// 			)
// 		}
// }

// export default Avatar;