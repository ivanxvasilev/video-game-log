import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Grid } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import InstagramIcon from "@material-ui/icons/Instagram";
import FacebookIcon from "@material-ui/icons/Facebook";

import SocialMediaItem from "./SocialMediaItem";

const useStyles = makeStyles((theme) => ({
	root: {
		maxWidth: "300px",
		margin: "auto",
	},
}));

const SocialMediaGrid = (props) => {
	const classes = useStyles();

	return (
		<Grid className={classes.root} container justify="center" spacing={2}>
			<SocialMediaItem>
				<GitHubIcon />
			</SocialMediaItem>
			<SocialMediaItem>
				<LinkedInIcon />
			</SocialMediaItem>
			<SocialMediaItem>
				<InstagramIcon />
			</SocialMediaItem>
			<SocialMediaItem>
				<FacebookIcon />
			</SocialMediaItem>
		</Grid>
	);
};

export default SocialMediaGrid;
