import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import FooterLabel from "./FooterLabel";

import IconButton from "@material-ui/core/IconButton";

import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

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
	iconGrid: {
		maxWidth: "300px",
		margin: "auto",
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

			<Grid
				className={classes.iconGrid}
				container
				justify="center"
				spacing={2}
			>
				<Grid item xs sm md>
					<IconButton color="primary" component="span">
						<GitHubIcon />
					</IconButton>
				</Grid>
				<Grid item xs sm md>
					<IconButton color="primary" component="span">
						<LinkedInIcon />
					</IconButton>
				</Grid>
				<Grid item xs sm md>
					<IconButton color="primary" component="span">
						<InstagramIcon />
					</IconButton>
				</Grid>
				<Grid item xs sm md>
					<IconButton color="primary" component="span">
						<FacebookIcon />
					</IconButton>
				</Grid>
			</Grid>

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
