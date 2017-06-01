class App extends React.Component {
	
	constructor(props) {
		super(props);
		this.state = {
			blogList: props.blogs
		}
	}

	render() {

		return(
			<div>
				<Header />
				<div className="main-content">
					<Blogs blogList = {this.state.blogList} />
				</div>
				<SideBar />
				<Footer />
			</div>

			)
	}
}

function Blogs(props) {
	var blogs = props.blogList.map(function(blog, index) {

		return(
				<div key= {index} className="blog">
					<h2>{blog.title}</h2>
					<p>{blog.content}</p>
				</div>
			)

	})

	return(
			<div className="blogs-container">
				{blogs}
			</div>
		)

}

function Header() {
	return(
		<div className="header-container">
			<header>
				<h1 className="main-header">The Enlightened Citizen</h1>
			</header>
		</div>	
		)
}

function Footer() {
	return(
		<div className="footer">
			<footer>
				<p>Copyright 2017 NYCDA</p>
			</footer>
		</div>
		)
}

function SideBar() {
	return(
		<div className="sidebar-container">
			<div className="profile-pic"></div>
			<p className="bio">I am a writer, designer, explorer and human living under the stars.</p>
		</div>
		)
}

var blogList = [
	{
		title: "Bernie Wins the 2020 Presidential Election!",
		content: "In a stunning upset, President Trump is ousted from power.  Sanity is restored to the American Republic."
	},
	{
		title: "The Hyperloop Opens Today in Abu Dhabi",
		content: "The future of long distance transportation is launching in the Arab Gulf.  The world is eagerly watching the dawn of a new age."
	},
	{
		title: "Autonomous Cars are filling the streets of San Francisco.",
		content: "It's the beginning of the end of the human auto age.  After 130 years of dominance, the machine is taking the reins from it's once master."
	}
]

ReactDOM.render(
		<App blogs={blogList} />,
		document.getElementsByClassName("react-div")[0]
	)