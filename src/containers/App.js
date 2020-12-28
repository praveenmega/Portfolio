import React, {Component} from 'react';
import Cardlist from '../components/Cardlist';
import './App.css'
import Toolbar from '../components/Toolbar';
import Modal from '../components/Modal';
import OriginalImage from '../components/OriginalImage';
import Sidedrawer from '../components/Sidedrawer';

class App extends Component {
	constructor() {
		super()
		this.state={
			robots:[],
			searchfield:'',
			showmodal:false,
			clickedimageid:null,
			showsidedrawer:false
		}
	}

	componentDidMount() {
		fetch('https://picsum.photos/v2/list?page=5&limit=50')
  		.then(response => response.json())
  		.then(users => this.setState({robots:users}))
	}

	onSearchChange= (event) => {
		this.setState({searchfield:event.target.value})
	}

	showModalHandler =(event) => {
		this.setState({showmodal:true})
		this.setState({clickedimageid:event.target.id})
	}

	closeModalHandler =() => {
		this.setState({showmodal:false})
	}

	showSideDrawerHandler =() => {
		this.setState({showsidedrawer:true})
	}

	closeSideDrawerHandler =() => {
		this.setState({showsidedrawer:false})
	}

	render() {
		const filteredCards = this.state.robots.filter( robot => {
			return robot.author.toLowerCase().includes(this.state.searchfield.toLowerCase());
		})

		if(this.state.robots.length===0)
		{
			return <h1>Loading...</h1>
		}

		else
		{
			return (
				<div className='tc'>
					<Toolbar searchChange={this.onSearchChange} openedSide={this.showSideDrawerHandler}/>
					<Sidedrawer searchChange={this.onSearchChange} opened={this.state.showsidedrawer} closed={this.closeSideDrawerHandler}/>
					<Modal show={this.state.showmodal} closed={this.closeModalHandler}>
						<OriginalImage imgid={this.state.clickedimageid}/>
					</Modal>
					<main style={{marginTop:76}}>
						<Cardlist robots={filteredCards} openModal={this.showModalHandler}/>
					</main>
				</div>
			);
		}
		
	}
}

export default App;