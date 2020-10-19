import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";

import FooterLabel from "./FooterLabel";
import SocialMediaGrid from "./SocialMediaGrid";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "80%",
		margin: "auto",
		textAlign: "center",
	},
	author: {},
	divider: {
		margin: "20px auto",
	},
	labelGrid: {
		marginTop: "16px",
	},
}));

export default function Footer() {
	const classes = useStyles();

	return (
		<div className={classes.root}>
			<Grid
				className={classes.labelGrid}
				container
				justify="center"
				spacing={2}
			>
				<FooterLabel label="About" />
				<FooterLabel label="Blog" />
				<FooterLabel label="Terms & Conditions" />
				<FooterLabel label="Contact us" />
			</Grid>

			<Divider className={classes.divider} />

			<SocialMediaGrid />

			<Typography
				className={classes.author}
				variant="caption"
				align="center"
			>
				© 2020 Ivan Vasilev
			</Typography>
		</div>
	);
}
