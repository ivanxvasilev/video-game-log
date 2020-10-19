import React from "react";
import { Grid, IconButton } from "@material-ui/core";

const SocialMediaItem = (props) => {
	return (
		<Grid item xs sm md>
			<IconButton color="primary" component="span">
				{props.children}
			</IconButton>
		</Grid>
	);
};

export default SocialMediaItem;
