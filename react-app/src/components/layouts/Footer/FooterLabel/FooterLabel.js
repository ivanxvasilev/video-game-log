import React from "react";
import { Grid, Typography } from "@material-ui/core";

const FooterLabel = ({ label }) => {
	return (
		<Grid item xs sm md>
			<Typography align="center" color="textSecondary">
				{label}
			</Typography>
		</Grid>
	);
};

export default FooterLabel;
