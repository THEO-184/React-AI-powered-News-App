import { makeStyles } from "@material-ui/core/styles";

export default makeStyles({
	container: {
		padding: "0 5%",
		width: "100%",
		margin: 0,
		fontFamily: "Arial, Helvetica, sans-serif",
	},

	searchTerms: {
		fontSize: "1rem",
		fontFamily: "inherit",
	},

	card: {
		display: "flex",
		flexDirection: "column",
		justifyContent: "space-between",
		alignItems: "center",
		// width: "100%",
		fontFamily: "inherit",
		height: "45vh",
		padding: "10%",
		borderRadius: 10,
		color: "white",
	},

	infoCard: {
		display: "flex",
		flexDirection: "column",
		textAlign: "center",
	},
});
