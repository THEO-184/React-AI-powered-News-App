import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
	footer: {
		textAlign: "center",
		position: "fixed",
		left: 0,
		top: "20%",
		zIndex: 2,
		[theme.breakpoints.down("sm")]: {
			display: "none",
		},
	},

	socialApps: {
		display: "flex",
		flexDirection: "column",
		alignItems: "center",
		justifyContent: "space-between",
		height: "250px",
		marginLeft: "5px",
		// background: "#10043A",
		padding: "10px",
	},
	title: {
		[theme.breakpoints.down("md")]: {
			fontSize: "1rem",
		},
	},

	socialIcons: {
		width: "50px",
		height: "50px",
		borderRadius: "50px",
		// background: "#fff",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
	},

	icons: {
		width: "30px",
		height: "30px",
	},

	link: {
		textDecoration: "none",
		color: "rgba(21, 101, 192)",
	},
	image: {
		marginLeft: 20,
	},
	card: {
		display: "flex",
		justifyContent: "center",
		alignItems: "center",
		width: "50%",
		padding: "3%",
		borderRadius: 10,
		color: "white",
		backgroundColor: "rgba(21, 101, 192)",
		margin: "0 12px",
		textAlign: "center",
		height: "25vmin",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column-reverse",
			textAlign: "center",
			width: "100%",
			height: "initial",
			"&:nth-of-type(1)": {
				marginBottom: "12px",
			},
		},
	},
	infoContainer: {
		display: "flex",
		alignItems: "center",
		justifyContent: "space-around",
		[theme.breakpoints.down("sm")]: {
			flexDirection: "column",
		},
	},
	logoContainer: {
		padding: "0 100px",
		textAlign: "center",
		[theme.breakpoints.down("sm")]: {
			padding: "10px 30px",
			fontSize: "10px",
		},
	},
	alanLogo: {
		height: "27vmin",
		borderRadius: "15%",
		padding: "0 5%",
		margin: "3% 0",
		[theme.breakpoints.down("sm")]: {
			height: "35vmin",
		},
	},
}));
